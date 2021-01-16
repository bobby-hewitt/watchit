import React, { useContext, useState, useEffect } from 'react'
import Context from 'Contexts/global'
import { HeroCard, WatchProviders, ContentCard, SectionTitle, BackButton} from 'Components'
import { getShow, getMovie } from 'Helpers/tmdb'
import { navigate  } from 'hookrouter'
import MetaTags from 'react-meta-tags';
import './style.scss'
const Info = ({id, type}) => {
	const [info, setInfo] = useState(null)
	const globalState = useContext(Context)

	useEffect(() => {
		if (type === 'tv'){
			getShow(id).then((data) => {
				console.log(data)
				setInfo(data)
			})
		} else {
			getMovie(id).then((data) => {
				console.log(data)
				setInfo(data)
			})
		}
		return () => {}
	},[])

	function getGenres(genres){
		let gs = ''
		for (var i = 0 ; i < genres.length; i++){
			gs += genres[i].name + ', '
		}
		gs = gs.slice(0,-2)
		return gs
	}

	function createMetaData(info){
		let meta = ''
		// meta += getGenres(info.genres)
		// meta += '\n'
		if (info.number_of_seasons){
			meta += info.number_of_seasons + ' seasons | '
			meta += info.first_air_date.slice(0,4)
			meta += ' - '
			meta += info.in_production ? (new Date()).getFullYear() : info.last_air_date.slice(0,4)
			
		} else{
			meta += `${info.runtime}m`
			meta += ' | '
			meta += info.release_date.slice(0,4)
		}
		return meta
	}

	

let watchproviders = info ?info['watch/providers'] : []
console.log('watchproviders', watchproviders)
const cast = info && info.credits && info.credits.cast ? info.credits.cast : []
	if (info){
	return (
		<div className={`infoOuterContainer ${info && 'isVisible'}`} >
			
		
			<div className={`infoHeroOuterContainer`}>
				<div className={`infoHeroContainer`}>
					<div className="image" style={{backgroundImage: `url( http://image.tmdb.org/t/p/original/${info.backdrop_path})`}}>
						<div className="vGrad"/>
						
						<div className="mixedGrad"/>
					</div>
				</div>
				
			</div>
		
		

		<div className="moreInfoContainer">
		<div className="infoMeta">
			<WatchProviders providers={watchproviders} />
			<h2>{info.name || info.title}</h2>
			
			<p className="genresList">{getGenres(info.genres)}</p>
			<p className="metadata">{createMetaData(info)}</p>

			<p className="overview">{info.overview}</p>
		</div>
		{info && info.similar && info.similar && info.similar.results && info.similar.results.length > 0 &&
			<React.Fragment>
			<div className="spacer"/>
			<SectionTitle title="Related Titles"/>
			<div className="similarContainer">
				{info && info.similar && info.similar && info.similar.results && info.similar.results.slice(0,12).map((info, i ) => {
					return <ContentCard {...info} key={i} />
				})}
			</div>
			</React.Fragment>
		}
			<div className="spacer"/>
				<SectionTitle title="Cast and crew"/>
				<div className="castRail">
				{cast.map((item ,i ) => {
					if (item.profile_path){
					return(
						<div className="personOuter">
						<div className="person" onClick={() => navigate(`/person/`)} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w185/${item.profile_path})`}}>

						</div>
						</div>
					)} else return <div key={i} />
				})
				}	
				</div>
			</div>
			<BackButton />
		</div>
	)
	} else return <div /> 
    
}

export default Info