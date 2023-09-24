import "./App.css";
import MovieCard from "./MovieCard";
import React from "react";
import { useEffect } from "react";

function App() {
  const [movies, setMovies] = React.useState("");
  const [randomMovie, setRandomMovie] = React.useState("");

  //data to acess the movie API
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGZhOGFhZjgwMTJhZGJlMmVmZDM3NWExY2U1YjEzMyIsInN1YiI6IjY1MDg1OGQ4M2NkMTJjMDBjYTU2ODI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nTaS8WEcJa3jT4itR7JClWyx8rYzIe8fvhULosR19Lo",
    },
  };

  //get a random number from 1 to 30

  const randomPage = Math.floor(Math.random() * 30);

  //update Movies state with a random page of movies, from the top 50 pages of most popular movies at a given moment
  const searchMovies = async function () {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${randomPage}`,
      options
    );
    const data = await response.json();
    setMovies(data.results);
  };
  console.log(movies);

  useEffect(() => {
    searchMovies();
  }, []);

  const handleClick = () => {
    const randomSelection = Math.floor(Math.random() * movies.length);
    setRandomMovie(movies[randomSelection]);
    console.log(randomMovie);
  };

  return (
    <div className="App">
      <button className="generate" onClick={handleClick}>
        Generate Movie
      </button>
      <MovieCard />
    </div>
  );
}

export default App;
