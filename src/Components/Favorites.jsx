import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

export default function Favorites({ movies, remove }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {movies.map((movie) => {
        return (
          <div className="movieframe" key={movie.id}>
            <h3 className="favtitle">{movie.title}</h3>
            <h4 className="favyear">
              {movie.release_date !== "N/A" && movie.release_date.split("-")[0]}
            </h4>
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt="poster"
              className="favposter"
            ></img>
            <button className="delete" onClick={() => remove(movie)}>
              Șterge
            </button>
          </div>
        );
      })}
    </Carousel>
  );
}
