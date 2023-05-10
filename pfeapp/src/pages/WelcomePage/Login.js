
import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';



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
          
          
          if (propsuser) {
            navigate('/admin');
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



    return (
      <div className="App">
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
        <div className="admin">
          <label>Administrator Account :</label>
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
          <button onClick={login}>Log in</button>
          
          
        </div>
      </div>
    );
  

}

export default Login 