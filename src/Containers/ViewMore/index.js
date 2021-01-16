import React, {useContext, useEffect }from 'react'
import './style.scss'
import Context from 'Contexts/global'
import { Results, HeroCard, ContentCard,SectionTitle, BackButton } from 'Components'
import { useQueryParams }from 'hookrouter'
import { getViewMore } from 'resultsSplitter'
const ViewMore = (props) => {
	const state = useContext(Context)
	const [params] = useQueryParams()
	useEffect(() => {
		window.scrollTo(0,0)

		getViewMore(params.query, params.type).then((data)=> {
			console.log('here')
			state.setViewMore({
				title: params.title,
				content:data,			
			})
		})
		
		return () => {return}
	},[])
	return(
		<div id="results" className="viewMoreContainerOuter">
			
			<div className="viewMoreContainer">
				{state.viewMore && state.viewMore.content && state.viewMore.content.map((item, i) => {
					if (i  % 12 === 0){
						return <HeroCard  key={i} providers={item['watch/providers']} {...item}  isNavigable />
					} else if (i % 12 < 5){
						return <ContentCard size="large" key={i} {...item}  />	
					}  else if (i % 12 < 8){
						return <HeroCard size="extraSmall" key={i} providers={item['watch/providers']} {...item}  isNavigable />
					} else {
						return <ContentCard size="large" key={i} {...item}  />	
					}
			})}
			</div>
			
			<div className="viewMoreTitleContainer">
			<BackButton title={params.title }/>
			
			</div>
		</div>
	)
}

export default ViewMore