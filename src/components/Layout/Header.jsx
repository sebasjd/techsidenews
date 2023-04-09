import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ColorsCtx } from '../../styles/Colors'
import { Container, Logo } from '../../styles/Header'

const Header = () => {

  const {PrimaryStrong, PrimaryDark, PrimaryLight} = useContext(ColorsCtx)
  let navigate = useNavigate();

  return (
    <>
      <Container bgc={PrimaryDark} fds={PrimaryLight}>
        <Logo onClick={()=> navigate("/")}><span style={{color: `${PrimaryStrong}`}}>T</span>ech <span style={{color: `${PrimaryStrong}`}}>S</span>ide <span style={{color: `${PrimaryStrong}`}}>N</span>ews</Logo>
      </Container>
    </>
  )
}

export default Header