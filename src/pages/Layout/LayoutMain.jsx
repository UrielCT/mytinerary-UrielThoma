import React from 'react'
import NavbarMain from '../../components/Navbar/NavbarMain'
import Footer from '../../components/Footer/Footer'

const LayoutMain = ({children}) => {
  console.log(children)
  return (
    <div className='app-layout'>

      <header className='app-header'>
        <h1>MyTinerary</h1>

        <NavbarMain/>
        
          
        <a className='main-btn-login' href="#">
            <i className="fa-solid fa-user"></i>
            <span>Login</span>
        </a>
        
        
      </header>

      <main className='app-main'>
        {children}
      </main>
      
      <Footer/>

    </div>
  )
}

export default LayoutMain
