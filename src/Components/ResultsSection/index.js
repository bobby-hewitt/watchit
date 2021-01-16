import React, { useContext } from 'react'
import './style.scss'
import Context from 'Contexts/global'
import { Button, SectionTitle } from 'Components'
import { navigate }from 'hookrouter'

const ResultsSection = (props) => {
	const state = useContext(Context)

	function onClick(){
		const contentType =state.contentTypes.find((c) => c.selected).id
		// console.log(contentType)
		// console.log(props.query)
		const url = `/watchit/view-more`
		navigate(url, false, { type: contentType, query: props.query, title: props.title})
	}
	return(
		<div className="section">
			<div className="sectionHeader">
			<SectionTitle title={props.title}/>
			</div>

			{props.children}
			
				<div className="CTAContainer">
				{props.viewMore && 
					<Button secondary opaque label={" . . . " }  tertiary onClick={onClick}/>
				}
				</div>
			
		</div>
	)
}

export default ResultsSection