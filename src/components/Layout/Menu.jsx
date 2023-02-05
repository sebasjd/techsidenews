import React, { useContext, useEffect } from 'react'
import { ColorsCtx } from '../../styles/Colors'
import { Context } from '../../utils/Context'
import {RiMenuFoldLine, RiMenuUnfoldLine} from 'react-icons/ri'
import { CloseButton, Option, Container } from '../../styles/Menu'

const Menu = () => {

  const { PrimaryStrong, PrimaryLight, NoWhite, PrimaryDark, NoBlack} = useContext(ColorsCtx)
  const {menuState, setMenuState} = useContext(Context)

  useEffect(() => {
    const handleKeydown = (e) => {
      e.key === "Escape" && setMenuState(false)
    }
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    }
  });

  return (
    <>
      <Container show={menuState} bgc={NoBlack} color={PrimaryStrong} menuState={menuState}>
        <Option to="/" hbgc={PrimaryStrong} hcolor={NoBlack} hbs={NoWhite} color={PrimaryStrong}>INICIO</Option>
        <Option to="about" hbgc={PrimaryStrong} hcolor={NoBlack} hbs={NoWhite} color={PrimaryStrong}>QUE ES TSN?</Option>
        <Option to="contact" hbgc={PrimaryStrong} hcolor={NoBlack} hbs={NoWhite} color={PrimaryStrong}>CONTACTO</Option>
        <CloseButton  onClick={() => setMenuState(!menuState)} color={PrimaryStrong} fds={PrimaryLight} hfds={NoWhite} mbg={PrimaryDark}>
          {window.innerWidth <= 480 ? <RiMenuUnfoldLine/> : <RiMenuFoldLine/>}
        </CloseButton>
      </Container>
    </>
  )
}

export default Menu