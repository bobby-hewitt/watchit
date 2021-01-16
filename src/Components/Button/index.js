import React from 'react'
import './style.scss'

const Button = ({label, secondary, tertiary, onClick, opaque}) => {
	return(
		<div className={`buttonContainer ${secondary && 'secondary'} ${tertiary && 'tertiary'} ${opaque && 'opaque'}`} onClick={onClick}>
			<p>{label}</p>
		</div>
	)
}

export default Button