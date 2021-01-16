import genreData from 'Data/genres'
import { getMoviesPage, getShowsPage, getMovies, getShows } from 'Helpers/tmdb'

export const getRails = (data) => {
	return new Promise((resolve, reject) => {
		if (data.genres.length === 0){
			generateNoGenres(data)
			Promise.all(generateNoGenres(data)).then((rails) => {
				let clean = cleanData(rails)
				resolve(clean)
			})
		} else if (data.genres.length === 1){
			Promise.all(generateSingleGenreCombinations(data)).then((rails) => {
				let clean = cleanData(rails)
				resolve(clean)
			})
		} else {
			Promise.all(genreateAllGenreCombinations(data)).then((rails) => {
				let clean = cleanData(rails)
				resolve(clean)
			})
		}
	})
}

export const getViewMore = (query, contentType) => {
	
	return new Promise((resolve, reject) => {
		switch(contentType){
			case 1:
			getMovies(query, 1).then((data) => resolve(data))
			return
			case 0:
			 getShows(query, 1).then((data) => resolve(data))
			 return
			case 2:
			getShows(query, 1).then((shows) => {
				getMovies(query, 1).then((movies) => {
					const combinedResults = combineResults(shows,movies)
					resolve(combinedResults)
				})
			})
			 return 		
		}	
	
	})
}


function cleanData(rails){
	rails = rails.filter((r) => r.content.length > 0)
	for(var i = 1; i < rails.length; i++){
		let rail = rails[i]
		if (rails[i] && rails[i].content && rails[i].content[0] && rails[i-1] && rails[i-1].content && rails[i-1].content[0]){
			let thisTitle =rails[i].content[0].title ||rails[i].content[0].name
			let prevTitle =rails[i-1].content[0].title ||rails[i-1].content[0].name
			if(thisTitle === prevTitle){
				rails.content = rails[i].content.splice(0, 1)
			}
		}
	}
	return rails
}


function createRail(data){
	return new Promise((resolve, reject) => {
		getContent(data.query, data.contentType[0].id).then((content) => {
			
			resolve({
				title: data.title ? data.title.toUpperCase() : '',
				content: content,
				query: data.query 
			})
		})
	})
}

function getContent(query, contentType){

	return new Promise((resolve, reject) => {
		switch(contentType){
			case 1:
			getMoviesPage(query, 1).then((data) => resolve(data))
			return
			case 0:
			 getShowsPage(query, 1).then((data) => resolve(data))
			 return
			case 2:
			getShowsPage(query, 1).then((shows) => {
				getMoviesPage(query, 1).then((movies) => {
					const combinedResults = combineResults(shows,movies)
					resolve(combinedResults)
				})
			})
			 return 		
		}	
	})
}

function combineResults(arr1, arr2){
	let combined = arr1.concat(arr2)
	combined.sort((a,b) => b.popularity - a.popularity)
	return combined
}

function generateNoGenres(data){
	let rails = []
	let initialRail = createRail({
		title: "Most popular",
		contentType: data.contentTypes,
		query: generateQuery({
			sort: 'popularity',
			genres: [],
			genreOperator: ',',
			providers: data.providers,
			contentType: data.contentTypes
		})
	})
	rails.push(initialRail)
	for (var i = 0; i < genreData.length; i++){
		let rail = createRail({
			title: createTitle([genreData[i]]),
			contentType: data.contentTypes,
			query: generateQuery({
				sort: 'popularity',
				genres: [genreData[i]],
				genreOperator: ',',
				providers: data.providers,
				contentType: data.contentTypes
			})
		})
		rails.push(rail)
		
	}
	return rails
}


function generateSingleGenreCombinations(data){
	const genre = data.genres[0]
	let rails = []
	let initialRail = createRail({
		title: "Most popular " + genre.name,
		contentType: data.contentTypes,
		query: generateQuery({
			sort: 'popularity',
			genres: [genre],
			genreOperator: ',',
			providers: data.providers,
			contentType: data.contentTypes
		})
	})
	rails.push(initialRail)
	for (var i = 0; i < genreData.length; i++){
		if (genreData[i].id !== genre.id){
			let rail = createRail({
				title: createTitle([genre, genreData[i]]),
				contentType: data.contentTypes,
				query: generateQuery({
					sort: 'popularity',
					genres: [genre, genreData[i]],
					genreOperator: ',',
					providers: data.providers,
					contentType: data.contentTypes
				})
			})
			rails.push(rail)
		}
	}	
	return rails
}


function genreateAllGenreCombinations(data){
	let gs = data.genres.map((g) => g)
	let combos = []
	let results = []
	for (var i = 0; i <= gs.length; i++) {

		combos = combos.concat(generateCombinations(gs, i ))	
	}
	for (var i = combos.length - 1; i >= 0; i--) {
		let rail = createRail({
			title: createTitle(combos[i]),
			contentType: data.contentTypes,
			query: generateQuery({
				sort: 'popularity',
				genres: combos[i],
				genreOperator: ',',
				providers: data.providers,
				contentType: data.contentTypes
			})
		})
		results.push(rail)	
	}
	return results
}


function generateCombinations(sourceArray, comboLength) {
  const sourceLength = sourceArray.length;
  if (comboLength > sourceLength) return [];
  const combos = [];
  const makeNextCombos = (workingCombo, currentIndex, remainingCount) => {
    const oneAwayFromComboLength = remainingCount == 1;
    for (let sourceIndex = currentIndex; sourceIndex < sourceLength; sourceIndex++) {
      const next = [ ...workingCombo, sourceArray[sourceIndex] ];
      if (oneAwayFromComboLength) {
        combos.push(next);
      }
      else {
        makeNextCombos(next, sourceIndex + 1, remainingCount - 1);
      }
    }
  }
  makeNextCombos([], 0, comboLength);
  return combos;
}

function createTitle(arr){
	let title= ''
	for(var i in arr){
		
		title += arr[i].name + ' & '
	}
	return title.slice(0,-3)
}



function generateQuery(data){
    let providersStr = ''
    let genresStr = ''
    if (data.providers.length){
      let count = 0;
      providersStr += '&with_watch_providers='
      for (var i = data.providers.length - 1; i >= 0; i--) {
        if (data.providers[i].selected){
          count +=1
          let addition = count = 0 ? data.providers[i].provider_id : (data.providers[i].provider_id+ '|')
          providersStr += addition
        }
      }
    } 
    if (data.genres.length){
		genresStr += '&with_genres='
		let count = 0;
		for (var i = data.genres.length - 1; i >= 0; i--) {
			count +=1
			let addition = count = 0 ? data.genres[i].id : (data.genres[i].id + data.genreOperator)
			genresStr += addition
		}
	}
    let str = providersStr.slice(0,-1) + genresStr.slice(0,-1)
    return str
}



