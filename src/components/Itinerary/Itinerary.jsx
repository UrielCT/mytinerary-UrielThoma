import './itinerary.css'
import Coin from '../Coin/Coin'
import React, {useState, useEffect} from 'react'


const Itinerary = ({data}) => {
  const {image, name, comments, duration, hashtags, price,likes} = data

  const coins = Array.from({ length: price }, (_, index) => index + 1);

  const [acordeonVisible, setAcordeonVisible] = useState(false);

  const toggleAcordeon = () => {
    setAcordeonVisible(!acordeonVisible);
  };

  return (
    <div className='itinerary'>
      <div className='itinerary-container-top'>
        <div className='itinerary-image-container'>
          <img className='itinerary-image' src={image} alt="img" />
          <h2 className='itinerary-name'>{name}</h2>
        </div>
        
        <div className='itinerary-container-info'>
          <div className='price-container'>    
            {
              coins.map((i) =>(
                <Coin key={i}/>
              ))
            }
          </div>
          
          <p className='itinerary-duration'>{duration}hs</p>
          <p className='itinerary-likes'>{likes} Likes</p>
        </div>
      </div>
        
      <div className='itinerary-container-bottom'>
        <div className='itinerary-hashtags-container'>
          {
            hashtags.map((i)  => <p className='itinerary-hashtags' key={i}>{i}</p>)
          }
        </div>

        <button className='itinerary-viewmore' onClick={toggleAcordeon}>View More</button>
      </div>

      {acordeonVisible && (
        <div className='itinerary-more-container'>
          <p>UNDER CONTRUCTION</p>
        </div>
      )}
      
    </div>
  )
}

export default Itinerary