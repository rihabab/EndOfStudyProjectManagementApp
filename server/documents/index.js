module.exports = ({ nom_etudiant, filiere, nom_entreprise, adresse_entreprise, represanter_entreprise, representer_poste, pfedatedeb, pfedatefin, encadrant, poste_encadrant, tel_encadrant, email_encadrant, coordinateur, sujet, descriptif }) => {
    const today = new Date();
return `
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
            .convention{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 80vh;
            }
            form{
                display:grid;
                grid-template-columns: auto auto auto auto;
                column-gap: 30px;
                row-gap:20px;
                width:60%;
            }
            .case{
                display: flex;
                flex-direction: column;
            }
      </style>
   </head>
   <body>
        <div class="convention">
        <h1>-=- CONVENTION DE STAGE -=-
        </h1>
    <h1>PROJET DE FIN D’ETUDES</h1>
<b>ARTICLE PREMIER </b>
<p>La présente convention règle les rapports de : ${nom_entreprise} , ${adresse_entreprise}</p>
<p>ci-après désignée par Entreprise, et représentée par : ${represanter_entreprise} , ${representer_poste}</p>
<p>avec L’Institut National des Postes et Télécommunications (INPT) représenté par Monsieur <b>Hilali Abdelaziz, Directeur Adjoint des Stages et Relations
    avec les Entreprises,</b>
    </p>
<p>Concernant le stage de Fin d’études de ${nom_entreprise}, élève ingénieur de la filière :${filiere} Pour la période du ${pfedatedeb} au ${pfedatefin}, sous la responsabilité de :</p>

        
        </div>
   </body>
</html>

`;
};