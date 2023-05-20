import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';



function Coordinator(){
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

    return <div>
        {username}</div>
}
export default Coordinator