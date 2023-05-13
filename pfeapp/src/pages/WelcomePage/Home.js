import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './font_Page.css' ;
import Logo_inpt from '../../assets/images/Logo_inpt.PNG';
import desk1 from '../../assets/images/desk1.jpg';
import { FaCheckSquare,FaMapMarkerAlt,FaBuilding,FaClock,FaHandshake } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube,FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    const register =()=>{
        navigate('/registration');
    }


    return(
        <div className="home">
      
      <div className="landing d-flex justify-content-center align-items-center">
        <div className="text-center text-light">
          <h1>INPT Entreprises</h1>
          <p className="fs-6 text-white-50 mb-5">Your first steps towards business</p>
          <button className="btn btn-primary main-btn" onClick={register}>
            Get Started
          </button>
        </div>
      </div>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
            <div className="main-title mt-5 mb-5 position-relative">
            <img className="mb-4" src={desk1} alt="" />
            <h2>INPT Entreprises offre plusieurs fonctionnalités</h2>
            <p className="text-black-50 text-uppercase">
                Certaines de ces fonctionalités ci-dessous
            </p>
            </div>
            <div className="row">
            <div className="col-md-6 col-lg-4">
                <div className="feat">
                <div className="icon-holder position-relative">
                    <FaCheckSquare className="fa-1 position-absolute bottom-0 number" />
                    <FaCheckSquare className="fa-address-card fa-4x position-absolute bottom-0 icon" />
                </div>
                <h4 className="mb-3 mt-3 text-uppercase">Mon espace</h4>
                <p className="text-black-50 lh-lg">
                    Cet espace sécurisé est réservé aux étudiants de l'INPT ayant rempli au
                    préalable le formulaire "Mieux vous connaître" et vérifié par l'administration.
                    Afin de récupérer votre mot de passe, veuillez utiliser la même adresse email renseignée
                    et cliquer sur "redéfinir ?"". Vous aller recevoir un message pour réinitialiser votre
                    login et pouvoir accéder aux offres de stages.
                </p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="feat">
                <div className="icon-holder position-relative">
                    <FaMapMarkerAlt className="fa-1 position-absolute bottom-0 number" />
                    <FaBuilding className="fa-building fa-4x position-absolute bottom-0 icon" />
                </div>
                <h4 className="mb-3 mt-3 text-uppercase">Les stages</h4>
                <p className="text-black-50 lh-lg">
                    Le programme de formation de l’INPT impose aux étudiants le passage au sein des
                    entreprises partenaires. Ceci dit, les élèves ingénieurs sont amenés à faire :
                </p>
                <ul>
                    <li>Stage ouvrier en première année</li>
                    <li>Stage Technique en deuxième année</li>
                    <li>Le Projet de fin d’études (PFE) en troisième année.</li>
                </ul>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="feat">
                <div className="icon-holder position-relative">
                    <FaHandshake className="fa-3 position-absolute bottom-0 number" />
                    <FaHandshake className="fa-handshake fa-4x position-absolute bottom-0 icon" />
                </div>
                <h4 className="mb-3 mt-3 text-uppercase">Jeudis entreprises</h4>
                <p className="text-black-50 lh-lg">
                    L'école organise de manière continue des visites d'entreprises aux étudiants afin de leur permettre
                    de s'enquérir des réalités du monde du travail.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>







    </div>


        
    );

}

export default Home