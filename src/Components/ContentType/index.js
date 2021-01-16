import React, { useContext } from 'react'
import Context from 'Contexts/global'
import './style.scss'

import { Checkbox } from 'Components'

const ContentType = (props) => {
	const state = useContext(Context)


	function onToggleGenre(id){
		let newContentTypes= Object.assign([], state.contentTypes)
		for (var i = newContentTypes.length - 1; i >= 0; i--) {
			if (newContentTypes[i].id === id){
				
				newContentTypes[i].selected = !state.contentTypes[i].selected
			}
		}
		state.setContentTypes(newContentTypes)
	}
	
	return (
		<div className="contentTypeContainer">
			{state.contentTypes && state.contentTypes.map((item, i ) => {
				return (
					<Checkbox {...item} label={item.name} key={i} selected={item.selected} onClick={() => onToggleGenre(item.id)}/>
				)
			})

			}
		</div>
	)
    
}

export default ContentType