import { useState, useEffect } from "react";
import axios from "axios";

import "./pages.scss";

const ActorMovie = ({ match }) => {
  const [actorMovie, setActorMovie] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/person/${match.params.id}/movie_credits`, {
        params: {
          api_key: "d2a8ca5d342a4ac27541b9319d594c83",
        },
      })
      .then(function (response) {
        //   console.log(response);
        setActorMovie({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setActorMovie({
          isFetched: true,
          data: [],
          error: error,
        });
      })
      .then(function () {
        // always executed
      });
  }, []);

//   console.log(actorMovie.data.cast[0].title);

  return (
      <h1>Title: {actorMovie.data.cast.title}</h1>
  )
};

export default ActorMovie;
