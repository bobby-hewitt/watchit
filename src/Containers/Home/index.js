import React, { useContext } from 'react'
import Context from 'Contexts/global'
import { Results, Menu } from 'Components'
const Home = (props) => {
	const globalState = useContext(Context)
	return (
		<div className="homeContainer">
			<Menu />
			<Results />
		</div>
	)
    
}

export default Home