import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const Context = createContext();
export const ContextProvider = ({ children }) => {

  const [menuState, setMenuState] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isLogin, setIsLogin] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API cuando el componente se monta
    axios
      .get('https://apitsn.vercel.app/api/news')
      .then((response) => {
        setNews(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener noticias:', error);
      });
  }, []);

    return (
    <Context.Provider
    value= {{
      menuState: menuState,
      setMenuState: setMenuState,
      showModal: showModal,
      setShowModal: setShowModal,
      isLogin: isLogin,
      setIsLogin: setIsLogin,
      news:news,
      setNews:setNews,
    }}>
      {children}
    </Context.Provider>
  )
}