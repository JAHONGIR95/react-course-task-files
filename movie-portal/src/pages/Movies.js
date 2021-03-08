import { useState, useEffect } from "react";

const Movies = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('/user', {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
  }, [count]);
  return (
    <>
      <h1>Movies</h1>
      <h1>son: </h1>
      <h1>all</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default Movies;
