import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import About from './Views/About';
import IndexNavbar from './Components/IndexNavbar';
import Contactus from './Components/Contactus'
import Footer from './Components/Footer';
import Hwd from './Components/Hwd';
import OurServices from './Views/OurServices'
import Impact from './Views/Impact';
import Career from './Views/Career';
import Portfolio from './Views/Portfolio';
import ITsupport from './Views/ITsupport';
import Healthcare from './Views/Healthcare';
import Brainstorming from './Views/Brainstorming';
import Viewmore from './Views/Viewmore';

function App() {
  return (
    <>
      <BrowserRouter>
        <IndexNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path='/how-we-do' element = {<Hwd/>}/>
          <Route path='/ourservices' element = {<OurServices/>}/>
          <Route path='/ourservices/healthcare' element = {<Healthcare/>}/>
          <Route path='/brainstorming' element = {<Brainstorming/>}/>
          <Route path='/ourservices/itsupport' element = {<ITsupport/>}/>
          <Route path='/impact' element = {<Impact/>}/>
          <Route path='/career' element = {<Career/>}/>
          <Route path='/portfolio' element = {<Portfolio/>}/>
          <Route path='/viewmore' element = {<Viewmore/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;




