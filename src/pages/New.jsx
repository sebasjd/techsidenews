import React from 'react'
import { useParams } from 'react-router-dom'
import NewSection from '../components/news/NewSection'
import { Container } from '../styles/NewsContainer'
import { News } from '../utils/Data'

const New = () => {
  const { id } = useParams();

    return (
      <>
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