import React from 'react'
import { Container } from '../../styles/NewsContainer'
import { News } from '../../utils/Data'
import Card from './Card'

const NewsSection = ( ) => {



  return (
    <>
      <Container>
        {News.map( e =>
        <Card 
          key={e.key} 
          title={e.title} 
          paragraph={e.paragraph} 
          img={e.img}/>
        )}
      </Container>

    </>
  )
}

export default NewsSection