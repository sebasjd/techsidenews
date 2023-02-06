import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from './Context';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { setMenuState } = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuState(false);
  }, [pathname, setMenuState])
  
  return null;
}

export default ScrollToTop;