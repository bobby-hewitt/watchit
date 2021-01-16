import React from 'react'
import {useRoutes} from 'hookrouter';
import { Home, NotFound, Info, ViewMore } from 'Containers'
const routes = {
    '/': () => <Home/>,
    '/view-more': () => <ViewMore/>,
    '/movie/:id': ({id}) => <Info type="movie" id={id}/>,
    '/tv/:id': ({id}) => <Info type="tv" id={id}/>,
};
  
const MyApp = () => {
    const routeResult = useRoutes(routes);
    return (
    	<div>
    	
    {routeResult || <NotFound />};
    </div>
    )
}

export default MyApp