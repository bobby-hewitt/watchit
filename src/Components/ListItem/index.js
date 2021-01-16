import React from 'react'
import './style.scss'

const ListItem = ({image, label, selected, onClick}) => {
	return(
		<div className={`listItemContainer ${selected && 'selected'}` }onClick={onClick}>	
		<div className="listItemInner">
			{image && 
				<img className="icon" src={`${image}`} />
			}
			<p className="label">{label}</p>
			<div className="check">
				{selected && 
					<img src={require('Assets/check.svg')}/>
				}
			</div>
		</div>
		</div>
	)
}

export default ListItem