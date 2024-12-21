import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useFetchProducts } from '../hook/fetchProducts'

const Home = () => {

  const {loading, error, data} = useFetchProducts("http://localhost:8000/products");



  return (
    loading ? <h2>...loading</h2>
    : error ? <h2>...error</h2>
    : data.map(el => <div key={el.id}>{el.title}</div>)
  )
}

export default Home

