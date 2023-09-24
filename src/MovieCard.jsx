import React from 'react'
import './index.css'


export default function MovieCard(props) {
    const fullYear = props.date
    //get year from full date
    const year = fullYear.split('-')[0]

    return(
    <div className='movie'>
        <img src= {'https://image.tmdb.org/t/p/original/' + props.image}  alt="Movie" className='poster' /> 
        <h3 className='title'>{props.title}</h3>
        <h3 className='rating'>{props.rating}</h3>
        <h4 className='release-date'>{year}</h4>

    </div>)
}