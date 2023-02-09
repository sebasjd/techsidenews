import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ColorsCtx } from '../styles/Colors'
import { Back } from '../styles/NotFound'
import { Container, Error, Number } from '../styles/NotFound'

const NotFound = () => {
  const { NoWhite, PrimaryDark, PrimaryLight, PrimaryStrong } = useContext(ColorsCtx)
  const navigate = useNavigate();

  return (
    <Container>
      <Number color={PrimaryDark} dsc={PrimaryStrong}>404</Number>
      <Error color={NoWhite}>Error 404: Page not found</Error>
      <Back color={PrimaryStrong} fds={PrimaryLight} hfds={NoWhite} mbgc={PrimaryDark} onClick={ () => navigate("/") } />
      <Error color={PrimaryLight}>Click to return</Error>
    </Container>
  )
}

export default NotFound