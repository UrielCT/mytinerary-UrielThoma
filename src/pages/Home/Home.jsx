import React from 'react'
import LayoutMain from '../Layout/LayoutMain'
import Carousel from '../../components/Carousel/Carousel'
import './home.css'

const Home = () => {
  return (
    
    <LayoutMain>
      <main className='home-main'>
        <section className='home-hero'>
          <h2 className='title'>Popular MyTineraries</h2>
        </section>
        <section className='home-carousel'>
          <Carousel/>
        </section>
      </main>
    </LayoutMain>
      
  )
}


export default Home