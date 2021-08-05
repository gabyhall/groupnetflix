import React from 'react';
import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { PageContainer } from '../../styledComponents';
import './index.css';


const addtoList = () => {
    //put function to add film to user's movies database here //
};

 const Films = () => {
   const [films, setFilms] = useState([]);
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
     onLoad()
   },[])
   
   const onLoad = () => {
        // hide API key //
     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MOVIE_API_KEY}&l[…]e_video=false&page=1&with_watch_monetization_types=flatrate`)
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
              <h1>Logo/Home/Navbar</h1> 
              <h2>Recent Releases</h2>
           </div>
           <div className="container">
            {films.map((item) => {
            return (
                <div className="filmsList">
                    <h3 className="info">{item.title}</h3>
                    <h4 className="info">Release: {item.release_date}</h4>
                    <h4 className="info"> Others rated this: {item.vote_average}</h4>
                    <img className="filmPics" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="film poster"></img>
                    <button className="btn" onClick={() => addtoList(item)}>Add to My List</button>
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
        <div>
            <Films/>
        </div>
    )
}