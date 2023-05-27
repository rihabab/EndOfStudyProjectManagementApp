import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../pages/WelcomePage/font_Page.css' ;
import Logo_inpt from '../assets/images/Logo_inpt.PNG';
import { useNavigate } from 'react-router-dom';

import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube,FaSearch } from "react-icons/fa";



function Navbar(props){
    const navigate = useNavigate();

    const login =()=>{
        navigate('/login');
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{backgroundColor: "#ecf3f8"}}>
            <div className="container">
              <a className="navbar-brand" href="#">
                <img
                  src={Logo_inpt}
                  alt=""
                  width="140"
                  height="40"
                  className="d-inline-block align-text-center"
                />
                ENTREPRISES{" "}
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main"
                aria-controls="main"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="main">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link p-lg-3 active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link p-lg-3" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="search ps-3 pe-3">
                    <FaSearch  />
                </div>
                
              </div>
              <div>{props.convention}</div>
              <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle p-lg-3" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {props.nom}
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Déconnexion</a></li>

                    </ul>
              </div>
              <button className="btn btn-primary rounded-pill main-btn" onClick={login}>
                  Login
                </button>
            </div>
          </nav>

        </div>
    );
}
export default Navbar