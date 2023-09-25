import React from "react";
import { genresMap } from "./GenreMap";

export function Form() {
  return (
    <form className="form">
      <label htmlFor="genre">
        Genre:
        <select
          id="genre"
          //value={genre}
          //onChange={handleGenreChange}
        >
          {genresMap.map((genre) => {
            return <option value={genre.id}> {genre.genre}</option>;
          })}
        </select>
      </label>
    </form>
  );
}
