import React, { useState , useEffect } from "react";
import { Provider } from "./Contexts/global";
import initialState from './initialState'
import Routes from './routes'
import { ProviderSelection, Modal, Notification,GenreSelection, MobileFilters } from 'Components'
import { getMovies, getShows } from 'Helpers/tmdb'
import providersInit from 'Data/providers'
import genresInit from 'Data/genres'
import contentTypesInit from 'Data/contentType'
import { getRails } from './resultsSplitter'
import { navigate } from 'hookrouter'
// import $ from 'jquery'
const ProviderComponent = props => {  
  const [providers, setFinalProviders] = useState(getProviders());
  const [genres, setFinalGenres] = useState(genresInit);
  const [contentTypes, setFinalContentTypes] = useState(contentTypesInit);
  const [nextPage, setNextPage] = useState(1);
  const [results, setFinalResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMore, setViewMore] = useState([])
  const [modal, setModal ] = useState(false)
  const [ notification, setNotification] = useState({count: 0, text: ''})
  const [ showMenu, setShowMenu ] = useState(false)
  let scrollTop = window.scrollY


  function getProviders(){
    if (window.localStorage){
      let streamingProviders = localStorage.getItem('streamingProviders');
      if (streamingProviders){
        streamingProviders =  Object.assign([], JSON.parse(streamingProviders))
        for(var i = 0; i < providersInit.length; i++){
          let provider = streamingProviders.find((p) => p.id === providersInit.id)
          if (!provider){
            streamingProviders.push(providersInit[i])
          }
        }
        return streamingProviders
      }
      return providersInit
    }
  }

  useEffect(() => {

      const filteredProviders = providers.filter((g) => g.selected)

      if (filteredProviders.length === 0){
        console.log('filtered', filteredProviders)
        setModal({
          title:"Let's find something to watch",
          description: "Let us know what services you're subscribed to so we can find something to watch. If you're happy to pay for something then you can just skip this.",
          type: 'providers'
        })
      }
      const rails = getRails({
        genres: genres.filter((g) => g.selected), 
        contentTypes: contentTypes.filter((g) => g.selected), 
        providers: filteredProviders
      }).then((rails) => {

        setFinalResults(rails)
      }) 
  },[])



  useEffect(() => {
     window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    }

  },[showMenu])

  function onWindowScroll(e){ 
    // let newY = window.scrollY
    // if(newY > scrollTop && scrollTop > 0 && showMenu === false){
    //   setShowMenu(true)
    // } else if (newY < scrollTop && showMenu){
    //   setShowMenu(false)
    // }
    
  
    // scrollTop = window.scrollY
  
    // const height =document.getElementById('results').offsetHeight
    // if (window.scrollTop + window.innerHeight > height - 800){
    //   if (!isLoading){
    //     setIsLoading(true)
    //     const str = constructString()
    //     callCorrectQuery(str).then((data) => {

    //         let finalResult = resultsSplitter(results.concat(data)).then((finalResult) => {
    //           setFinalResults(finalResult)
    //         })
            
    //         // setNextPage(nextPage+5)
    //         setIsLoading(false)
    //     })
    //   }
    // }
    
  }

  

  function setGenres(newData){
    setFinalGenres(newData)
    window.scrollTo(0, 0)
    const rails = getRails({
      genres: genres.filter((g) => g.selected), 
      contentTypes: contentTypes.filter((g) => g.selected), 
      providers: providers.filter((g) => g.selected), 
    }).then((rails) => {
      setFinalResults(rails)
    })

    
  }

  function setProviders(newData){
    setFinalProviders(newData)
    window.scrollTo(0, 0)
    const rails = getRails({
      genres: genres.filter((g) => g.selected), 
      contentTypes: contentTypes.filter((g) => g.selected), 
      providers: providers.filter((g) => g.selected), 
    }).then((rails) => {
      setFinalResults(rails)
    })

    
  }

  function setContentTypes(newData){  
      setFinalContentTypes(newData)
      window.scrollTo(0, 0)
      const rails = getRails({
        genres: genres.filter((g) => g.selected), 
        contentTypes: contentTypes.filter((g) => g.selected), 
        providers: providers.filter((g) => g.selected), 
      }).then((rails) => {
        setFinalResults(rails)
      }) 
  }

  
  return (
     <Provider
        value={{
          providers,
          setProviders,
          genres, 
          setGenres,
          contentTypes, 
          setContentTypes,
          nextPage,
          results,
          viewMore,
          setViewMore,
          modal,
          setModal,
          notification,
          setNotification,
          showMenu,
          setShowMenu
        }}
      >
       <Routes />
       {modal &&
         <Modal 
          title={modal.title}
          description={modal.description}>
          {modal.type === 'providers' && 
            <ProviderSelection />
          }
          {modal.type === 'genres' && 
            <GenreSelection />
          }
          {modal.type === 'mixed' && 
           <MobileFilters /> 

          }
         </Modal>
        }
      {notification && 
        <Notification {...notification} />
      }
    </Provider>
  );
};

export default ProviderComponent;