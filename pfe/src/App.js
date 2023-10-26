// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// function BlogPost(props) {
//     return (
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={props.imageURL} />
//             <Card.Body>
//                 <Card.Title>{props.title}</Card.Title>
//                 <Card.Text>
//                     {props.summary}
//                 </Card.Text>
//                 <Button variant="primary" href={props.fullArticleLink}>Read More</Button>
//             </Card.Body>
//         </Card>
//     );
// }

// function App() {
//   return (
//     <div className="container mt-5">
//         <BlogPost 
//             title="Sample Blog Post"
//             summary="This is a short summary of the blog post. Click 'Read More' to see the full content."
//             imageURL="https://via.placeholder.com/150"
//             fullArticleLink="#"
//         />
//     </div>
// );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext.js";
import WelcomePage from './pages/WelcomePage/WelcomePage.js';
import Footer from './components/Footer.js';
import Admin from './pages/Admin/Admin.js';
import Student from './pages/student/Student.js';
import Coordinator from './pages/Coordinator/Coordinator.js';
import Responsable from './pages/Responsable/Responsable.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Login/Register.js';
import Convention from './pages/student/Convention.js';
import BlogPost from "./pages/student/BlogPost.js";
import LogContext from "./contexts/LogContext.js";
import './App.css'; 
import Navbar from "./components/Navbar.js";


function App() {
  const [theme, setTheme] = useState([]);
  const [loggedIn, setLoggedIn]   = useState(false);
  return (
    <div id="root">
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <LogContext.Provider value={{ loggedIn, setLoggedIn }}>
    

          <Router>
          
        <Navbar />
          
          
          <Routes>
          
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/student" element={<Student />} />
            <Route path="/coordinator" element={<Coordinator />} />
            <Route path="/responsable" element={<Responsable />} />
            <Route path="/convention" element={<Convention />} />
            <Route path="/blogpost" element={<BlogPost />} />
          
          </Routes>
          
          <Footer />
        </Router>
        </LogContext.Provider>
        </ThemeContext.Provider>
    </div>
  );
  

  
  
  
  
    
}

export default App;
