import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import NewSection from '../components/news/NewSection'
import { Container } from '../styles/NewsContainer'
import { News } from '../utils/Data'
import { Back } from '../styles/New'
import { ColorsCtx } from '../styles/Colors'

const New = () => {
  const { PrimaryStrong, PrimaryLight, NoWhite, PrimaryDark } = useContext(ColorsCtx)
  const { id } = useParams();
  const navigate = useNavigate();
 
  
    return (
      <>
        <Back color={PrimaryStrong} fds={PrimaryLight} hfds={NoWhite} mbgc={PrimaryDark} onClick={ () => navigate(-1) } />
        <Container>
          {News.some( e => e._id === id) ?
            News.map( e => e._id === id && 
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