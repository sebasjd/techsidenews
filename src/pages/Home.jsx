import React from 'react'
import NewsSection from '../components/news/NewsSection'
import axios from 'axios'

const Home = () => {


// Realiza la solicitud GET utilizando Axios
axios.get('https://apitsn.vercel.app/api/news')
  .then(function (response) {
    // Maneja la respuesta exitosa aquí
    const data = response.data; // Esto debería ser un arreglo con información
    console.log('Arreglo de información:', data);
  })


  return (
    <>
      <NewsSection/>
    </>
  )
}

export default Home