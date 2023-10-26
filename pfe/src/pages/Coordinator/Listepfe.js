import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";


function Listepfe(){

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

              Axios.post('http://localhost:3002/coordinateur',{
                userfil:userfil,
                })
                .then((response)=>{
                setEtudiantFil(response.data)
                
                });  

              
              /*
              navigate('/student')
              */
            }else{
                navigate('/login')
              
            }
          })
      },[])
      


      
    return(
        <div><Navbar nom={username} />
        
        
        
        
        
        
        
        
        
        </div>
        
    )
}

export default Listepfe