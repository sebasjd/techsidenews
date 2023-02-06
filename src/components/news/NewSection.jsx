import React, { useContext } from 'react'
import { ColorsCtx } from '../../styles/Colors'
import { Container, Img, Text, Title } from '../../styles/New'

const Card = (props) => {

  const { NoWhite } = useContext(ColorsCtx)

  return (
    <>
      <Container>
        <Img src={props.img}  />
        <Title color={NoWhite}> {props.title} </Title>
        <Text color={NoWhite}> {props.text} </Text>
      </Container>
    </>
  )
}

export default Card