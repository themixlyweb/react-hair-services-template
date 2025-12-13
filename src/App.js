import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import Appointment from './Pages/Appointment';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
       <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/apt" element={<Appointment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
