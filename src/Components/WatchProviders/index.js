import React, { useContext, useState, useEffect } from 'react'
import './style.scss'
const Info = ({info, providers}) => {
	


	const flatRate = providers && providers.results && providers.results.GB && providers.results.GB.flatrate && providers.results.GB.flatrate.length ? providers.results.GB.flatrate : []
	let free = providers && providers.results && providers.results.GB && providers.results.GB.free && providers.results.GB.free.length ? providers.results.GB.free  : []
	let watchproviders = free.concat(flatRate)

	console.log(watchproviders)
	return (
		
					<div className="watchProviders">
				{ watchproviders.map((item, i) => {
					return(
					
							<img src={`https://image.tmdb.org/t/p/w92/${item.logo_path}`} />
						
					)
				})}
				</div>
				
	)
    
}

export default Info