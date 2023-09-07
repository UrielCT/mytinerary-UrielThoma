import React, {useEffect} from 'react'
import CitiesCard from '../../components/CitiesCard/CitiesCard'
import CitiesNotFound from '../../components/CitiesNotFound/CitiesNotFound'
import './Cities.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCitiesAsync, getCitiesSearchedSync } from '../../redux/actions/citiesActions'

const Cities = () => {
  //redux
  const dispatch = useDispatch()
  const {loading, cities, citiesSearched} = useSelector(store => store.citiesReducer)

  useEffect(() => {
    dispatch(getCitiesAsync());
  },[])
 
  const handleSearchChange = (event) => {
    const inputText = event.target.value.replace(/\s/g, "");
    dispatch(getCitiesSearchedSync(inputText, cities))
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