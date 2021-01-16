import React from 'react'
import { navigate } from 'hookrouter'
import './style.scss'

const ContentCard = ({size, media_type, id, title, name ,poster_path}) => {
	return(
		<div onClick={() => navigate(`/${media_type}/${id}`)}className={`contentCardContainer ${size}`}>
			<h3>{title || name}</h3>
		<div style={{backgroundImage: `url( https://image.tmdb.org/t/p/w500${poster_path})`}}>
		</div>
		</div>
	)
}	

export default ContentCard