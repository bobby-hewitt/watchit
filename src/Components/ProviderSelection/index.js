import React, {useContext, useEffect }from 'react'
import './style.scss'
import Context from 'Contexts/global'
import { Results, HeroCard, ContentCard,SectionTitle, ListItem } from 'Components'
const ProviderSelection = (props) => {
	const state = useContext(Context)

	function onToggleProvider(id){
		console.log('TOGFGFLIN')

		let newProviders= Object.assign([], state.providers)


		for (var i = newProviders.length - 1; i >= 0; i--) {
			if (newProviders[i].provider_id === id){
				newProviders[i].selected = !state.providers[i].selected
			}
		}
		let selected = newProviders.filter((p) => p.selected)
		
		if (!selected || (selected && selected.length === 0)){
			
			 state.setNotification({
				count: state.notification.count + 1,
				text: "Pssst.. this works better when you've got all your streaming services selected"
			})
			
		} 
		// console.log('here' newProviders)
		 if (window.localStorage){
			state.setProviders(newProviders)
			window.localStorage.setItem('streamingProviders', JSON.stringify(newProviders))
			
		} else {
			state.setProviders(newProviders)
		}
		// console.log('toggling', newProviders)

		
	}
	
	return(
		<div id="results" className="providerSelection">

			{state.providers && state.providers.map((item, i) => {
				
				return(
					<ListItem 
						selected={item.selected}
						onClick={(e) => {
							e.stopPropagation()
							onToggleProvider(item.provider_id)}
						}
						image={`https://image.tmdb.org/t/p/w92/${item.logo_path}`}
						label={item.provider_name} />
					
				)
			})}
		</div>
	)
}

export default ProviderSelection