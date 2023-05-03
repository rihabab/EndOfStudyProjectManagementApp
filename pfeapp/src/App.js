import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";
import Login from './components/Login.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';



import './App.css'; 

function App() {
  
  return (
    <div id="root">
           
          <Router>
          <Header />
          <Login />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
  

  
  
  
  
    
}

export default App;
