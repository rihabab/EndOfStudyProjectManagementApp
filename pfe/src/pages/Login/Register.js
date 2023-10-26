import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import desk1 from '../../assets/images/desk1.jpg';


function Register() {
    
    
    const [useremailReg, setUseremailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [usertypeReg, setUsertypeReg] = useState("");

    const [propsuser, setPropsuser] = useState([]);
    const [passsecond, setPassSecond] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    
    Axios.defaults.withCredentials= true;
    const login = () => {
      navigate('/login')
    }
    const register = () => {
      Axios.post("http://localhost:3002/register", {
        useremail: useremailReg,
        password: passwordReg,
        type: usertypeReg,
      }).then((response) => {
        console.log(usertypeReg);
        setPropsuser(response.data.message);
      });
      navigate('/login');
    };


    // useEffect(()=>{
    //   Axios.get("http://localhost:3002/login").then((response) => {
    //     console.log(response);
    //     console.log('got it');
    //   })
    // },[])

    useEffect(()=>{
      Axios.get("http://localhost:3002/isUserAuth" , {
        headers : {
          "x-access-token":localStorage.getItem("token")
        }}).then((response)=>{
          if(response.data.auth){
            console.log(response.data.type);
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
        <Navbar />
        
        <div className="register">
        
        <div className="logincontainer">
            <div className="loginform">
            <h1>Registration</h1>
            {propsuser &&<div className="text-danger">{propsuser}</div>}
            <div className="formatdiv">
              <label>email</label>
              <input
                  type="email"
                  onChange={(e) => {
                  setUseremailReg(e.target.value);
                  }}
              />
            </div>
            <div className="formatdiv">
              <label>Password</label>
              <input
                  type="password"
                  onChange={(e) => {
                  setPasswordReg(e.target.value);
                  }}
              />
            </div>
            <div className="formatdiv">
              <label>Confirm Password</label>
              <input
                  type="password"
                  onChange={(e) => {
                  setPassSecond(e.target.value);
                  const currentVal = e.target.value;
                  if (passwordReg === currentVal) {
                    setMessage('');
                  } else {
                    setMessage('Passwords Do Not Match');
                  }
                  
                  }}
              /><br/>
              {message && <p className="text-danger ">{message}</p>}
              
            </div>
            <div className="formatdiv">
              <label>type</label>
              <select className="custom-select" value={usertypeReg} onChange={(e) => {
                  setUsertypeReg(e.target.value);
                  }}>
                  <option value="" disabled>Select a user type</option>
                  <option value="etudiant">etudiant</option>
                  <option value="admin">admin</option>
                  <option value="coordinateur">coordinateur</option>
                  <option value="responsable">responsable</option>
              </select>
            
            </div>
            
            <button className="btn btn-primary rounded-pill main-btn" onClick={register}> Register </button>
            <div className="mt-8">
                            <p>
                                Already have an account?
                                <a onClick={login} className="text-laravel"
                                    >Login</a
                                >
                            </p>
                        </div>
            </div>

        </div>
        </div>

        
        
        </div>
    );
  

}

export default Register 