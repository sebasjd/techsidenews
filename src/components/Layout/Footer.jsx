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
          <t>Tech Side News S.A.</t>
          <t>CUIT: 30-67181325-7</t>
          <t>Della Paolera Carlos M. 265</t>
          <t>Ciudad Autonoma de Buenos Aires</t>
        </Columns>
        <Columns color={NoWhite}>
          <p>Con el apoyo de:</p>
          <t>NUCBA</t> 
          <t>OpenAI</t> 
          <t>Developer.Mozilla</t>
          <t>Git</t>
          <t>GitHub</t>
          <t>Vercel</t>
        </Columns>
        <Columns color={NoWhite}> 
          © 2023 Todos los derechos reservados.
        </Columns>
      </Container>
    </>
  )
}

export default Footer