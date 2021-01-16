import React, { useContext } from 'react'
import Context from 'Contexts/global'
import './style.scss'

import { Checkbox } from 'Components'

const Home = (props) => {
	const state = useContext(Context)


	function onToggleProvider(id){

		let newProviders= Object.assign([], state.providers)
		for (var i = newProviders.length - 1; i >= 0; i--) {
			if (newProviders[i].provider_id === id){
				console.log('IN',newProviders[i].selected)
				newProviders[i].selected = !state.providers[i].selected
			}
		}
		// console.log('toggling', newProviders)

		state.setProviders(newProviders)
	}
	return (
		<div className="providersContainer">
			{state.providers && state.providers.map((item, i ) => {
				return (
					<Checkbox {...item} label={item.provider_name} key={i} selected={item.selected} onClick={(e) => {
						e.stopPropagation()
						onToggleProvider(item.provider_id)}
					}/>
				)
			})

			}
		</div>
	)
    
}

export default Home