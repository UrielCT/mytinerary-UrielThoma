import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CitiesCard from '../../components/CitiesCard/CitiesCard'
import CitiesNotFound from '../../components/CitiesNotFound/CitiesNotFound'
import './Cities.css'


const Cities = () => {
  const params = useParams()
  //console.log(params);
  const [cities, setCities] = useState([])
  const [citiesSearched, setCitiesSearched] = useState([])
  const [searchText, setSearchText] = useState('');

  
  useEffect(() => {
    axios('http://localhost:3000/api/cities')
      .then(res => {
        setCities(res.data.response)
        setCitiesSearched(res.data.response)
      })
  },[])

  const handleSearchChange = (event) => {
    const inputText = event.target.value.replace(/\s/g, "");

    setSearchText(inputText);

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