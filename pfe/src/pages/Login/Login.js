
import React,{ useContext, useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import desk1 from '../../assets/images/desk1.jpg';
import LogContext from "../../contexts/LogContext";


function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {loggedIn, setLoggedIn } = useContext(LogContext);
    

    

    const [loginStatus, setLoginStatus] = useState("");


    const navigate = useNavigate();
    

    Axios.defaults.withCredentials= true;

    const register=() => {
      navigate('/registration')
    }


    const login = () => {
      Axios.post("http://localhost:3002/login",{
        email: email,
        pass: pass,
      }).then((response) => {
        if (!response.data.auth) {
          setLoginStatus(false);
          
        } else {
          
          setLoggedIn(true);
         
         localStorage.setItem("token" , response.data.token)      
          console.log(response.data.token)
          console.log("loggedin")
          switch (response.data.result.type){
            case "admin":
              navigate('/admin');
              break;
            case "etudiant" :
              navigate('/student');
              break;
            case "coordinateur":
              navigate('/coordinator');
              break;
            case "responsable" :
              navigate('/responsable');
              break;
          }
          
          
          
        }
      });
    };
    
   
    useEffect(()=>{
      Axios.get("http://localhost:3002/isUserAuth" , {
        headers : {
          "x-access-token":localStorage.getItem("token")
        }}).then((response)=>{
          if(response.data.auth){
            switch (response.data.type){
              case "admin":
                navigate('/admin');
                break;
              case "etudiant" :
                navigate('/student');
                break;
              case "coordinateur":
                navigate('/coordinator');
                break;
              case "responsable" :
                navigate('/responsable');
                break;
            }
          }else{
            console.log('err');
          }
        })
    },[])
    
    

    return (
      <div>
        
        <div className="Login">
          <div className=" mt-5 mb-5 position-relative">
            <img className="mb-4" src={desk1} alt="" />
            <h2>Login and start your career</h2>
            <p className="text-black-50 text-uppercase">
              Certaines de ces fonctionalités ci-dessous
            </p>
          </div>
        <div className="logincontainer">
          <div className="loginform">
            <div className="formatdiv">
              <label>Email :</label>
                <input 
                type="email" 
                placeholder="email..."
                onChange={(event) => {
                  setEmail(event.target.value);
                  console.log(email);
                  console.log("in input");
                }}/>
            </div>
            <div className="formatdiv">
              <label>Password :</label>
                <input 
                type="password" 
                placeholder="Password..."
                onChange={(event) => {
                  setPass(event.target.value);
                  console.log(pass);
                }}
                />
            </div>
              
              <button className="btn btn-primary rounded-pill main-btn" onClick={login}>Log in</button>
              <p>don't have an account? <a onClick={register}>Sign up</a></p>
              
          </div>
        </div> 
        
        
      </div>

      </div>
      
    );
  

}

export default Login 