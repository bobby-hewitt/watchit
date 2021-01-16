import genreData from 'Data/genres'
let listSize = 12 // need to add featured on to this
let genreLimit = 3



function resultsSplitter(data){
	return new Promise((resolve, reject) => {
		const { mostPopular, remainder } = getMostPopular(data.content)
		let content = [
			
		]

		const genres = countGenres(remainder)
		breakGenreLists(data, genres).then((genreLists) => {
			content = content.concat(genreLists)
			resolve( content )
		})
	})
	

	

}

function breakGenreLists(data, genres){
	return new Promise((resolve, reject) => {
		if (data.genres.length <=1 ){
			const { mostPopular, remainder } = getMostPopular(data.content)
			let toReturn = [{
				title: "Most popular",
				content: mostPopular
			}]
			
			
			toReturn = toReturn.concat(below2genres(data, genres))
			resolve(toReturn)
		} else {
			const toReturn =over2genres(data, genres)
			resolve(toReturn)
		}
	})
}


function below2genres(data, genres){
	//remove primary genre from lists
	if (data.genres.length){
		let index= genres.findIndex((g) => g[0].indexOf(data.genres.id_list))
		genres.splice(index, 1)
	}
	
	let lists = genres.map((g) => {
		const gen =  genreData.find((gen) => gen.id_list.indexOf(parseInt(g[0])) > -1)
		if (gen){
			return{
				id: g[0],
				title: data.genres.length === 0 ? gen.name : data.genres[0].name + ' | ' + gen.name,
				content: []
			}
		} else {
			return {}
		}
	})
	for(var i = 0; i < data.content.length; i++){
		for(var j = 0; j < data.content[i].genre_ids.length; j++){
			const id = data.content[i].genre_ids[j]
			const index = lists.findIndex((l) => l.id === id.toString())
			if (index > -1 && lists[index].content.length<14){
				lists[index].content.push(data.content[i])
				break
			}
		}						
	}	
	console.log(lists)
	return lists
}

function over2genres(data, genres){
	let newData = Object.assign([], data.content)

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
	// get genre counts
	for(var i = 0; i < newData.length; i++){
		let genresCount = 0
		for(var j = 0; j < newData[i].genre_ids.length; j++){
			let thisGenre = newData[i].genre_ids[j]
			let isCounted = data.genres.findIndex((g) => g.id_list.indexOf(thisGenre) > -1) > -1
			if (isCounted) genresCount += 1
		}		
		newData[i].genresCount = genresCount
	}	
	newData = newData.sort((a,b) => b.genresCount - a.genresCount)

	//create object to return
	let toReturn = []
	let gs = data.genres.map((g) => g.id_list)
	

	let combos = []

	for (var i = 0; i <= newData[0].genresCount; i++) {
		
		combos = combos.concat(generateCombinations(gs, i ))	
	}
	

	for (var i = combos.length - 1; i >= 0; i--) {
		let combo = combos[i]
		

		function createComboTitle(){
			let title = ''
			for (var j = combo.length - 1; j >= 0; j--) {
				title += genreData.find((e) => e.id_list === combo[j]).name + ' | '
			}
			return title.slice(0,-2)
		}

		
		let rail = {
			title: createComboTitle(),
			content: [],
			combo,
		}


		for (var j = newData.length - 1; j >= 0; j--) {
			let item = newData[j]
			let isMatch = []
			for(var k = 0; k< combo.length; k++ ){
				let isInnerMatch = false
				for(var l = 0; l < combo[k].length; l++){
					
					if (item.genre_ids.indexOf(combo[k][l]) > -1){
						
						isInnerMatch = true
					} else {
						// console.log('false')
						isInnerMatch = false
					}

				}
				isMatch.push(isInnerMatch)
			}
			
			let notMatch = isMatch.findIndex((m) => m === false)
			
			if (notMatch < 0){
				rail.content.push(item)
			}

			
		}
		toReturn.push(rail)
		
	}
	console.log(toReturn)
	return toReturn
}





function countGenres(data){
	let genres = {}
	for (var i = data.length - 1; i >= 0; i--) {
		for (var j = data[i].genre_ids.length - 1; j >= 0; j--) {
			let g = data[i].genre_ids[j]
				if (genres[g] || genres[g] === 0){
					genres[g]  += 1
				} else {
					genres[g] = 0
				}
			}
		}

	let sortable = []
	for (var genreId in genres) {
	    sortable.push([genreId, genres[genreId]]);
	    sortable = sortable.sort(function(a, b) {
		    return b[1] - a[1];
		});
	}
	return sortable
}




function getMostPopular(data){

	data = data.sort((a,b) => b.popularity - a.popularity)
	return {
		mostPopular:data.slice(0, listSize + 2),
		remainder: data.slice(listSize + 2, data.length-1),
	}
	

}

export default resultsSplitter