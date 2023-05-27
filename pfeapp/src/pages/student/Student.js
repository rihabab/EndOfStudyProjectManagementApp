import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import offre from "../../assets/images/offre.jpg";
import orange from "../../assets/images/orange-logo.jpg";
import afd from "../../assets/images/afd_tech_logo.png";
import down1 from "../../assets/images/download (1).png";
import telecom from "../../assets/images/maroc-telecom-bleu-fr-grande.jpg";
import webhelp from "../../assets/images/WebHelp_Logo.png";
import down2 from "../../assets/images/download (2).png";

import "./Etudiant.css";

function Student(){
    const navigate = useNavigate();
    const [username , setUsername] = useState("");

    const convontion =()=>{
      navigate('/convention');
  }
    useEffect(()=>{
        Axios.get("http://localhost:3002/isUserAuth" , {
          headers : {
            "x-access-token":localStorage.getItem("token")
          }}).then((response)=>{
            if(response.data.auth){
              console.log(response.data.result);
              console.log(response.data.type);
              console.log('hello');
              setUsername(response.data.result.nom+" "+response.data.result.prenom)
              /*
              navigate('/student')
              */
            }else{
                navigate('/login')
              
            }
          })
      },[])

      const cardData = [
        { lines: ["Tel :+212 xxxx", "Adress: avenu xxxxx", "Gmail:xx@fdf.com"] },
        { lines: ["Tel :+212 xxxx", "Adress: avenu xxxxx", "Gmail:xx@fdf.com"] },
        { lines: ["Tel :+212 xxxx", "Adress: avenu xxxxx", "Gmail:xx@fdf.com"] },
        { lines: ["Tel :+212 xxxx", "Adress: avenu xxxxx", "Gmail:xx@fdf.com"] },
        { lines: ["Tel :+212 xxxx", "Adress: avenu xxxxx", "Gmail:xx@fdf.com"] },
        { lines: ["Tel :+212 xxxx", "Adress: avenu xxxxx", "Gmail:xx@fdf.com"] }

        // Add more card data objects as needed
    ];

    

    return (
      <div>
          
          <Navbar nom={username} convention={<a class="btn btn-primary rounded-pill main-btn ps-3 pe-3" href="#" onClick={convontion}>Convention</a>}/>
          <div class="blog pt-5 pb-5">
            <div class="container">
                <div class="main-title text-center mt-5 mb-5 position-relative">
                    <img class="mb-2" src={offre} alt="" />

                </div>
                <div class="row cardContainer">
                    <div class="col-md-6 col-lg-4 pb-3">
                        <div class="card" data-work="">
                            <img src={orange} height="150" class="card-img-top" alt="Blog Post" />
                            <div class="card-body">
                                <span class="text-black-50">Jan 17, 2022</span>
                                <h5 class="card-title">Some Awesome Blog Title Here</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 pb-3">
                    <div class="card" data-work="">
                        <img src={afd} height="150" class="card-img-top" alt="Blog Post" />
                        <div class="card-body">
                            <span class="text-black-50">Jan 17, 2022</span>
                            <h5 class="card-title">Some Awesome Blog Title Here</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pb-3">
                    <div class="card" data-work="">
                        <img src={down1} height="150" class="card-img-top" alt="Blog Post" />
                        <div class="card-body">
                            <span class="text-black-50">Jan 17, 2022</span>
                            <h5 class="card-title">Some Awesome Blog Title Here</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pb-3">
                    <div class="card" data-work="">
                        <img src={telecom} height="150" class="card-img-top"
                            alt="Blog Post" />
                        <div class="card-body">
                            <span class="text-black-50">Jan 17, 2022</span>
                            <h5 class="card-title">Some Awesome Blog Title Here</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pb-3">
                    <div class="card" data-work="">
                        <img src={webhelp} height="150" class="card-img-top" alt="Blog Post" />
                        <div class="card-body">
                            <span class="text-black-50">Jan 17, 2022</span>
                            <h5 class="card-title">Some Awesome Blog Title Here</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 pb-3">
                    <div class="card" data-work="">
                        <img src={down2} height="150" class="card-img-top" alt="Blog Post" />
                        <div class="card-body">
                            <span class="text-black-50">Jan 17, 2022</span>
                            <h5 class="card-title">Some Awesome Blog Title Here</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
    </div>
    



      
    )
}

export default Student 