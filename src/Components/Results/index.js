import React, { useContext, useState } from 'react'
import Context from 'Contexts/global'
import './style.scss'
import { ResultsSection, SectionTitle} from 'Components'

import { ContentCard, HeroCard } from 'Components'

const Home = (props) => {
	const state = useContext(Context)
	const row = 13;

	return (
		
		<div id="results" className="resultsContainerOuter">
			{Array.isArray(state.results) &&
				<div className="resultsContainer">
				{Array.isArray(state.results) && state.results.map((section, i) => {
					
					if (section.content && section.content.length){
						switch(section.content && section.content.length){
							case 13: return <Section13 key={i} {...section} index={i}/>
							case 12: return <Section12 key={i} {...section} index={i}/>
							case 11: return <Section10or11 key={i} {...section} index={i}/>
							case 10: return <Section10or11 key={i} {...section} index={i}/>
							case 9: return <Section9 key={i} {...section} index={i}/>
							case 8: return <Section8 key={i} {...section} index={i}/>
							case 7: return <Section7 key={i} {...section} index={i}/>
							case 6: return <Section6 key={i} {...section} index={i}/>
							case 5: return <Section5 key={i} {...section} index={i}/>
							case 4: return <Section4 key={i} {...section} index={i}/>
							case 3: return <Section3 key={i} {...section} index={i}/>
							case 2: return <Section2 key={i} {...section} index={i}/>
							case 1: return <Section1 key={i} {...section} index={i}/>
							default: return <Section14 key={i} {...section} index={i}/>
						}
					} else return <div key={i}/>
				})}	
				
				</div>
			}
			<div className="loading">

			</div>
		</div>
	)
    
}


const Section14 = ({content, title, query, index}) => {

	
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14} negativeBottomTitleMargin>
		
		<div className="section">
			{content && content.slice(0,14).map((item, i) => {
				if (i  === 0){
					return <HeroCard index={i} pageHeader={index=== 0} forceHero key={i} providers={item['watch/providers']} {...item}  isNavigable />
				} else if ( i < 5){
					return <ContentCard size="large"key={i} {...item}  />
				} else if (i < 11){
					return <ContentCard key={i} {...item}  />
				} else {
					return <HeroCard size="extraSmall" hideSmall={i ===13} key={i} providers={item['watch/providers']} {...item}  isNavigable />
				}
			})}
		</div>
	</ResultsSection>
	)
}

const Section13 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14} negativeBottomTitleMargin>
		
		<div className="section">
			{content && content.slice(0,13).map((item, i) => {
				if (i  === 0){
					return <HeroCard index={i}  index={i}  pageHeader={index=== 0} index={i} key={i} providers={item['watch/providers']} {...item}  isNavigable />
				} 
					return <ContentCard key={i} {...item}  />
				
			})}
		</div>
	</ResultsSection>
	)
}

const Section12 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				if (i  <2){
					return <HeroCard size="small" index={i} providers={item['watch/providers']} {...item}  isNavigable />
				} else if (i < 6){
					return <ContentCard size="large" key={i} {...item}  />	
				} else {
					return <ContentCard key={i} {...item}  />
				}
				
			})}
		</div>
	</ResultsSection>
	)
}

const Section10or11 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				if (i < 2){
					return <HeroCard size={'small'} key={i} providers={item['watch/providers']} {...item}  isNavigable />
				} else if (i < 8){
					return <ContentCard key={i} {...item}  />	
				} else {
					return <HeroCard  size={content.length === 10 ? 'small' : 'extraSmall'} key={i} providers={item['watch/providers']} {...item}  isNavigable />
				}
				
			})}
		</div>
	</ResultsSection>
	)
}
const Section9 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				if (i < 3){
					return <HeroCard  size={'extraSmall'} key={i} providers={item['watch/providers']} {...item}  isNavigable />
				} else {
					return <ContentCard key={i} {...item}  />	
				}
				
			})}
		</div>
	</ResultsSection>
	)
}

const Section8 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				if (i < 2){
					return <HeroCard  size={'small'} key={i} providers={item['watch/providers']} {...item}  isNavigable />
				} else {
					return <ContentCard key={i} {...item}  />	
				}
				
			})}
		</div>
	</ResultsSection>
	)
}

const Section7 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				if (i < 3){
					return <HeroCard size="extraSmall" key={i} providers={item['watch/providers']} {...item}  isNavigable />
				} else {
					return <ContentCard size="large" key={i} {...item}  />	
				}
				
			})}
		</div>
	</ResultsSection>
	)
}

const Section6 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				if (i < 2){
					return <HeroCard size="small" key={i} providers={item['watch/providers']} {...item}  isNavigable />
				} else {
					return <ContentCard size="large" key={i} {...item}  />	
				}
				
			})}
		</div>
	</ResultsSection>
	)
}

const Section5 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14} negativeBottomTitleMargin>
		
		<div className="section">
			{content && content.map((item, i) => {
				if (i < 1){
					return <HeroCard index={i} index={i}  pageHeader={index=== 0} key={i} providers={item['watch/providers']} {...item}  isNavigable />
				} else {
					return <ContentCard size="large" key={i} {...item}  />	
				}
				
			})}
		</div>
	</ResultsSection>
	)
}

const Section4 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				return <HeroCard size="small" key={i} providers={item['watch/providers']} {...item}  isNavigable />
			})}
		</div>
	</ResultsSection>
	)
}


const Section3 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				return <HeroCard size="extraSmall" key={i} providers={item['watch/providers']} {...item}  isNavigable />
			})}
		</div>
	</ResultsSection>
	)
}

const Section2 = ({content, title, query, index}) => {
	return(
	<ResultsSection query={query} title={title} viewMore={content.length > 14}>
		
		<div className="section">
			{content && content.map((item, i) => {
				return <HeroCard size="small" key={i} providers={item['watch/providers']} {...item}  isNavigable />
			})}
		</div>
	</ResultsSection>
	)
}

const Section1 = ({content, title, query, index}) => {
	return (

	<ResultsSection query={query} title={title} viewMore={content.length > 14} negativeBottomTitleMargin>
		
		<div className="section">
			{content && content.map((item, i) => {
				return <HeroCard index={i}  pageHeader={index=== 0} key={i} providers={item['watch/providers']} {...item}  isNavigable />
			})}
		</div>
	</ResultsSection>
	)
}

export default Home


		