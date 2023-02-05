import React, { useContext } from 'react'
import { Container, Epigraph, Img, Title } from '../../styles/Card'
import { ColorsCtx } from '../../styles/Colors'

const Card = (props) => {

  const { Gray, NoWhite, NoBlack } = useContext(ColorsCtx)

  return (
    <>
      <Container border={Gray} hbgc={NoBlack}>
        <Img src={props.img} bs={Gray} />
        <Title> {props.title} </Title>
        <Epigraph color={NoWhite}> {props.paragraph} </Epigraph>
      </Container>
    </>
  )
}

export default Card