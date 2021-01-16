import React, { useContext } from 'react'
import './style.scss'
import { Checkbox } from 'Components'

const Tabs = ({data, onClick, content}) => {
	

	
	return(
		<div className="tabsContainer">
			{content && content.map((item, i) => {
				return(
					<Tab key={i} {...item} onClick={onClick} />
				)
			})}
		</div>
	)
}


const Tab = ({label, selected, name, id, onClick})=> {
	return(
		<div className={`tabContainer ${selected  && 'selected'}`} onClick={(e) => {
			e.stopPropagation()
			onClick(id)
		}}>
			<p>{name}</p>
			<div>
				
			</div>

		</div>
	)
}

export default Tabs