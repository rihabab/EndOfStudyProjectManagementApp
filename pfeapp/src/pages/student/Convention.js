import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";



function Convention(){
    const navigate = useNavigate();
    const [username , setUsername] = useState("");
    const [userfil, setUserfil] = useState("");
    const [entreprise, setEntreprise] = useState("");
    const [entreprisead, setEntreprisead] = useState("");
    const [entreprisrepresenter, setEntrepriserepresenter] = useState("");
    const [entreprisRepresenterJob, setEntrepriseRepresenterJob] = useState("");
    const [pfedatedeb, setpfedatedeb] = useState('');
    const [pfedatedfin, setpfedatefin] = useState('');
    const [encadrant, setEncadrant] = useState("");
    const [encadrantjob, setEncadrantjob] = useState("");
    const [encadranttel, setEncadranttel] = useState("");
    const [encadrantemail, setEncadrantemail] = useState("");
    
    useEffect(()=>{
        Axios.get("http://localhost:3002/isUserAuth" , {
          headers : {
            "x-access-token":localStorage.getItem("token")
          }}).then((response)=>{
            if(response.data.auth){
              console.log(response.data.result);
              console.log(response.data.type);
              console.log('hello');
              setUsername(response.data.result.nom +" " + response.data.result.prenom)
              setUserfil(response.data.result.filiere)
              
            }else{
                navigate('/login')
              
            }
          })
      },[])
      

          const enregistrer =()=>{
            Axios.post("http://localhost:3002/convention" , {
              entreprise: entreprise,
              entreprisead:entreprisead,
              entreprisrepresenter:entreprisrepresenter,
              entreprisRepresenterJob:entreprisRepresenterJob,
            }).then((response)=>{
              console.log(response);
            })
            Axios.post("http://localhost:3002/encadrant" , {
              encadrant: encadrant,
              encadrantjob: encadrantjob,
              encadranttel: encadranttel,
              encadrantemail: encadrantemail,
              
            }).then((response)=>{
              console.log(response);
            })




          }

      
      return (
        <div>
            <Navbar nom={username} />
            <div>
              <form onSubmit={enregistrer}>
                <div>student name : {username}</div>
                <div>filiere : {userfil}</div>
                <input type="text" name="entreprise_name" placeholder="entreprise" onChange={event => setEntreprise(event.target.value)}></input>
                <input type="text" name="entreprise_adresse" placeholder="entreprise adresse" onChange={event => setEntreprisead(event.target.value)}></input> 
                <input type="text" name="entreprise_representer" placeholder="entreprise represeter" onChange={event => setEntrepriserepresenter(event.target.value)}></input>
                <input type="text" name="entreprise_representer_job" placeholder="entreprise represeter poste" onChange={event => setEntrepriseRepresenterJob(event.target.value)}></input>
                <input type="date" name="pfedatedeb" onChange={event => setpfedatedeb(event.target.value)}></input>
                <input type="date" name="pfedatefin"  onChange={event => setpfedatefin(event.target.value)}></input>
                <input type="text" name="encadrant" placeholder="encadrant" onChange={event => setEncadrant(event.target.value)}></input>
                <input type="text" name="encadrant_job" placeholder="encadrant_job" onChange={event => setEncadrantjob(event.target.value)}></input>
                <input type="text" name="encadrant_tel" placeholder="encadrant_tel" onChange={event => setEncadranttel(event.target.value)}></input>
                <input type="text" name="encadrant_email" placeholder="encadrant_email" onChange={event => setEncadrantemail(event.target.value)}></input>
                <button type="submit">submit</button>
                <div>{entreprise} {entreprisead} {entreprisrepresenter} {entreprisRepresenterJob} {pfedatedeb} {pfedatedfin}</div>
              </form>
            </div>
        </div>
      )

}

export default Convention