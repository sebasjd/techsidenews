import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import IconMenu from "./components/Layout/IconMenu";
import Menu from "./components/Layout/Menu";
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import New from "./pages/New";
import NewAccount from "./pages/NewAccount";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import FavIcon from "./components/Layout/favsIcon";
import Favs from "./components/Layout/favs";


function App() {

  return (
    <>
        <Header/>
        <IconMenu />
        <Menu />
        <FavIcon/>
        <Favs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<New />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="login/newaccount" element={<NewAccount />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      <Footer />
    </>
  );
}

export default App;
