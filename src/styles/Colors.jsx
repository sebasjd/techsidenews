import { createContext } from "react";


export const ColorsCtx = createContext();

export const ColorsCtxProvider = ( { children } ) => {
  return (
    <ColorsCtx.Provider
    value={{
      PrimaryLight: "#7DDFEE",
      PrimaryStrong: "#00C8E0",
      PrimaryDark: "#151E21",
      NoBlack: "#121212",
      NoWhite: "#E0F7FB",
      Gray:  "#4C4C4C"
    }}>
      { children }
    </ColorsCtx.Provider>
  )
}