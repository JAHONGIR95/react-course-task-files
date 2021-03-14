import axios from 'axios';
import { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';

import './pages.scss';

const UpcomingMovies = () => {

    const [upcomingMovies, setUpcomingMovies] = useState({
        isFetched: false,
        data: [],
        error: null,
      });
    
      useEffect(() => {
        axios
          .get("https://api.themoviedb.org/3/movie/upcoming", {
            params: {
              api_key: "d2a8ca5d342a4ac27541b9319d594c83",
            },
          })
          .then(function (response) {
            // console.log(response);
            setUpcomingMovies({
              isFetched: true,
              data: response.data,
              error: false,
            });
          })
          .catch(function (error) {
            setUpcomingMovies({
              isFetched: true,
              data: [],
              error: error,
            });
          })
          .then(function () {
            // always executed
          });
      }, []);

    //   console.log(upcomingMovies.data);
    return (

        <div className="upcomingMovies">
            <div className="container">
                {
                    upcomingMovies.isFetched ? (
                        <div className="movie-list">
                        {
                            upcomingMovies.data.results.map((movie, index) => (
                                <MovieCard
                                  id={movie.id}
                                  title={movie.title}
                                  imgLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                  rating={movie.vote_average}
                                  releaseDate={movie.release_date}
                                  key={index}
                                />
                            ))
                        }
                    </div>
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div>
        </div>
    )
}

export default UpcomingMovies;