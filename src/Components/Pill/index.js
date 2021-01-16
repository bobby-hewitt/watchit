import React from 'react'
import './style.scss'

const Pill = ({onClick, label, selected}) => {
	return(
		<div className={`pillContainer ${selected && 'selected'}`} onClick={onClick}>
			<p>{label}</p>
			<div className="indicator">
				<div />
			</div>
		</div>
	)
}

export default Pill