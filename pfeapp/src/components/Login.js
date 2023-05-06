import ReactDOM from 'react-dom'
import { useState } from "react" ;
import Axios from "axios";




function Login() {
    const [account, setAccount] = useState('');
    const [pass, setPass] = useState('');
    
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    
    const register = () => {
      Axios.post("http://localhost:3002/register", {
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
    };


    const login = () => {
      Axios.post("http://localhost:3002/login",{
        account: account,
        pass: pass,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          console.log("login if");
        } else {
          setLoginStatus(response.data[0].account);
          console.log(loginStatus);
        }
      });
    };
  
    return (
      <div className="App">
        <div className="registration">
          <h1>Registration</h1>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button onClick={register}> Register </button>
        </div>
        <div className="admin">
          <label>Administrator Account :</label>
          <input 
          type="text" 
          onChange={(event) => {
            setAccount(event.target.value);
            console.log(account);
            console.log("in input");
          }}/>
          <label>PassWord :</label>
          <input 
          type="text" 
          onChange={(event) => {
            setPass(event.target.value);
            console.log(pass);
          }}
          />
          <button onClick={login}>Log in</button>
          <div>{loginStatus}</div>
          
        </div>
      </div>
    );
  

}

export default Login 