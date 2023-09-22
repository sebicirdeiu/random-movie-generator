import "./App.css";
//import React from "react";
//import MovieCard from './MovieCard'

function App() {
  return (
    <div className="App">
      <form className="Form">
        <label htmlFor="genre" className="genre">
          Genre:
          <select id="genre">
            <option value="" disabled>
              Select a genre
            </option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="thriller">Thriller</option>
            <option value="sf">SF</option>
            <option value="romance">Romance</option>
            <option value="drama">Drama</option>
          </select>
        </label>
        <label htmlFor="minIMDBScore" className="imdb">
          Minimum IMDb Score:
          <input
            type="text"
            id="minIMDBScore"
            placeholder="Enter min IMDb score"
          />
        </label>
        <button type="submit">Generate Movie</button>
      </form>
    </div>
  );
}

export default App;
