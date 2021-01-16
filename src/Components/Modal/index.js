import React, { useContext } from 'react'
import './style.scss'
import Context from 'Contexts/global'
import { Button } from 'Components'

const Modal = (props) => {
	const state = useContext(Context)
	return(
		<div className="modalOuterContainer" onClick={() => state.setModal(false)}>
		<div className="modalContainer">
		
		<div className="modalFixedHeader">
				<p className="title">{props.title}</p>
				<Button label="Done" secondary onClick={() => state.setModal(false)} />
			</div>		
				
		<div className="modalInner">
		
		<div className="modalFalseHeader" />
		<p className="description">{props.description}</p>
		{props.children}
		</div>
			
			
		<div className="bottomGrad" />	
		</div>

		</div>
	)
}

export default Modal