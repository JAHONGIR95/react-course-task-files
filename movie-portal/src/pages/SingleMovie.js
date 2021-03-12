import { useState, useEffect } from "react";
import axios from "axios";

import GenresCard from "../components/GenresCard/GenresCard";
import Actors from "../components/Actors/Actors";
import MovieCard from "../components/MovieCard";

import './pages.scss';

const SingleMovie = ({ match }) => {
  const [MovieInfo, setMovieInfo] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
        params: {
          api_key: "d2a8ca5d342a4ac27541b9319d594c83",
        },
      })
      .then(function (response) {
        setMovieInfo({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setMovieInfo({
          isFetched: true,
          data: [],
          error: error,
        });
      })
      .then(function () {
        // always executed
      });
  }, []);

  // actor info creation section is going to start

  const [MovieActors, setMovieActors] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
        params: {
          api_key: "d2a8ca5d342a4ac27541b9319d594c83",
        },
      })
      .then(function (response) {
        // console.log(response)
        setMovieActors({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setMovieActors({
          isFetched: true,
          data: [],
          error: error,
        });
      })
      .then(function () {
        // always executed
      });
  }, []);

  // console.log((MovieActors.data.cast).slice(0, 10));
  const mData = MovieInfo.data;

  // recommended movies list

  const [recommendedMovies, setrecommendedMovies] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${match.params.id}/recommendations`,
        {
          params: {
            api_key: "d2a8ca5d342a4ac27541b9319d594c83",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setrecommendedMovies({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setrecommendedMovies({
          isFetched: true,
          data: [],
          error: error,
        });
      })
      .then(function () {
        // always executed
      });
  }, []);

  console.log(recommendedMovies);

  return (
    <div className="single-movie-section">
      <div className="container">
        <div className="single-movie-top">
          <div className="single-movie-top-left">
            <img
              src={`https://image.tmdb.org/t/p/w500${mData.backdrop_path}`}
              alt="movie-image"
            />
          </div>
          <div className="single-movie-top-right">
            <h1 className="movie-title">{mData.title}</h1>
            <h3 className="movie-date">{`Date  ${mData.release_date}`}</h3>
            <h3 className="movie-duration">{`Duration  ${Math.floor(
              mData.runtime / 60
            )} hour ${mData.runtime % 60} minute`}</h3>
            <div className="genre-holder">
              {MovieInfo.isFetched ? (
                mData.genres.map((ganr, index) => (
                  <GenresCard Janri={ganr.name} key={index} />
                ))
              ) : (
                <p>loading...</p>
              )}
            </div>
          </div>
        </div>

        <p className="movie-overview">{mData.overview}</p>

        <p className="actor-title">Actors and Actresses</p>
        <div className="movie-actor-holder">
          {MovieActors.isFetched ? (
            <div className="movie-list">
              {MovieActors.data.cast.slice(0, 12).map((actor, index) => (
                <Actors
                  id={actor.id}
                  imgLink={actor.profile_path}
                  name={actor.original_name}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="recommended-movies-holder">
          <div className="container">
            {recommendedMovies.isFetched ? (
              <div className="movie-list">
                {recommendedMovies.data.results.slice(0, 12).map((movie, index) => (
                    <MovieCard
                      id={movie.id}
                      title={movie.title}
                      imgLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      rating={movie.vote_average}
                      releaseDate={movie.release_date}
                      key={index}
                    />
                  ))}
              </div>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
