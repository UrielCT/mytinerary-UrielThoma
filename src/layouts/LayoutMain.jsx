import React from 'react'
import NavbarMain from '../components/Navbar/NavbarMain'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './layoutMain.css'


const LayoutMain = () => {
  

  return (
    <div className='app-layout'>

      <header className='app-header'>
        <h1>MyTinerary</h1>

        <NavbarMain/>
          

          <div className='btns-login-container'> 
            <a className='main-btn-login' href="#">
              <i className="fa-solid fa-user"></i>
              <span>Log in</span>
          </a>

          <a className='main-btn-signup' href="#">
              <span>Sign up</span>
          </a>
          </div>
        
        
      </header>

      
      <Outlet/>
      
      
      <Footer/>

    </div>
  )
}

export default LayoutMain
