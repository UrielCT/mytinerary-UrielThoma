import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import './home.css'
import Hero from '../../layouts/Hero/Hero'

const Home = () => {
  return (
    
    
      <main className='home-main'>
        <section className='home-hero'>
          <Hero/>
        </section>
        
        <section className='home-carousel'>
          <h2 className='title'>Popular MyTineraries</h2>
          <Carousel/>
        </section>
      </main>
    
      
  )
}


export default Home