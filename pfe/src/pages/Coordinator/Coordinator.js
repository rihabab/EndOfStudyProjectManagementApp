import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import desk1 from '../../assets/images/desk1.jpg';
import pngg from '../../assets/images/pngaaa.com-1721267.png';

import './Coordinateur.css';




function Coordinator(){
    let state=['hello'];
    const navigate = useNavigate();
    const [username , setUsername] = useState("");
    const [userfil , setUserfil] = useState("");
    const [etudiantfil , setEtudiantFil] = useState([]);
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
              setUserfil(response.data.result.filiere)
              /*
              navigate('/student')
              */
            }else{
                navigate('/login')
              
            }
          })
      },[])
      const generatecont=(state)=>{
        Axios.post('http://localhost:3002/coordinateur',{
                userfil:userfil,
                })
                .then((response)=>{
                setEtudiantFil(response.data)
                
                });
      }
    /*
    

    
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

*/
    return (
      <div>
          <Navbar nom={username} />
          
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
            <div className="reservation">
              <div>
                

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
            <span className="font-weight-bold">{val.entreprise}</span>
          </div>
        </td>
        <td>
          <div className="p-2">
            <span className="font-weight-bold">{val.encadrant}</span>
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





              </div>
            </div>
          );
        })}
      
      


            </tbody>
        </table>
        </div>
      </div>);
}
export default Coordinator