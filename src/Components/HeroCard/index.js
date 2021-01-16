import React from 'react'
import './style.scss'
import { WatchProviders, ContentCard } from 'Components'
import { navigate } from 'hookrouter'

const HeroCard = ({size, name, title, overview, runtime, genres, pageHeader, backdrop_path, providers, id, media_type, index, isInfo, isNavigable, forceHero, hideSmall}) => {

	function getGenres(){
		let gs = ''
		for (var i = 0 ; i < genres.length; i++){
			gs += genres[i].name + ', '
		}
		gs = gs.slice(0,-2)
		return gs
	}

	

	if (hideSmall && window.innerWidth <= 991 && !forceHero){
		return <div />
	} else if (window.innerWidth <= 991 && !forceHero){
		return <ContentCard {...{size, name, title, overview, runtime, genres, backdrop_path, providers, id, media_type, isInfo, isNavigable}} />
	} else {
	return(
		<div className={`heroCardOuterContainer ${size} ${isInfo && 'isInfo'} ${pageHeader && 'pageHeader'} ${index === 0 && window.innerWidth > 991 && 'hero'}`} onClick={() => {
			if (isNavigable){
				navigate(`/${media_type}/${id}`)
			}
		}}>
		<div className={`heroCardContainer`}>

			<div className="image" style={{backgroundImage: `url( http://image.tmdb.org/t/p/original/${backdrop_path})`}}>
				<div className="vGrad"/>
				<div className="hGrad"/>
				<div className="mixedGrad"/>

				
			</div>
			</div>
			<div className="meta">
				
				<h2>{name || title}</h2>
				{!size &&  window.innerWidth > 991 &&
					<React.Fragment>
						{isInfo&&
						<p className="metadata">{getGenres()}. {media_type === 'movie' ? `Runtime ${runtime}m` : '' }</p>
						}
						<p className="overview">{overview}</p>
					</React.Fragment>
				}
			</div>
		
		</div>
	)
}
}	

export default HeroCard