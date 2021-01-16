import React from 'react'
import './style.scss'

const IconButton = (props) => {
	return(
		<div className={`iconButtonContainer ${props.noBorder && 'noBorder'} `} onClick={props.onClick}>
		<img src={require(`Assets/${props.icon}.svg`)} />
		</div>
	)
}

export default IconButton