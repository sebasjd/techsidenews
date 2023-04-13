import React, { useContext } from 'react'
import { ColorsCtx } from '../../styles/Colors'
import { Columns, Container } from '../../styles/Footer'


const Footer = () => {
  const { NoBlack, NoWhite } = useContext(ColorsCtx)
  return (
    <>
      <Container bgc={NoBlack}>
        <Columns color={NoWhite}> 
          <p>Nosotros:</p>
          <span>Tech Side News S.A.</span>
          <span>CUIT: 30-67181325-7</span>
          <span>Della Paolera Carlos M. 265</span>
          <span>Ciudad Autonoma de Buenos Aires</span>
        </Columns>
        <Columns color={NoWhite}>
          <p>Con el apoyo de:</p>
          <span>NUCBA</span> 
          <span>OpenAI</span> 
          <span>Developer.Mozilla</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Vercel</span>
        </Columns>
        <Columns color={NoWhite}> 
          © 2023 Todos los derechos reservados.
        </Columns>
      </Container>
    </>
  )
}

export default Footer