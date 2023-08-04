import React from 'react'
import NavbarMain from '../../components/Navbar/NavbarMain'

const Home = () => {
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
        <>
          <div>
            <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia, molestias nostrum 
              quod optio ipsum possimus esse fuga deserunt ratione quasi, earum cupiditate voluptas aliquam!
               Deserunt enim cumque atque recusandae!</p>
            <button>View More</button>
          </div>
          <img src="" alt="imagen_inicio" />
        </>  
      </main>
      
      <footer>
        <p>Todos los derechos reservados. Uriel Thoma 2023</p>
      </footer>

    </div>
  )
}


export default Home