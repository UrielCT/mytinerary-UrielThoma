import React from 'react'
import { Link } from 'react-router-dom'

const CitiesDetail = () => {
  return (
    <main className='cities-detail-main'>
        <Link className='btn-detail' to="/cities" >Back</Link>
        <h2>Cities Detail</h2>
    </main>
  )
}

export default CitiesDetail