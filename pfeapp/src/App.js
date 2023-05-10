import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from './pages/WelcomePage/WelcomePage.js';
import Footer from './components/Footer.js';
import Admin from './pages/Admin/Admin.js';
import Student from './pages/student/Student.js';


import './App.css'; 

function App() {
  
  return (
    <div id="root">
           
          <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            
            <Route path="/Admin" element={<Admin />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
  

  
  
  
  
    
}

export default App;
