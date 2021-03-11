import axios from 'axios';
import { useState, useEffect } from 'react';

import './pages.scss';

const LatestMovie = () => {

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

    return (
        <h1>LatestMovie</h1>
    )
}

export default LatestMovie;