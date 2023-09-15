import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import NewSection from '../components/news/NewSection'
import { Container } from '../styles/NewsContainer'
import { Back } from '../styles/New'
import { ColorsCtx } from '../styles/Colors'
import { Context } from '../utils/Context'

const New = () => {

  const { PrimaryStrong, PrimaryLight, NoWhite, PrimaryDark } = useContext(ColorsCtx)
  const { id } = useParams();
  const navigate = useNavigate();

  const { news } = useContext(Context)

  
    return (
      <>
        <Back color={PrimaryStrong} fds={PrimaryLight} hfds={NoWhite} mbgc={PrimaryDark} onClick={ () => navigate(-1) } />
        <Container>
          {news.some( e => e._id === id) ?
            news.map( e => e._id === id && 
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