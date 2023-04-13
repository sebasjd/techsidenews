import { createContext, useState } from "react";


export const Context = createContext();
export const ContextProvider = ({ children }) => {

  const [menuState, setMenuState] = useState(false)
  const [showModal, setShowModal] = useState(false)
    return (
    <Context.Provider
    value= {{
      menuState: menuState,
      setMenuState: setMenuState,
      showModal: showModal,
      setShowModal: setShowModal
    }}>
      {children}
    </Context.Provider>
  )
}