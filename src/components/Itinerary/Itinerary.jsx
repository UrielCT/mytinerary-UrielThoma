import React from 'react'
import './itinerary.css'
import Coin from '../Coin/Coin'

const Itinerary = ({data}) => {
  const {image, name, comments, duration, hashtags, price,likes} = data

  const coins = Array.from({ length: price }, (_, index) => index + 1);

  return (
    <div className='itinerary'>
        <img className='itinerary-image' src="" alt="img" />
        <h2 className='itinerary-name'>{name}</h2>
        <div className='price-container'>    
          {
            coins.map((i) =>(
               <Coin key={i}/>
            ))
          }
        </div>
        
        <p className='itinerary-duration'>{duration}hs</p>
        <p className='itinerary-likes'>{likes} Likes</p>

        <p className='itinerary-hashtags'>#hashtags</p>
        <p className='itinerary-hashtags'>#hashtags</p>
        <p className='itinerary-hashtags'>#hashtags</p>

        <button className='itinerary-viewmore'>View More</button>
    </div>
  )
}

export default Itinerary