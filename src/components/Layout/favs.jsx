import React, { useContext, useEffect } from 'react'
import { ColorsCtx } from '../../styles/Colors'
import { Context } from '../../utils/Context'
import { Container } from '../../styles/favs'

export default function Favs() {

  const { PrimaryStrong, NoBlack} = useContext(ColorsCtx)
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

        Lista de favoritos

      </Container>

    </>
  )
}
