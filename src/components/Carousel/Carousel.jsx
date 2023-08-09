import React from 'react'
import { useState, useEffect } from "react";

import CarouselItem from '../CarouselItem/CarouselItem';

import cities from "../../data/cities"
import './carousel.css'

const Carousel = () => {
  console.log(cities)

  const [contador, setContador] = useState(0);
  //const [datos, setDatos] = useState([]);

  

  

  useEffect(() => {
    // este como tiene el array vacio, se ejecuta solo cuando monta el componente
    /* fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => response.json())
      .then((data) => setDatos(data.events)); */
  }, []); 
  
  useEffect(() => {
    // este useEffect se ejecuta cada vez que cambia el estado contador
    console.log("Cuando cambia contador:", contador);
  }, [contador]);


  const prev = () => {
    if (contador == 0) {
      setContador(cities.length - 4);
    } else {
      setContador(contador - 4);
    }
  };
  
  const next = () => {
    if (contador == cities.length - 4) {
      setContador(0);
    } else {
      setContador(contador + 4);
    }
  }; 



  return (
        <div className="carousel">
          <button onClick={prev}> {"<"} </button>
          
          <div className='cards-container'>

              <CarouselItem city={cities[contador]}/>
              <CarouselItem city={cities[contador + 1]}/>
              <CarouselItem city={cities[contador + 2]}/>
              <CarouselItem city={cities[contador + 3]}/>
          </div>

          <button onClick={next}> {">"} </button>
        </div>
  )
}


export default Carousel