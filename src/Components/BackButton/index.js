import React from 'react'
import './style.scss'
import { SectionTitle } from 'Components'
const BackButton = (props) => {
	return(
		<div className={`backButtonContainer ${props.noBorder && 'noBorder'} `} onClick={() => window.history.back()}>
		<img src={require(`Assets/chevronleft.svg`)} />
		{props.title &&
			<SectionTitle title={props.title} />
		}
		</div>
	)
}

export default BackButton