import $ from 'jquery'
const key = 'c773362edcce3dd87050f617bf8a9b24'


export const getShowsPage =(query, page) => {
	return new Promise((resolve, reject) => {
		const url = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&watch_region=GB&page=${page}${query}`
		$.get(url, (data) => {
			for(var i = 0; i < data.results.length; i++){
				data.results[i].media_type = 'tv'
			}
			resolve(data.results)
		})
	})
}

export const getMoviesPage = (query, page) => {
	return new Promise((resolve, reject) => {
		const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&watch_region=GB&page=${page}${query}`
		$.get(url, (data) => {
			for(var i = 0; i < data.results.length; i++){
				data.results[i].media_type = 'movie'
			}
			resolve(data.results)
		})
	})

}
export const getMovie = (id) => {
	console.log("getting movie")
	return new Promise((resolve, reject) => {
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=credits,watch/providers,recommended,similar,`
		$.get(url, (data) => {
			console.log(data)
			let arr = data.similar.results.map((d) => getSimilarMovies(d.id))
			Promise.all(arr).then((similarMovies) => {
				data.similar.results = similarMovies
				console.log(data)
				resolve(data)
			})

			
		})
	})
}

function getSimilarMovies(id){
	return new Promise((resolve, reject) => {
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=watch/providers`
		$.get(url, (data) => {
			resolve(data)
		})
	})
}

export const getPerson = (id) => {
	return new Promise((resolve, reject) => {
		const url = `https://api.themoviedb.org/3/person/${id}?api_key=${key}&append_to_response=combined_credits`
		$.get(url, (data) => {
			resolve(data)
		})
	})
}


export const getShow = (id) => {
	return new Promise((resolve, reject) => {
		const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&append_to_response=credits,watch/providers,recommended,similar,`
		$.get(url, (data) => {
			resolve(data)
		})
	})
}


export const getMovies = (query, nextPage) => {
	console.log('getting moveis')
	return new Promise((resolve, reject) => {
		let page = 1

		Promise.all([
			getMoviesPage(query, page),
			getMoviesPage(query, page+1),
			getMoviesPage(query, page+2),
			getMoviesPage(query, page+3),
			getMoviesPage(query, page+4),
			// getMoviesPage(query, page+6),
			// getMoviesPage(query, page+7),
			// getMoviesPage(query, page+8),
			// getMoviesPage(query, page+9),
			// getMoviesPage(query, page+10)
		]).then((data) => {

			let newData = []
			for(var i = 0; i < data.length; i++){
				if (data[i] && data[i].length){
					newData = newData.concat(data[i])
				}
			}	

			resolve(newData)
		})
	})
}

export const getShows = (query, nextPage) => {
	return new Promise((resolve, reject) => {
		let page = nextPage || 1 
		
		Promise.all([
			getShowsPage(query, page),
			getShowsPage(query, page+1),
			getShowsPage(query, page+2),
			getShowsPage(query, page+3),
			getShowsPage(query, page+4),
			// getShowsPage(query, page +6),
			// getShowsPage(query, page+7),
			// getShowsPage(query, page+8),
			// getShowsPage(query, page+9),
			// getShowsPage(query, page+10)
		]).then((data) => {

			let newData = []
			for(var i = 0; i < data.length; i++){
				if (data[i] && data[i].length){
				newData = newData.concat(data[i])
				}
			}	
			
			resolve(newData)
		})
	})
}

