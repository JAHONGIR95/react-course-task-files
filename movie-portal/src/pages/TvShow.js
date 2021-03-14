import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from '../components/MovieCard';

import "./pages.scss";

const TvShow = () =>{

    const [tvShows, setTvShows] = useState({
        isFetched: false,
        data: [],
        error: null,
      });
    
      useEffect(() => {
        axios
          .get("https://api.themoviedb.org/3/tv/popular", {
            params: {
              api_key: "d2a8ca5d342a4ac27541b9319d594c83",
            },
          })
          .then(function (response) {
            //   console.log(response)
            setTvShows({
              isFetched: true,
              data: response.data,
              error: false,
            });
          })
          .catch(function (error) {
            setTvShows({
              isFetched: true,
              data: [],
              error: error,
            });
          })
          .then(function () {
            // always executed
          });
      }, []);

    //   console.log(tvShows.data.results.length);

    return(
        <div className="tv-shows">
            <div className="container">
                {
                    tvShows.isFetched ? (
                        <div className="movie-list">
                    {
                        tvShows.data.results.map((movie, index) => (
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

export default TvShow;