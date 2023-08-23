import React from 'react'
import './citiesCard.css'
import { Link } from 'react-router-dom'

const CitiesCard = ({data}) => {
    const {image, name, country, description, currency, language} = data

    return ( 
        <div className='cities-card'>
            <img className='city_image' src={image} alt="card image" />
            <h2 className='city-name'>{name}</h2>
            <h3 className='city-country'>{country}</h3>
            <p className='city-description'>{description}</p>
            <p className='city-currency'>{currency}</p>
            <p className='city-language'>{language}</p>
            <Link className='btn-detail' to="/cities/detail" >Details</Link>
        </div>
  )
}

export default CitiesCard