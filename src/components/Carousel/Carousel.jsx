import React from 'react'
import { useState, useEffect } from "react";

import CarouselItem from '../CarouselItem/CarouselItem';

import cities from "../../data/cities"
import './carousel.css'

const Carousel = () => {
  //console.log(cities)

  const [contador, setContador] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() =>{
      next();
    },3500)
    return () => {clearInterval(interval)};
  });


  const prev = () => {
    if (contador == 0) {
      setContador(cities.length - 1);
    } else {
      setContador(contador - 1);
    }
  };
  
  const next = () => {
    if (contador == cities.length - 1) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  }; 



  return (
        <div className="carousel">
          <button onClick={prev}> {"<"} </button>
          
          <div className='cards-container'>

            {
              cities[contador].map((c) => {
                return <CarouselItem key={c.id} city={c}/>
              })
            }

              
          </div>

          <button onClick={next}> {">"} </button>
        </div>
  )
}


export default Carousel