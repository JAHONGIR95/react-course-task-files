import axios from 'axios';
import { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';

import './pages.scss';

const LatestMovie = () => {

    const [latestMovie, setLatestMovie] = useState({
        isFetched: false,
        data: [],
        error: null,
      });
    
      useEffect(() => {
        axios
          .get("https://api.themoviedb.org/3/movie/latest", {
            params: {
              api_key: "d2a8ca5d342a4ac27541b9319d594c83",
            },
          })
          .then(function (response) {
            console.log(response);
            setLatestMovie({
              isFetched: true,
              data: response.data,
              error: false,
            });
          })
          .catch(function (error) {
            setLatestMovie({
              isFetched: true,
              data: [],
              error: error,
            });
          })
          .then(function () {
            // always executed
          });
      }, []);

      const movie = latestMovie.data;

    return (
        <div className="latest-movie">
            <div className="container">
              <p className="section-title">Latest Movie</p>
                {
                    // movie.length > 0 ? (
                        latestMovie.isFetched ? (
                            <div className="movie-list">
                                {
                                  
                                        <MovieCard
                                          id={movie.id}
                                          title={movie.title}
                                          imgLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                          rating={movie.vote_average}
                                          releaseDate={movie.release_date}
                                          // key={index}
                                        />
                                  
                                }
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )
                    // ) : (
                        // <h1>Sorry Movie is not found</h1>
                    // )
                }
            </div>
        </div>
    )
}

export default LatestMovie;