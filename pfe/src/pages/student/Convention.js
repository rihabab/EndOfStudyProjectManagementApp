import React,{ useEffect,useState } from "react" ;
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import { saveAs } from 'file-saver';
import "./convention.css";







function Convention(){
    const [state, setState]=useState({});



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
    const [coordinateur, setCoornidateur] = useState("");
    const [sujet, setSujet] = useState("");
    const [descriptif, setDescriptif] = useState("");
    
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
              username:username,
              userfil:userfil,
              entreprise: entreprise,
              entreprisead:entreprisead,
              entreprisrepresenter:entreprisrepresenter,
              entreprisRepresenterJob:entreprisRepresenterJob,
              pfedatedeb:pfedatedeb,
              pfedatedfin:pfedatedfin,
              encadrant: encadrant,
              encadrantjob: encadrantjob,
              encadranttel: encadranttel,
              encadrantemail: encadrantemail,
              coordinateur:coordinateur,
              sujet:sujet,
              descriptif:descriptif,
            }).then((response)=>{
              console.log(response);
            })
          }
      

          
          
          const createAndDownloadPdf = () => {
            Axios.post('http://localhost:3002/get-convention',{
              username:username,
            })
              .then((response)=>{
                setState(response.data.result)
                console.log(response.data.result);
              })
            
            
            Axios.post('http://localhost:3002/create-pdf', state)
              .then(() => Axios.get('http://localhost:3002/fetch-pdf', { responseType: 'blob' }))
              .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
          
                saveAs(pdfBlob, 'newPdf.pdf');
              })
          }

      
      return (
        <div>
            <Navbar nom={username} />
            <div className="convention">
              <form onSubmit={enregistrer}>
                <div>student name : {username}</div>
                <div>filiere : {userfil}</div>
                <div className="case">
                  <label>nom d'entreprise :</label>
                  <input type="text" name="entreprise_name" placeholder="entreprise" onChange={event => setEntreprise(event.target.value)}></input>
                </div>
                <div className="case">
                  <label>l'adresse de l'entreprise :</label>
                  <input type="text" name="entreprise_adresse" placeholder="entreprise adresse" onChange={event => setEntreprisead(event.target.value)}></input> 
                </div>
                <div className="case">
                  <label>le representant de l'entreprise :</label>
                  <input type="text" name="representant" placeholder="entreprise represeter" onChange={event => setEntrepriserepresenter(event.target.value)}></input>
                </div>
                <div className="case">
                  <label>le poste du respresentant :</label>
                  <input type="text" name="poste" placeholder="entreprise represeter poste" onChange={event => setEntrepriseRepresenterJob(event.target.value)}></input>
                </div>
                <div className="case">
                  <label>date debut et date fin du pfe:</label>
                  <div>
                    <input type="date" name="pfedatedeb" onChange={event => setpfedatedeb(event.target.value)}></input>
                    <input type="date" name="pfedatefin"  onChange={event => setpfedatefin(event.target.value)}></input>
                  </div>
                  </div>
                <div className="case">
                  <label>nom de l'encadrant externe:</label>
                  <input type="text" name="encadrant" placeholder="encadrant" onChange={event => setEncadrant(event.target.value)}></input>
                </div>
                <div className="case">
                  <label>poste de l'encadrant externe:</label>
                  <input type="text" name="encadrant_job" placeholder="encadrant_job" onChange={event => setEncadrantjob(event.target.value)}></input>
                </div>
                <div className="case">
                  <label>num tel de l'encadrant externe:</label>
                  <input type="text" name="encadrant_tel" placeholder="encadrant_tel" onChange={event => setEncadranttel(event.target.value)}></input>
                </div>
                <div className="case">
                  <label>l'email l'encadrant externe:</label>
                  <input type="text" name="encadrant_email" placeholder="encadrant_email" onChange={event => setEncadrantemail(event.target.value)}></input>
                </div>
                <div className="case">
                  <label>Coordinateur de la filiere :</label>
                  <select value={coordinateur} onChange={event => setCoornidateur(event.target.value)}>
                    <option value="">Select an option</option>
                    <option value="M.dahchour">M.dahchour</option>
                    <option value="M.dahchour">M.dahchour</option>
                    <option value="M.dahchour">M.dahchour</option>
                  </select>
              </div>
                <div className="case">
                  <label>sujet de pfe :</label>
                  <textarea type="text" name="sujet" placeholder="encadrant_email" onChange={event => setSujet(event.target.value)}></textarea>
                </div>
                <div className="case">
                  <label>Descriptif détaillé :</label>
                  <textarea type="text" name="Descriptif" placeholder="encadrant_email" onChange={event => setDescriptif(event.target.value)}></textarea>
                </div>
                
                <button type="submit">submit</button>
                <div className="case">
                  <button onClick={createAndDownloadPdf}>Download PDF</button>
                </div>
                <div>{entreprise} {entreprisead} {entreprisrepresenter} {entreprisRepresenterJob} {pfedatedeb} {pfedatedfin}</div>
                
              </form>
              
              
            </div>
            
        </div>
      )

}

export default Convention