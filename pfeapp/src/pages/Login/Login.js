
import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import desk1 from '../../assets/images/desk1.jpg';


function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const [useremailReg, setUseremailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [usertypeReg, setUsertypeReg] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);

    const [propsuser, setPropsuser] = useState([]);

    const [loginStatus, setLoginStatus] = useState("");


    const navigate = useNavigate();
    

Axios.defaults.withCredentials= true;

    const register = () => {
      Axios.post("http://localhost:3002/register", {
        useremail: useremailReg,
        password: passwordReg,
        type: usertypeReg,
      }).then((response) => {
        console.log(response);
      });
    };


    const login = () => {
      Axios.post("http://localhost:3002/login",{
        email: email,
        pass: pass,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          console.log("login if");
        } else {
          console.log(response.data[0].type);
          setPropsuser(response.data[0].type);
          setLoggedIn(true);
          /*
          if(propsuser==="etudiant"){
            navigate('/student')
          }
          */
          
          switch (propsuser){
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
      Axios.get("http://localhost:3002/login").then((response) => {
        console.log(response);
        console.log('got it');
      })
    },[])

    
    /*
    <div className="registration">
          <h1>Registration</h1>
          <label>email</label>
          <input
            type="text"
            onChange={(e) => {
              setUseremailReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <label>type</label>
          <select value={usertypeReg} onChange={(e) => {
              setUsertypeReg(e.target.value);
            }}>
            <option value="etudiant">etudiant</option>
            <option value="admin">admin</option>
            <option value="coordinateur">coordinateur</option>
            <option value="responsable">responsable</option>
          </select>
          <button onClick={register}> Register </button>
        </div>
      */
    

    return (
      <div>
        <Navbar />
        <div className="Login">
        <div className="main-title mt-5 mb-5 position-relative">
          <img className="mb-4" src={desk1} alt="" />
          <h2>Login and start your career</h2>
          <p className="text-black-50 text-uppercase">
            Certaines de ces fonctionalités ci-dessous
          </p>
        </div>
        <div className="logincontainer">
          <div className="loginform">
              <label>Account :</label>
              <input 
              type="text" 
              placeholder="email..."
              onChange={(event) => {
                setEmail(event.target.value);
                console.log(email);
                console.log("in input");
              }}/>
              <label>PassWord :</label>
              <input 
              type="text" 
              placeholder="Password..."
              onChange={(event) => {
                setPass(event.target.value);
                console.log(pass);
              }}
              />
              <button className="btn btn-primary rounded-pill main-btn" onClick={login}>Log in</button>
              
              
          </div>
        </div> 
        
      </div>

      </div>
      
    );
  

}

export default Login 