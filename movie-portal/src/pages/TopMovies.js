import axios from "axios";
import { useState, useEffect } from "react";

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
console.log(topMovies.data.results);


  return (
    <div className="top-movies">
        {
            topMovies.
        }
      <h1>Top Movies</h1>
    </div>
  );
};

export default TopMovies;
