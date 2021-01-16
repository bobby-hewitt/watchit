import React from 'react'
import {useRoutes} from 'hookrouter';
import { Home, NotFound, Info, ViewMore, Onboarding } from 'Containers'
const routes = {
    '/': () => <Home/>,
    '/watchit/': () => <Home/>,
    '/watchit/onboarding': () => <Onboarding/>,
    '/watchit/view-more': () => <ViewMore/>,
    '/watchit/movie/:id': ({id}) => <Info type="movie" id={id}/>,
    '/watchit/person/:id': ({id}) => <Info type="person" id={id}/>,
    '/watchit/tv/:id': ({id}) => <Info type="tv" id={id}/>,
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