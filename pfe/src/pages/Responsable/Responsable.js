import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import desk1 from '../../assets/images/desk1.jpg';
import pngg from '../../assets/images/pngaaa.com-1721267.png';

function Responsable(){
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

      return (
        <div>
            <Navbar nom={username} />
            <div style={{fontSize:'100px'}}></div>
            <div className="features text-center pt-5 pb-5">
          <div className="container">
              <div className="titl mt-5 mb-5 position-relative">
                  <img className="mb-4" src={desk1} alt="" />
                  <h2>L'espace du Coordinateur</h2>
                  <p className="text-black-100 text-uppercase">INPT Entreprises </p>
              </div>
  
          </div>
      </div>
  
      <div className="articles" id="articles">
          <h2 className="main-title">List des PFEs</h2>
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
        <tr className="border-bottom">
          <td>
            <div className="p-2 d-flex flex-row align-items-center mb-2">
              <img src={pngg} width="40" className="rounded-circle" />
              <div className="d-flex flex-column ml-2">
                <span className="d-block font-weight-bold">Ait Bahssou Rihab</span>
              </div>
            </div>
          </td>
          <td>
            <div className="p-2">
              <span className="font-weight-bold">XXXXXXXXXX</span>
            </div>
          </td>
          <td>
            <div className="p-2">
              <span className="font-weight-bold">Orange</span>
            </div>
          </td>
          <td>
            <div className="p-2">
              <span className="font-weight-bold">Moustafa bentalb</span>
            </div>
          </td>
          <td>
            <div className="p-2">
              <a className="btn btn-primary rounded-pill main-btn ps-3 pe-3" href="#">
                Plus d'informations
              </a>
            </div>
          </td>
        </tr>
  
        <tr className="border-bottom">
          <td>
            <div className="p-2 d-flex flex-row align-items-center mb-2">
              <img src={pngg} width="40" className="rounded-circle" />
              <div className="d-flex flex-column ml-2">
                <span className="d-block font-weight-bold">Boutou Chaima</span>
              </div>
            </div>
          </td>
          <td>
            <div className="p-2">
              <span className="font-weight-bold">XXXXXXXXXX</span>
            </div>
          </td>
          <td>
            <div className="p-2">
              <span className="font-weight-bold">Orange</span>
            </div>
          </td>
          <td>
            <div className="p-2">
              <span className="font-weight-bold">Moustafa bentalb</span>
            </div>
          </td>
          <td>
            <div className="p-2">
              <a className="btn btn-primary rounded-pill main-btn ps-3 pe-3" href="#">
                Plus d'informations
              </a>
            </div>
          </td>
        </tr>
  
        <tr className="border-bottom">
    <td>
      <div className="p-2 d-flex flex-row align-items-center mb-2">
        <img src={pngg} width="40" className="rounded-circle" />
        <div className="d-flex flex-column ml-2">
          <span className="d-block font-weight-bold">Ait taleb Rahae</span>
        </div>
      </div>
    </td>
    <td>
      <div className="p-2">
        <span className="font-weight-bold">XXXXXXXXXX</span>
      </div>
    </td>
    <td>
      <div className="p-2">
        <span className="font-weight-bold">Orange</span>
      </div>
    </td>
    <td>
      <div className="p-2">
        <span className="font-weight-bold">Moustafa bentalb</span>
      </div>
    </td>
    <td>
      <div className="p-2">
        <a className="btn btn-primary rounded-pill main-btn ps-3 pe-3" href="#">
          Plus d'informations
        </a>
      </div>
    </td>
  </tr>
  
  
              </tbody>
          </table>
  
  
      </div>
  
  
  
        </div>);
}
export default Responsable