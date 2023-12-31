import React from "react";

export default function MovieCard(props) {
  const fullYear = props.date;
  //get year from full date
  const year = props.year !== "N/A" && fullYear.split("-")[0];

  return (
    <div className="movie">
      <div className="img-container">
        <img
          src={"https://image.tmdb.org/t/p/original/" + props.image}
          alt="Movie"
          className="poster"
        />
        <div className="stats">
          <div className="titlesection">
            <h2 className="title"> {props.title}</h2>
            <button className="addfavorite" onClick={props.addToFavorites}>
              Adaugă la Favorite
            </button>
          </div>
          <h3 className="rating">
            Rating: <span className="span">{props.rating}</span>
          </h3>
          <h4 className="release-date">
            An: <span className="span">{year}</span>
          </h4>
          <p className="overview">
            <span className="overview-">Descriere: </span>
            {props.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
