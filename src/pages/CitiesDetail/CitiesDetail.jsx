import React, { useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Itinerary from '../../components/Itinerary/Itinerary'
import CitiesNotFound from '../../components/CitiesNotFound/CitiesNotFound'
import './citiesDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getItinerariesAsync } from '../../redux/actions/itinerariesActions'
import { getCitiesAsyncById } from '../../redux/actions/citiesActions'



const CitiesDetail = () => {
  const {id} = useParams()

  //redux
  const dispatch = useDispatch()
  const {loading, itineraries} = useSelector(store => store.itinerariesReducer)
  const { city } = useSelector(store => store.citiesReducer)

  useEffect(() => {
    dispatch(getItinerariesAsync({id}))
    dispatch(getCitiesAsyncById({id}));

  },[])

  if(loading){
    return(<h1>Loading...</h1>)
  }

  return (

    <main className='cities-detail-main'>
      
      <section className='input-section'>
        <Link className='btn-detail' to="/cities" >{'<---'}</Link>
        <h2>{city.name}</h2>
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