import React,{ useEffect,useState } from "react" ;
import { useNavigate } from 'react-router-dom';
import data from "../../data/data.json";
import Navbar from "../../components/Navbar";
import offre from "../../assets/images/offre.jpg";


import "./Etudiant.css";
import Post from "./Post";

function Student(){
    const navigate = useNavigate();
    
    const convention =()=>{
      navigate('/convention');
    }


    

    return (
<div className="student">                  
    <div className="container-fluid gedf-wrapper">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <div className="h5">@LeeCross</div>
                        <div className="h7 text-muted">Fullname : Miracles Lee Cross</div>
                        <div className="h7">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
                            etc.
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="h6 text-muted">Followers</div>
                            <div className="h5">5.2342</div>
                        </li>
                        <li className="list-group-item">
                            <div className="h6 text-muted">Following</div>
                            <div className="h5">6758</div>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="col-md-6 gedf-main">
                {data.enterprise.map(enter => (
                            <div className="">
                        <Post key={enter.id} name={enter.name}  image={enter.image} content={enter.content} title={enter.title} />
                        </div>
                        ))}
                
             
            </div>
            <div className="col-md-3">
                <div className="card gedf-card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        {/* <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a> */}
                    </div>
                </div>
                <div className="card gedf-card">
                        <div className="card-body">
                            <p>Search by tags :</p>
                            <input type="text" placeholder="Search tags..."  />
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>


                        
     



      
    )
}

export default Student 