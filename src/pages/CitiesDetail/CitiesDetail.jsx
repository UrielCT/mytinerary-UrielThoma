import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Itinerary from '../../components/Itinerary/Itinerary'
import './citiesDetail.css'
import CitiesNotFound from '../../components/CitiesNotFound/CitiesNotFound'

const CitiesDetail = () => {
  const params = useParams()
  //console.log(params)
  const [itineraries, setItineraries] = useState([])

  /* useEffect(() => {
    axios('http://localhost:3000/api/itineraries')
      .then(res => {
        setItineraries(res.data.response)
        console.log(itineraries);
      })
  },[]) */

  // get itineraries from a city by its id
  useEffect(() => {
    axios('http://localhost:3000/api/itineraries/' + params.id)
      .then(res => {
        setItineraries(res.data.response)
      })
  },[])

  console.log(itineraries);
  return (

    <main className='cities-detail-main'>
      
      <section className='input-section'>
        <Link className='btn-detail' to="/cities" >Back</Link>
        <h2>Londres</h2>
      </section>

      <div className='itineraries-container'>
        
        {
          itineraries.length > 0 ? 
          itineraries.map(c =>{
              return <Itinerary key={c._id} data={c}/> 
          }):<CitiesNotFound/> 

        }
         
      </div>
    </main>
  )
}

export default CitiesDetail