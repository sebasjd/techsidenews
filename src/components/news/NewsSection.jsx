import React from 'react'
import { Container } from '../../styles/NewsContainer'
import { Advertisement } from '../../styles/Advertisement'
import { News, News2 } from '../../utils/Data'
import Card from './Card'
import { Advertisements } from '../../utils/Advertisements'
import axios from 'axios'

const NewsSection =  ( ) => {

  axios.get('https://apitsn.vercel.app/api/news')
  .then(function (response) {
  const News3 = response.data
console.log(News3)
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
)}

export default NewsSection