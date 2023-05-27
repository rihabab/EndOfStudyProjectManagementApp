import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../pages/WelcomePage/font_Page.css' ;
import Logo_inpt from '../assets/images/Logo_inpt.PNG';

import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube,FaSearch } from "react-icons/fa";



function Footer(){
    return(
        <div className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-lg-6">
                <div className="info mb-5">
                <img src={Logo_inpt} alt="" width="140" height="70" className="mb-4" />
                <p className="mb-1">"Nous accompagnons vos premiers pas vers l’entreprise"
                    L'équipe de la direction adjointe des stages et relations entreprises vous accompagne dans vos premiers pas vers l'entreprise. Votre carrière se construit dès aujourd'hui, nous sommes là pour vous aider à mettre en valeur vos atouts pour bien la démarrer.
                </p>
<<<<<<< HEAD
                <div class="copyright">
=======
                <div className="copyright">
>>>>>>> main
                            Created By <span>
                                <ul>
                                    <li>BOUTOU CHAIMA </li>
                                    <li>AITBAHSSOU RIHAB </li>
                                </ul>
                            </span>
                            <div>&copy; 2023 - <span>INPT Entreprises</span></div>
                        </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6">
                <div className="contact">
                <h5 className="text-light">Contact Us</h5>
                <p className="lh-lg mt-3 mb-5">Contactez-nous par téléphone. Nous attendons votre appel ou message</p>
                <a className="btn btn-primary rounded-pill main-btn w-100" href="mailto:inpt.entreprises@gmail.com">inpt.entreprises@gmail.com</a>
                <ul className="d-flex mt-5 list-unstyled gap-3">
                    <li>
                        <a className="d-block text-light" href="#"><FaFacebook className="fa-brands fa-facebook fa-lg facebook rounded-circle p-2" /></a>
                    </li>
                    <li>
                        <a className="d-block text-light" href="#"><FaTwitter className="twitter rounded-circle p-2 fa-lg" /></a>
                    </li>
                    <li>
                        <a className="d-block text-light" href="#"><FaLinkedin className="linkedin rounded-circle p-2 fa-lg" /></a>
                    </li>
                    <li>
                        <a className="d-block text-light" href="#"><FaYoutube className="youtube rounded-circle p-2 fa-lg" /></a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Footer