import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import IconMenu from "./components/Layout/IconMenu";
import Menu from "./components/Layout/Menu";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {


  return (
    <>
      <Header/>
      <IconMenu />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
