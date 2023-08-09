import React from 'react'
import './carouselItem.css'

const CarouselItem = ({city}) => {


  return (
    <div className='card'>
        <img className='card-image' src={city.image} alt="city image" />
        <h3>{city.name}</h3>
    </div>
  )
}

export default CarouselItem