import React from 'react'
import NavbarMain from '../../components/Navbar/NavbarMain'
import Footer from '../../components/Footer/Footer'

const LayoutMain = ({children}) => {
  return (
    <div className='app-layout'>

      <header>
        <h1>MyTinerary</h1>
        <NavbarMain/>
        <button>
          <div>
            <img src="" alt="person" />
            <p>Login</p>
          </div>
        </button>
      </header>

      <main>
        {children}
      </main>
      
      <Footer/>

    </div>
  )
}

export default LayoutMain
