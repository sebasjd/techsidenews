import React, { useEffect, useState } from 'react'
import { Container } from '../../styles/NewsContainer'
import { Advertisement } from '../../styles/Advertisement'
import { News, News2 } from '../../utils/Data'
import Card from './Card'
import { Advertisements } from '../../utils/Advertisements'
import axios from 'axios';

const NewsSection = ( ) => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API cuando el componente se monta
    axios
      .get('https://apitsn.vercel.app/api/news')
      .then((response) => {
        setNews(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener noticias:', error);
      });
  }, []);

    return (
    <>
      <Container>
        {news.map( (e, index) =>{
          return (
            <React.Fragment key={e._id} >
              <Card 
                key={e._id} 
                id={e._id} 
                title={e.title} 
                paragraph={e.paragraph} 
                img={e.img}
              />
              {e.index % 6 === 0 && <Advertisement
                key={Advertisements[index/6].id}
                img={Advertisements[index/6].imgLarge} 
                imgShort={Advertisements[index/6].imgShort} 
              />}
            </React.Fragment> 
          )}
        )}
      </Container>
    </>
  )
}


export default NewsSection