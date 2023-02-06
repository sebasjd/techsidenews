import React, { useContext } from 'react'
import { ColorsCtx } from '../../styles/Colors'
import { Container } from '../../styles/Footer'


const Footer = () => {
  const { NoBlack } = useContext(ColorsCtx)
  return (
    <>
      <Container bgc={NoBlack}>

      </Container>
    </>
  )
}

export default Footer