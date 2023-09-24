import "./App.css";
import MovieCard from "./MovieCard";
import React from "react";
import { useEffect } from "react";

function App() {
  const [movies, setMovies] = React.useState("");

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
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=1`,
      options
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  };
  console.log(movies);

  useEffect(() => {
    searchMovies();
  }, []);

  const handleClick = () => {};

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
