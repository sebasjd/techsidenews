import React, { useContext } from 'react'
import {RiMenuFoldLine, RiMenuUnfoldLine} from 'react-icons/ri'
import { MenuButton } from '../../styles/ButtonMenu'
import { ColorsCtx } from '../../styles/Colors'
import { Context } from '../../utils/Context'


const IconMenu = () => {
  const { PrimaryStrong, PrimaryLight, NoWhite, PrimaryDark } = useContext(ColorsCtx)

  const {menuState, setMenuState} = useContext(Context)

  return (
    <>
      <MenuButton onClick={() => setMenuState(!menuState)} color={PrimaryStrong} fds={PrimaryLight} hfds={NoWhite} mbgc={PrimaryDark}>
        {window.innerWidth <= 480 ? <RiMenuFoldLine />: <RiMenuUnfoldLine />}
      </MenuButton>
    </>
  )
}

export default IconMenu