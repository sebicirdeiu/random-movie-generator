import "./App.css";
import MovieCard from "./Components/MovieCard";
import React from "react";
import { useEffect } from "react";
import { Form } from "./Components/Form";
import Favorites from "./Components/Favorites";

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
  const [favorites, setFavorites] = React.useState(() => {
    // Load favorites from local storage on component mount
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [toggleSection, setToggleSection] = React.useState(true);

  //data to acess the movie API
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGZhOGFhZjgwMTJhZGJlMmVmZDM3NWExY2U1YjEzMyIsInN1YiI6IjY1MDg1OGQ4M2NkMTJjMDBjYTU2ODI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nTaS8WEcJa3jT4itR7JClWyx8rYzIe8fvhULosR19Lo",
    },
  };

  //update Movies state with a random page of movies, from the top 20 pages of most popular movies at a given moment
  const searchMovies = async function () {
    const response = await fetch(url, options);
    const data = await response.json();
    setMovies(data.results);
  };

  // call the api retrieval function in useEffect
  useEffect(() => {
    searchMovies();
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

  const addToFavorites = (event) => {
    event.preventDefault();
    // prevent adding same movie twice
    if (!favorites.some((movie) => movie.id === randomMovie.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, randomMovie]);
    }
  };

  const removeMovie = (element) => {
    const newFavorites = favorites.filter((favorite) => favorite !== element);
    setFavorites(newFavorites);
  };

  // Save favorites to local storage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const displayFavorites = () => {
    setToggleSection(false);
  };

  const displayGenerator = () => {
    setToggleSection(true);
  };

  return (
    <div className="App">
      <>
        {toggleSection && (
          <>
            <div className="favorites" onClick={displayFavorites}>
              Listă Favorite
            </div>
            <Form genre={genre} handleGenreChange={handleGenreChange} />
            <button className="generate" onClick={handleClick}>
              Generează
            </button>
            {randomMovie && (
              <MovieCard
                image={randomMovie.poster_path}
                title={randomMovie.title}
                rating={randomMovie.vote_average}
                date={randomMovie.release_date}
                overview={randomMovie.overview}
                addToFavorites={addToFavorites}
              />
            )}
          </>
        )}

        {!toggleSection && (
          <>
            <div className="generator" onClick={displayGenerator}>
              Generează Film
            </div>
            <Favorites movies={favorites} remove={removeMovie} />
          </>
        )}
      </>
    </div>
  );
}

export default App;
