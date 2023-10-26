import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../pages/WelcomePage/font_Page.css' ;
import Logo_inpt from '../assets/images/Logo_inpt.PNG';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import ThemeContext from "../contexts/ThemeContext";
import Axios from "axios";
import LogContext from "../contexts/LogContext";



function Navbar(){
    const navigate = useNavigate();
    const { theme, setTheme } = useContext(ThemeContext);
    const { loggedIn, setLoggedIn } = useContext(LogContext);
    const [username, setUserName]=useState('');
    const [isUserLoggedIn, setisLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        Axios.get("http://localhost:3002/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }).then((response) => {
            if (response.data.auth) {
                console.log(response.data.result);
                const themeData = Object.entries(response.data.result);
                setTheme(themeData);
                setUserName(themeData[1][1]);
                setisLoggedIn(true);

            } else {
                setTheme([]);
                setUserName('');
                setisLoggedIn(false);
                navigate('/login');
            }
            setLoading(false); 
        })
    }, [loggedIn]);











    const logout = () => {
      setTheme([]);
      setUserName('');
      setisLoggedIn(false);
    
      Axios.get("http://localhost:3002/logout", { // Assuming the correct route is "/logout"
          headers: {
              "x-access-token": localStorage.removeItem("token")
          }
      }).then((response) => {
          if (!response.data.auth) {
              navigate('/login');
          }
          
      });
      navigate('/login');
    }


    const login =()=>{
        navigate('/login');
    }

    if (loading) {
      return <div>Loading...</div>;
  }else{
    return(
      
      <div>
          
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
          
          
          <a className="navbar-brand " href="#" >
              <img
                src={Logo_inpt}
                alt=""
                width="110"
                height="40"
                className="d-inline-block "
              />
              
            </a>
          

          
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              
              
              {(() => {
              if (isUserLoggedIn) {
                return (
                  
                  <div className="navbar-nav">
                    
                    
                      <li className="nav-item d-flex align-items-center justify-content-center px-2">
                        <a className="nav-link navbar-nav " href="#"><FaUser className=" mt-1" /><div className="d-flex align-items-center justify-content-center ">{username}</div></a>
                      </li>
                    
                    
                    <li className="nav-item">
                      <button className=" btn btn-primary rounded-pill main-btn" onClick={logout}>
                          Logout
                      </button>
                    </li>


                      
                  </div>
                );
              
              } else {
                return (
                  <div className="navbar-nav">
                    
                    <li className="nav-item ">
                      <button className="btn btn-primary rounded-pill main-btn" onClick={login}>
                        Sign in
                      </button>
                    </li>
                  </div>
              ) ;
              }
            })()}

            </ul>
          </div>
        </nav>
      </div>
    
      
  );
  }
  
    
}
export default Navbar