import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import NewSection from '../components/news/NewSection'
import { Container } from '../styles/NewsContainer'
import { News } from '../utils/Data'
import { Back } from '../styles/New'
import { ColorsCtx } from '../styles/Colors'
import axios from 'axios'

const New = () => {

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

  const { PrimaryStrong, PrimaryLight, NoWhite, PrimaryDark } = useContext(ColorsCtx)
  const { title } = useParams();
  const navigate = useNavigate();
 
  
    return (
      <>
        <Back color={PrimaryStrong} fds={PrimaryLight} hfds={NoWhite} mbgc={PrimaryDark} onClick={ () => navigate(-1) } />
        <Container>
          {news.some( e => e.title === title) ?
            news.map( e => e.title === title && 
              <NewSection 
                key={e._id} 
                id={e._id} 
                title={e.title} 
                text={e.text} 
                img={e.img}
              /> 
            ) : <Navigate to ="/404" />
          }
        </Container>
      </>
    )
  }

export default New