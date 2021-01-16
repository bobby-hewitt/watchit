import React, { useState, useContext } from 'react'
import Context from 'Contexts/global'
import './style.scss'
import { ProviderSelection, GenreSelection, Tabs } from 'Components'



const MobileFilters =() => {
	const state = useContext(Context)
	const [ tabs,  setTabs ] = useState([{id: 0, type: 'genres', name: getName('genres') , selected: true}, {id: 1, type: 'providers', name: getName('providers')} ]) 

	function getName(type){
		const selected = state[type].filter((f) => f.selected)

		return `${type === 'genres' ? 'Genres ' : 'Providers '}(${selected.length})`

	}
	return (
		<div>
		<Tabs content={tabs} onClick={(index) => {
			let newTabs = Object.assign([],tabs)
			for (var i = newTabs.length - 1; i >= 0; i--) {

				if (index === i){
					newTabs[i].selected = true

				} else {
					newTabs[i].selected = false
				}
				newTabs[i].name = getName(newTabs[i].type)
			}


			
			setTabs(newTabs)
		}}/>
			{tabs[0].selected && 
				<GenreSelection />
			}
			{tabs[1].selected && 
				<ProviderSelection />
			}
			
			
		</div>
	
	)
}

export default MobileFilters