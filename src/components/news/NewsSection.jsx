import React, { useContext } from 'react'
import { Container } from '../../styles/NewsContainer'
import { Advertisement } from '../../styles/Advertisement'
import Card from './Card'
import { Advertisements } from '../../utils/Advertisements'
import { Context } from '../../utils/Context'

const NewsSection = ( ) => {


  const { news } = useContext(Context)

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
              {((index+1) % 6 === 0) && <Advertisement
                key={Advertisements[(index+1)/6].id}
                img={Advertisements[(index+1)/6].imgLarge} 
                imgShort={Advertisements[(index+1)/6].imgShort} 
              />}
            </React.Fragment> 
          )}
        )}
      </Container>
    </>
  )
}


export default NewsSection