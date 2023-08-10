import React from 'react'
import './navbarmain.css'
import { Link, NavLink } from 'react-router-dom'


const NavbarMain = ({value}) => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/cities">Cities</Link>
    </nav>
  )
}

export default NavbarMain