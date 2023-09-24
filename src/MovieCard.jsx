import React from 'react'
import './index.css'


export default function MovieCard() {


    return(
    <div className='movie'>
        <img src="https://a.cdn-hotels.com/gdcs/production80/d479/d1f8aa42-09b8-473e-a8d5-44f4cf690635.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="Movie" className='poster' />
        <h3 className='title'>Title</h3>
        <h3 className='rating'>Rating</h3>
        <h4 className='release-date'>Release date</h4>

    </div>)
}