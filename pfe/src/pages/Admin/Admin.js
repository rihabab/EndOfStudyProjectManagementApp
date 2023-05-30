import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";

import admin from '../../assets/images/admin.webp';
import im3 from '../../assets/images/3.jpg';
import avif from '../../assets/images/avif.webp';


import './Admin.css';


function Admin(props){
    const navigate = useNavigate();
    const [username , setUsername] = useState("");
    useEffect(()=>{
        Axios.get("http://localhost:3002/isUserAuth" , {
          headers : {
            "x-access-token":localStorage.getItem("token")
          }}).then((response)=>{
            if(response.data.auth){
              console.log(response.data.result);
              console.log(response.data.type);
              console.log('hello');
              setUsername(response.data.result.nom)
              /*
              navigate('/student')
              */
            }else{
                navigate('/login')
              
            }
          })
      },[])

    return(
      <div className="admin">
        <Navbar nom={username} />
        <div class="design pt-5 pb-0  d-flex align-items-center">
            <div class="image position-relative">
                <img src={admin} alt="" width="500" />
            </div>
            <div class="text me-5 position-relative">
                <h1>L'espace de l'adimistrateur</h1>
                <h2>Vous pouvez ici de :</h2>

                <ul>
                    <li>Ajouter un nouveau offre </li>
                    <li>Consulter les PFEs</li>
                </ul>
            </div>
        </div>
        

        
        <div class="features" id="features">
            <div class="container">
                <div class="box quality">
                    <div class="img-holder"><img src={im3} alt="" /></div>
                    <h2>Ajouter un Offre</h2>
                    <p>Cliquer sur "More " pour ajouter un offre de stage et remplir les informatios nécessaires</p>
                    <a href="#">More</a>
                </div>
                <div class="box time">
                    <div class="img-holder"><img src={avif} alt="" /></div>
                    <h2>Consulter les PFEs</h2>
                    <p>Cliquer sur "More " pour consulter tous les informatios sur PFEs</p>
                    <a href="#">More</a>
                </div>

            </div>
        </div>

      </div>
    )
}

export default Admin 