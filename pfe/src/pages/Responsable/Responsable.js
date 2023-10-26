import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import desk1 from '../../assets/images/desk1.jpg';
import pngg from '../../assets/images/pngaaa.com-1721267.png';



import './Coordinateur.css';



function Responsable(){
  let state=['hello'];
  const navigate = useNavigate();
  const [username , setUsername] = useState("");
  const [userfil , setUserfil] = useState("");
  const [etudiantfil , setEtudiantFil] = useState([]);
  const [state1 , setstate1] = useState();
  
    const generatecont=(state)=>{
      Axios.post('http://localhost:3002/responsable',{
              userfil:userfil,
              })
              .then((response)=>{
              setEtudiantFil(response.data)
              
              });
    }
    
  return (
    <div>
        <Navbar isUserLoggedIn={true} nom={username} />
        
        <div className="features text-center pt-5 pb-5">
      <div className="container">
          <div className="titl mt-5 mb-5 position-relative">
              <img className="mb-4" src={desk1} alt="" />
              <h2>L'espace du Responsable</h2>
              <p className="text-black-100 text-uppercase">INPT Entreprises </p>
          </div>

      </div>
  </div>

  <div className="articles" id="articles">
      <h2 className="main-title"><button onClick={generatecont}>List des PFEs</button></h2>
  </div>

  <div>
          
      </div>
      <div className="container mt-5">
<table className="table table-borderless table-responsive card-1 p-4">
  <thead>
    <tr className="border-bottom">
      <th>
        <span className="ml-2">Etudiant</span>
      </th>
      <th>
        <span className="ml-2">Sujet de Pfe</span>
      </th>
      <th>
        <span className="ml-2">Entreprise</span>
      </th>
      <th>
        <span className="ml-2">Encadrant</span>
      </th>
      <th>
        <span className="ml-2"></span>
      </th>
    </tr>
  </thead>
  <tbody>
  {etudiantfil.map((val, key) => {
        return (
          
              

              <tr className="border-bottom">
      <td>
        <div className="p-2 d-flex flex-row align-items-center mb-2">
          <img src={pngg} width="40" className="rounded-circle" />
          <div className="d-flex flex-column ml-2">
            <span className="d-block font-weight-bold">{val.nom_etudiant}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="p-2">
          <span className="font-weight-bold">{val.sujet}</span>
        </div>
      </td>
      <td>
        <div className="p-2">
          <span className="font-weight-bold">{val.nom_entreprise}</span>
        </div>
      </td>
      <td>
        <div className="p-2">
          <span className="font-weight-bold">{val.encadrant}</span>
        </div>
      </td>
      <td>
        <div className="p-2">
          <a className="btn btn-primary rounded-pill main-btn ps-3 pe-3" >
            Plus d'informations
          </a>
        </div>
      </td>
      
    </tr>





            
          
        );
      })}
    
    


          </tbody>
      </table>
      </div>
    </div>);
}
export default Responsable