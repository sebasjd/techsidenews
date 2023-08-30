import React from 'react'
import { Container } from '../../styles/NewsContainer'
import { Advertisement } from '../../styles/Advertisement'
import { News, News2 } from '../../utils/Data'
import Card from './Card'
import { Advertisements } from '../../utils/Advertisements'

const NewsSection = ( ) => {

console.log(News)
console.log(News2)


  return (
    <>
      <Container>
        {News.map( e =>{
          return (
            <React.Fragment key={e.key} >
              <Card 
                key={e.key} 
                id={e.key} 
                title={e.title} 
                paragraph={e.paragraph} 
                img={e.img}
              />
              {e.key % 6 === 0 && <Advertisement
                key={Advertisements[e.key/6].id}
                img={Advertisements[e.key/6].imgLarge} 
                imgShort={Advertisements[e.key/6].imgShort} 
              />}
            </React.Fragment> 
          )}
        )}
      </Container>
    </>
  )
}

export default NewsSection