import { useState, useEffect } from "react";
import axios from 'axios';

const SingleMovie = ({match}) => {

    const [MovieInfo, setMovieInfo] = useState({
        isFetched: false,
        data: [],
        error: null,
    })
  
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
          params: {
              api_key: 'd2a8ca5d342a4ac27541b9319d594c83'
          }
        })
        .then(function (response) {
          setMovieInfo({
              isFetched: true,
              data: response.data,
              error: false,
          })
        })
        .catch(function (error) {
          setMovieInfo({
              isFetched: true,
              data: [],
              error: error,
          })
        })
        .then(function () {
          // always executed
        })
    }, []);

    return(
        <h1>SingleMovie {MovieInfo.data.title}</h1>
    )
}

export default SingleMovie;