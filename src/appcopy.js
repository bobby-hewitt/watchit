import React, { useState , useEffect } from "react";
import { Provider } from "./Contexts/global";
import initialState from './initialState'
import Routes from './routes'
import { getMovies, getShows } from 'Helpers/tmdb'
import providersInit from 'Data/providers'
import genresInit from 'Data/genres'
import contentTypesInit from 'Data/contentType'
import resultsSplitter from './resultsSplitter'
// import $ from 'jquery'
const ProviderComponent = props => {  
  const [providers, setFinalProviders] = useState(providersInit);
  const [genres, setFinalGenres] = useState(genresInit);
  const [contentTypes, setFinalContentTypes] = useState(contentTypesInit);
  const [nextPage, setNextPage] = useState(1);
  const [results, setFinalResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);




  useEffect(() => {
    // getCombinedResults('').then((res) => {
    //   let splitterData= {
    //       genres: genres.filter((g) => g.selected), 
    //       contentTypes: contentTypes.filter((g) => g.selected), 
    //       providers: providers.filter((g) => g.selected), 
    //       content: res,
          
    //     }
    //     resultsSplitter(splitterData).then((finalResult) => {
          
    //       setFinalResults(finalResult)
    //     })
      
    // })
    
  },[])

  // useEffect(() => {
  //    window.addEventListener("scroll", onWindowScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onWindowScroll);
  //   }

  // },[isLoading])

  function onWindowScroll(e){    
    const height =document.getElementById('results').offsetHeight
    if (window.scrollY + window.innerHeight > height - 800){
      if (!isLoading){
        setIsLoading(true)
        const str = constructString()
        callCorrectQuery(str).then((data) => {

            let finalResult = resultsSplitter(results.concat(data)).then((finalResult) => {
              setFinalResults(finalResult)
            })
            
            // setNextPage(nextPage+5)
            setIsLoading(false)
        })
      }
    }
    
  }

  

  function callCorrectQuery(){
    const str = constructString()
    let res;
    
    return new Promise((resolve, reject) => {
      if ((contentTypes[0].selected)){
      getCombinedResults(str).then((res) => resolve(res))
    } else if (contentTypes[1].selected){
      getShowsResults(str).then((res) => resolve(res))
    } else {
      getMoviesResults(str).then((res) => resolve(res))
    }
    })
  }

  function getCombinedResults(query){
    return new Promise((resolve, reject) => {
      getMovies(query, nextPage).then((movies) => {
        getShows(query, nextPage).then((shows)   => {
          movies= movies.concat(shows)
          let final = sortResults( movies)
          resolve( final)
        })
      })
    })
    
  }

  function getMoviesResults(str){
    return new Promise((resolve, reject) => {
      getMovies(str, nextPage).then((result) => {
      // setNextPage(nextPage+5)
      setIsLoading(false)
        let final = sortResults(result)
        resolve( final)
      })
    })
    
  }
  function getShowsResults(str){
    return new Promise((resolve, reject) => {
      getShows(str, nextPage).then((result) => {
      // setNextPage(nextPage+5)
      setIsLoading(false)
        let final = sortResults(result)
        resolve( final)
      })

    })
  }



  function sortResults(results){
    return results.sort((a,b) => b.popularity - a.popularity)
  }

  function clearResults(callback){
    setNextPage(1)
    setFinalResults([])
    
  }

  function setGenres(newData){
      clearResults()
      setFinalGenres(newData)
      callCorrectQuery().then((data) => {
        let splitterData= {
          genres: genres.filter((g) => g.selected), 
          contentTypes: contentTypes.filter((g) => g.selected), 
          providers: providers.filter((g) => g.selected), 
          content: data,
        }
        resultsSplitter(splitterData).then((finalResult) => {
          
          setFinalResults( finalResult)
        })
        
      }) 
  }

  function setProviders(newData){
    clearResults()
    setFinalProviders(newData)
    callCorrectQuery().then((data) => {
    
        let splitterData= {
          genres: genres.filter((g) => g.selected), 
          contentTypes: contentTypes.filter((g) => g.selected), 
          providers: providers.filter((g) => g.selected), 
          content: data,
        }
        resultsSplitter(splitterData).then((finalResult) => {
          setFinalResults( finalResult)
        })
        
    }) 
  }

  function setContentTypes(newData){  
      clearResults()
      setFinalContentTypes(newData)
      callCorrectQuery().then((data) => {
         let splitterData= {
          genres: genres.filter((g) => g.selected), 
          contentTypes: contentTypes.filter((g) => g.selected), 
          providers: providers.filter((g) => g.selected), 
          content: data,
        }
        resultsSplitter(splitterData).then((finalResult) => {
          setFinalResults( finalResult)
        })
          
        })
  }

  function constructString(){
    let providersStr = ''
    let genresStr = ''

    if (providers.filter((a) => a.selected).length > 0){
      let count = 0;
      providersStr += '&with_watch_providers='
      for (var i = providers.length - 1; i >= 0; i--) {
        if (providers[i].selected){
          count +=1
          providersStr += count = 0 ? providers[i].provider_id : (providers[i].provider_id+ '|')
        }
      }
    }

    if (genres.filter((a) => a.selected).length > 0){
      genresStr += '&with_genres='
      let count = 0;
      for (var i = genres.length - 1; i >= 0; i--) {
        if (genres[i].selected){
          count +=1
        genresStr += count = 0 ? genres[i].id : (genres[i].id + '|')
        }
      }
    }

    let str = providersStr + genresStr
    
    return str
   
    
    
   
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
          results
        }}
      >
       <Routes />
    </Provider>
  );
};

export default ProviderComponent;