import React from 'react'
import './style.scss'

const SectionTitle = ({title, negativeBottomMargin, isResultsSectionTitle}) => {
	return(
		<h1 className={`sectionTitle ${negativeBottomMargin && 'negativeBottomMargin'}${isResultsSectionTitle && 'isResultsSectionTitle'}`}>{title}</h1>
	)
}

export default SectionTitle