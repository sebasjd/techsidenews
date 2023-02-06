import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import IconMenu from "./components/Layout/IconMenu";
import Menu from "./components/Layout/Menu";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import New from "./pages/New";
import NotFound from "./pages/NotFound";


function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <IconMenu />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<New />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
