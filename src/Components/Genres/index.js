import React, { useContext } from 'react'
import Context from 'Contexts/global'
import './style.scss'

import { Checkbox } from 'Components'

const Home = (props) => {
	const state = useContext(Context)


	function onToggleGenre(id){
		let newGenres= Object.assign([], state.genres)
		for (var i = newGenres.length - 1; i >= 0; i--) {
			if (newGenres[i].id === id){
				
				newGenres[i].selected = !state.genres[i].selected
			}
		}
		// console.log('toggling', newGenres)
		state.setGenres(newGenres)
	}
	
	return (
		<div className="genresContainer">
			{state.genres && state.genres.map((item, i ) => {
				return (
					<Checkbox {...item} label={item.name} key={i} selected={item.selected} onClick={(e) =>{
					e.stopPropagation()
					 onToggleGenre(item.id)}
					}/>
				)
			})

			}
		</div>
	)
    
}

export default Home