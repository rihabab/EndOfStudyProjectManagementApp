import ReactDOM from 'react-dom'
import { useState } from "react" ;
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from '../pages/student/Student' ;



function Login() {
    const [account, setAccount] = useState('');
    const [pass, setPass] = useState(0);
    
    const [connection, setConnection] = useState("false");
    const [component, setComponent] = useState('');
  
    const getworker = () => {
      Axios.post("http://localhost:3001/worker",{
        account: account,
        pass: pass,
      }).then((response) => {
        
        console.log(response.data.length);
        
        console.log(account + "App");
        if (response.data.length ===0) {
          console.log("no connection");
        }
        else {
          setConnection("true");
          //setComponent(<Employee />);
          console.log("connected");
          console.log("import page from database");
          /*ReactDOM.render(
            <Student />,
            document.getElementById('root')
          );*/
        }
      })
    };
  
    return (
      <div className="App">
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
          <button onClick={getworker}>Log in</button>
          <div>{component}</div>
          
        </div>
      </div>
    );
  

}

export default Login 