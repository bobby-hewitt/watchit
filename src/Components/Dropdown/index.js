import React, { useContext, useEffect } from 'react'
import './style.scss'

const Checkbox = ({label, onClick, selected}) => {

	return (
		<div className={"dropdownContainer"} onClick={onClick}>
			<p>{label}</p>
			<div>
				{selected && 
					<img src={require('Assets/chevronup.svg')}/>
				}
				{!selected && 
					<img src={require('Assets/chevrondown.svg')}/>
				}
			</div>

		</div>
	)
    
}

export default Checkbox