import React, { useContext, useState } from 'react'
import Context from 'Contexts/global'
import './style.scss'

import { Dropdown, Checkbox, Providers, Genres, ContentType, Tabs, WatchProviders, IconButton, GenreSelection, Button} from 'Components'

const Home = (props) => {
	const state = useContext(Context)
	const [expanded, setExpanded] = useState(false)

	function expandOrCollapse(item){
		if (item === 'Providers'){
			if (state.modal) return state.setModal(false)
			state.setModal('providers')
		}
		// if (expanded === item){
		// 	setExpanded(false)
		// } else {
		// 	setExpanded(item)
		// }
	}	

	function onContentClick(id){
		let newContentTypes= Object.assign([], state.contentTypes)
		for (var i = newContentTypes.length - 1; i >= 0; i--) {
			if (newContentTypes[i].id === id){	
				newContentTypes[i].selected = true
			} else {
				newContentTypes[i].selected = false
			}
		}
		setExpanded(false)
		state.setContentTypes(newContentTypes)
	}
	
	return (
		<div className={`menuOuterContainer ${state.showMenu && 'visible'}`}>
			<div className="selectorsContainer">
				
				<Tabs onClick={onContentClick} content={state.contentTypes}/>
				<div className="desktopFilterContainer">
					<div className="horizontalSpacer" />
					<Button label={`GENRES (${state.genres.filter((p) => p.selected).length})`} onClick={() => state.setModal({
						type: 'genres',
						title: 'Select genres',
						description: "Select up to 6 genres. We'll find the best match for your combination"

					})}/>
				</div>
				{/*<Dropdown label={`Providers (${state.providers.filter((p) => p.selected).length})`} selected={expanded === 'Providers'} onClick={() => expandOrCollapse("Providers")}/>*/}
				
				<div className="mobileFilterContainer">
				<IconButton icon="filter" noBorder  onClick={() => {
					state.setModal({
					type: 'mixed',
					title: 'Filters'
				})}}/>
				</div>
			</div>
			<div className="providersMenuContainer" onClick={() => state.setModal(state.modal ? false : {
				type: 'providers',
				title: 'Your services',
				description: "We'll only show results which you can watch for free on your subscription services. If you don't choose any services we'll show you all results"
			})}>
				<IconButton icon="plus" />
				{state.providers.filter((f) => f.selected).map((item, i)=> {
					return(
						<img className="providerIndicator" src={`https://image.tmdb.org/t/p/w92/${item.logo_path}`} />
					)
				})}
			</div>

			
		</div>
	)
    
}

export default Home