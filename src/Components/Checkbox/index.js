import React, { useContext } from 'react'
import './style.scss'

const Checkbox = ({label, onClick, selected}) => {

	return (
		<div className={"checkboxContainer"} onClick={onClick}>
			<p>{label}</p>
			<div>
				{selected && 
					<img src={require('Assets/check.svg')}/>
				}
			</div>

		</div>
	)
    
}

export default Checkbox