import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CitiesCard from '../../components/CitiesCard/CitiesCard'
import CitiesNotFound from '../../components/CitiesNotFound/CitiesNotFound'
import './Cities.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCitiesAsync } from '../../redux/actions/citiesActions'



const Cities = () => {
  const [citiesSearched, setCitiesSearched] = useState([])

  //redux
  const dispatch = useDispatch()
  const {loading, cities} = useSelector(store => store.citiesReducer)
  
  useEffect(() => {

    dispatch(getCitiesAsync());
      setCitiesSearched(cities)
  },[])

  /* useEffect(() => {
    axios('http://localhost:3000/api/cities')
      .then(res => {
        setCities(res.data.response)
        setCitiesSearched(res.data.response)
      })
      .catch(e => console.log(e));
      
  },[]) */

  const handleSearchChange = (event) => {
    const inputText = event.target.value.replace(/\s/g, "");

    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().startsWith(inputText.toLowerCase())
    );
    setCitiesSearched(filteredCities);
  };
  
  


  return (
    
    <main className='cities-main'>
      <section className='input-section'>
        <input type="text" placeholder="Search" onChange={handleSearchChange}/>
      </section>

      <div className='cities-container'>
        {
          citiesSearched.length > 0 ? 
          citiesSearched.map(c =>{
              return <CitiesCard key={c._id} data={c}/> 
          }): <CitiesNotFound/>

        }
      </div>
    </main>
  )
}

export default Cities