import React, { useContext, useEffect } from 'react'
import { ColorsCtx } from '../../styles/Colors'
import { Context } from '../../utils/Context'
import { CloseButton, Container } from '../../styles/favs'

export default function Favs() {

  const { PrimaryStrong, PrimaryLight, NoWhite, PrimaryDark, NoBlack} = useContext(ColorsCtx)
  const {favState, setFavState} = useContext(Context)

  useEffect(() => {
    const handleKeydown = (e) => {
      e.key === "Escape" && setFavState(false)
    }
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    }
  });

  return (



    <>
      <Container show={favState} bgc={NoBlack} color={PrimaryStrong} favState={favState}> 

      In the near future, by logging in, you will be able to see your list of favorites.
      <CloseButton onClick={() => setFavState(!favState)} color={PrimaryStrong} fds={PrimaryLight} hfds={NoWhite} mbg={PrimaryDark}>
        X
      </CloseButton>
      </Container>

    </>
  )
}
