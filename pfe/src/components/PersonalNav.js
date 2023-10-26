import { useNavigate } from 'react-router-dom';
import Axios from "axios";


function PersonalNav(props){
    const navigate = useNavigate();
    
    return(
        <div>
            <div>{props.convention}</div>
              
              <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle p-lg-3" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {props.nom}
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Déconnexion</a></li>

                    </ul>
              </div>
              {/* <button className="btn btn-primary rounded-pill main-btn" onClick={logout}>
                  Logout
                </button> */}
        </div>
    )
}
export default PersonalNav