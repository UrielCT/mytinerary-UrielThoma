import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Itinerary from '../../components/Itinerary/Itinerary'
import CitiesNotFound from '../../components/CitiesNotFound/CitiesNotFound'
import './citiesDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getItinerariesAsync } from '../../redux/actions/itinerariesActions'



const CitiesDetail = () => {
  const {id} = useParams()
  //const [itineraries, setItineraries] = useState([])

  //redux
  const dispatch = useDispatch()
  const {loading, itineraries} = useSelector(store => store.itinerariesReducer)

  // get itineraries from a city by its id
  useEffect(() => {
    dispatch(getItinerariesAsync({id}))
  },[])

  if(loading){
    return(<h1>Loading...</h1>)
  }

  return (

    <main className='cities-detail-main'>
      
      <section className='input-section'>
        <Link className='btn-detail' to="/cities" >{'<---'}</Link>
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