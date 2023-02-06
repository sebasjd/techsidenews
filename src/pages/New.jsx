import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
          {News.map( e => e.key === id &&
          <NewSection 
            key={e.key} 
            id={e.key} 
            title={e.title} 
            text={e.text} 
            img={e.img}
            />
          )}
        </Container>
  
      </>
  )
}

export default New