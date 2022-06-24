import { BrowserRouter, Route,Routes } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/Navbar.";
import Footer from  "./components/Footer";
import Course from "./pages/Course";


function App() {
  return (
   <BrowserRouter>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Course" element={<Course />} />

        
        
    </Routes>
    <Footer />
    
   </BrowserRouter>
  );
}

export default App;
