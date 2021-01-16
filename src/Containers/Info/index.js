import React, { useContext, useState, useEffect } from 'react'
import Context from 'Contexts/global'
import { HeroCard, WatchProviders, ContentCard, SectionTitle, BackButton} from 'Components'
import { getShow, getMovie, getPerson } from 'Helpers/tmdb'
import { navigate  } from 'hookrouter'
import MetaTags from 'react-meta-tags';
import './style.scss'


const CastAndCrewRails = ({cast, crew}) => {
	// console.log(castInit, crewInit)
	
	const [ finalCrew, setCrew ] = useState([])
	const [ finalCast, setCast ] = useState([])

	useEffect(() => {
		let newCast = clean(cast)
		let newCrew = clean(crew)
		setCast(newCast)
		setCast(newCrew)
	},[])

	function clean(data){
		if (data){
			for (var i = data.length - 1; i >= 0; i--) {
				if (data[i] && data[i+1]){
				let title = data[i].title || data[i].name
				let nextTitle = data[i+1].title || data[i+1].name
					if (title === nextTitle){
						data.splice(i+1, 1)
					}
				}
			}
			data = data.sort((a,b) => b.popularity - a.popularity)
			console.log('returning data')
			return data
		}
	}
	
	return(
		<React.Fragment>
			{cast && cast.length > 0 &&
				<React.Fragment>
				<div className="spacer"/>
					<SectionTitle title="Cast"/>
					<div className="similarContainer">
						{cast.map((info, i ) => {
							return <ContentCard {...info} key={i} />
						})}
					</div>
				</React.Fragment>
			}
			{crew && crew.length > 0 &&
				<React.Fragment>
				<div className="spacer"/>
					<SectionTitle title="Crew"/>

					<div className="similarContainer">
						{crew.sort((a,b) => b.popularity - a.popularity).map((info, i ) => {
							return <ContentCard {...info} key={i} />
						})}
					</div>
				</React.Fragment>
			}
		</React.Fragment>
	)
	
}

const Info = ({id, type}) => {
	const [info, setInfo] = useState(null)
	const globalState = useContext(Context)
	const state = useContext(Context)
	useEffect(() => {
		if (type === 'tv'){
			getShow(id).then((data) => {
				window.scrollTo(0,0)
				setInfo(data)
			})
		} else if (type === 'movie'){
			getMovie(id).then((data) => {
				window.scrollTo(0,0)
				setInfo(data)
			})
		} else { 
			getPerson(id).then((data) => {
				window.scrollTo(0,0)
				data.media_type = 'person'
				console.log(data)
				setInfo(data)
			})
		}
		return () => {}
	},[type, id])

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
			
		} else if (info.release_date){
			meta += `${info.runtime}m`
			meta += ' | '
			meta += info.release_date.slice(0,4)
		} else {

		}
		return meta
	}

	

let watchproviders = info ?info['watch/providers'] : []
console.log('watchproviders', watchproviders)
const cast = info && info.credits && info.credits.cast ? info.credits.cast : []
// const image = 	info ? info.backdrop_path ? 
// 					info.backdrop_path : 
// 				info.combined_credits ?
// 					info.combined_credits.cast && info.combined_credits.cast && info.combined_credits.cast[0] ? 
// 						info.combined_credits.cast[0].backdrop_path : 
// 					info.combined_credits.crew ? 
// 						info.combined_credits.crew[0] ? 
// 							info.combined_credits.crew[0].backdrop_path : 
// 						'' : 
// 					'':
// 				'':
// 				''
	if (info){
	return (
		<div className={`infoOuterContainer ${info && 'isVisible'}`} >
			
		
			<div className={`infoHeroOuterContainer`}>
				<div className={`infoHeroContainer`}>
					<div className={`image`} style={{backgroundImage: `url( http://image.tmdb.org/t/p/w780/${info.backdrop_path || info.profile_path})`}}>
						<div className="vGrad"/>
						
						<div className="mixedGrad"/>
					</div>
				</div>
				
			</div>
		
		

		<div className={`moreInfoContainer`}>
		{/*	type === 'person' && 
			<img className="personImage" src={`http://image.tmdb.org/t/p/h632/${info.profile_path}`} />
		*/}	
		<div className={`infoMeta ${type}`}>

			{type !== 'person' &&
				<WatchProviders providers={watchproviders} />
			}
			<h2>{info.name || info.title}</h2>
			{info.media_type !== 'person' &&
				<React.Fragment>
					<p className="genresList">{getGenres(info.genres)}</p>
					<p className="metadata">{createMetaData(info)}</p>
				</React.Fragment>
			}

			<p className="overview" onClick={() => { state.setModal({
				description: info.overview || info.biography,
				title: info.title || info.name
			})}}>{info.overview || info.biography}</p>
		</div>
		{info && info.similar && info.similar.results && info.similar.results.length > 0 &&
			<React.Fragment>
			<div className="spacer"/>
			<SectionTitle title="Related Titles"/>
			<div className="similarContainer">
				{info && info.similar && info.similar && info.similar.results && info.similar.results.slice(0,12).map((info, i ) => {
					return <ContentCard {...info} media_type={type} key={i} />
				})}
			</div>
			</React.Fragment>
		}
		{type === 'person' && 
			<CastAndCrewRails {...info.combined_credits} />
 		}

		{type !== 'person' &&
			<React.Fragment>
				<div className="spacer"/>
					<SectionTitle title="Cast and crew"/>
					<div className="castRail">
						{cast.map((item ,i ) => {
							if (item.profile_path){
						
							return(
								<div className="personOuter" onClick={() => navigate(`/watchit/person/${item.id}`)}>
								<div className="person"  style={{backgroundImage: `url(https://image.tmdb.org/t/p/w185/${item.profile_path})`}}>

								</div>
								</div>
							)} else return <div className="inline" key={i} />
						})}	
					</div>
				</React.Fragment>
			}
			</div>
			<BackButton />
		</div>
	)
	} else return <div /> 
    
}



export default Info