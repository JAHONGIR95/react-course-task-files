import { useState, useEffect } from "react";
import axios from 'axios';

import MovieCard from '../components/MovieCard';

import './pages.scss';

const Movies = () => {
  const [movieList, setMovieList] = useState({
      isFetched: false,
      data: [],
      error: null,
  })

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
            api_key: 'd2a8ca5d342a4ac27541b9319d594c83'
        }
      })
      .then(function (response) {
        setMovieList({
            isFetched: true,
            data: response.data,
            error: false,
        })
      })
      .catch(function (error) {
        setMovieList({
            isFetched: true,
            data: [],
            error: error,
        })
      })
      .then(function () {
        // always executed
      })
  }, []);

  console.log(movieList.data)

  return (
    <div className="container">
        {
            movieList.isFetched ? (
                <div className="movie-list"> 
                    {
                        movieList.data.results.map((movie, index) => (
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
                <h1>Loading...</h1>
            )
        }
    </div>
  );
};

export default Movies;
