import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from '../components/MovieCard';

import "./pages.scss";

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "d2a8ca5d342a4ac27541b9319d594c83",
        },
      })
      .then(function (response) {
        //   console.log(response)
        setTopMovies({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setTopMovies({
          isFetched: true,
          data: [],
          error: error,
        });
      })
      .then(function () {
        // always executed
      });
  }, []);
// console.log(topMovies.data.results);


  return (
    <div className="top-movies">
        <div className="container">
          <p className="section-title">Top Movies</p>
        {
            topMovies.isFetched ? (
                <div className="movie-list">
                    {
                        topMovies.data.results.map((movie, index) => (
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
  );
};

export default TopMovies;
