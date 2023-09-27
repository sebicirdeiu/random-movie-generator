import React from 'react'
import './index.css'


export default function MovieCard(props) {
    const fullYear = props.date
    //get year from full date
    const year = fullYear.split('-')[0]

    return(
    <div className='movie'>
        <img src= {'https://image.tmdb.org/t/p/original/' + props.image}  alt="Movie" className='poster' /> 
        <div className="stats">
            <h2 className='title'> {props.title}</h2>
            <h3 className='rating'>Rating: {props.rating}</h3>
            <h4 className='release-date'>An: {year}</h4>
            <p className='overview'><span className='overview-'>Descriere:</span>{props.overview}</p>
        </div>

    </div>)
}