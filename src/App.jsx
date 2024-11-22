import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Header from "./components/Header";  
import Footer from "./components/Footer";  
import CustomNavbar from "./components/Navbar";  
import Home from "./pages/Home";  
import About from "./pages/About";  
import Education from "./pages/Education";  
import Hobbies from "./pages/Hobbies";  
import Contact from "./pages/Contact";  
import Gallery from "./pages/Gallery";  

const App = () => (  
  <Router>  
    <Header />  
    <CustomNavbar />  
    <main className="my-4">  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/education" element={<Education />} />  
        <Route path="/hobbies" element={<Hobbies />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>  
    </main>  
    <Footer />  
  </Router>  
);  

export default App;