import "./App.css";
import MovieCard from "./MovieCard";
import React from "react";
import { useEffect } from "react";
import { Form } from "./Form";

function App() {
  //get a random number from 1 to 20 (top 400 movies)
  const randomPage = Math.floor(Math.random() * 20 + 1);

  const [movies, setMovies] = React.useState("");
  const [randomMovie, setRandomMovie] = React.useState("");
  const [url, setUrl] = React.useState(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${randomPage}`
  );
  const [genre, setGenre] = React.useState("");
  const [buttonIsClicked, setButtonIsClicked] = React.useState(false);

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

  // call the api retrieval function in useEffect
  useEffect(() => {
    searchMovies();
    console.log(url, movies, randomMovie);
  }, [url]);

  const handleClick = () => {
    const newUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${randomPage}&with_genres=${genre}`;

    setUrl(newUrl);
    setButtonIsClicked(true);
  };

  //update random movie based on new movies state
  useEffect(() => {
    const randomSelection = Math.floor(Math.random() * movies.length);
    buttonIsClicked && setRandomMovie(movies[randomSelection]);
  }, [movies, buttonIsClicked]);

  const handleGenreChange = (event) => {
    setGenre(event);
  };

  return (
    <div className="App">
      <Form genre={genre} handleGenreChange={handleGenreChange} />
      <button className="generate" onClick={handleClick}>
        Genereaza film
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
