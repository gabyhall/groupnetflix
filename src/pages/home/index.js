import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../styledComponents';


 const Films = () => {
   const [films, setFilms] = useState([]);
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
     onLoad()
   },[])
   
   const onLoad = () => {
        // hide API key
     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&l[…]e_video=false&page=1&with_watch_monetization_types=flatrate`)
       .then(response => response.json())
       .then(data => {
         setFilms(data.results)
         setLoading(false)
       }
       )
   }
   
   if (loading) {
     return (<h1>Loading...</h1>)
    } else {
        console.log(films)
        return (
           <div>
           <div>
              <h1>Logo/Home</h1> 
           </div>
           <div>
            {films.map((item) => {
            return (
                <div>
                    <h2>{item.title}</h2>
                    <h3>Release Date: {item.release_date}</h3>
                    <h3>Others rated this: {item.vote_average}</h3>
                    {/* could include overview too - quite long though */}
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="film poster"></img>
                </div>
            )
        })} 
        </div>
        </div>
        )
    }
}

export const Home = () => {
   
    
    return (
        <PageContainer>
            <Films/>
        </PageContainer>
    )
}