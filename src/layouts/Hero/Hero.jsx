import React from 'react'
import './hero.css'
import { Link, NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <h2 className='slogan'>Find your perfect trip, designed by insiders who know and love their cities!</h2>
        
        {/* <button className='btn-viewMore' type="text">View More</button> */}
        <Link className='btn-viewMore' to="/cities">View More</Link>

    </>
        
  )
}

export default Hero