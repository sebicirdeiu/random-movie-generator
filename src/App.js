import "./App.css";
import MovieCard from "./MovieCard";
import React from "react";
import { useEffect } from "react";
import { Form } from "./Form";

function App() {
  //get a random number from 1 to 25
  const randomPage = Math.floor(Math.random() * 25 + 1);

  const [movies, setMovies] = React.useState("");
  const [randomMovie, setRandomMovie] = React.useState("");
  const [url, setUrl] = React.useState(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${randomPage}&with_genres=27`
  );

  //data to acess the movie API
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGZhOGFhZjgwMTJhZGJlMmVmZDM3NWExY2U1YjEzMyIsInN1YiI6IjY1MDg1OGQ4M2NkMTJjMDBjYTU2ODI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nTaS8WEcJa3jT4itR7JClWyx8rYzIe8fvhULosR19Lo",
    },
  };

  //update Movies state with a random page of movies, from the top 50 pages of most popular movies at a given moment
  const searchMovies = async function () {
    const response = await fetch(url, options);
    const data = await response.json();
    setMovies(data.results);
  };
  console.log(movies);

  // call the api retrieval function in useEffect
  useEffect(() => {
    searchMovies();
  }, [randomMovie]);

  //update randomMovie state on a click event
  const handleClick = () => {
    const randomSelection = Math.floor(Math.random() * movies.length);
    setUrl(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${randomPage}&with_genres=27`
    ); // change the selected page with another random one and update state
    setRandomMovie(movies[randomSelection]);
  };

  console.log(randomMovie);
  return (
    <div className="App">
      <Form />
      <button className="generate" onClick={handleClick}>
        Generate Movie
      </button>
      {randomMovie && (
        <MovieCard
          image={randomMovie.poster_path}
          title={randomMovie.title}
          rating={randomMovie.vote_average}
          date={randomMovie.release_date}
          overview={randomMovie.overview}
        />
      )}
    </div>
  );
}

export default App;
