


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from './pages/WelcomePage/WelcomePage.js';
import Footer from './components/Footer.js';
import Admin from './pages/Admin/Admin.js';
import Student from './pages/student/Student.js';
import Coordinator from './pages/Coordinator/Coordinator.js';
import Responsable from './pages/Responsable/Responsable.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Login/Register.js';

import './App.css'; 

function App() {
  
  return (
    <div id="root">
           
          <Router>

          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/student" element={<Student />} />
            <Route path="/coordinator" element={<Coordinator />} />
            <Route path="/responsable" element={<Responsable />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
  

  
  
  
  
    
}

export default App;
