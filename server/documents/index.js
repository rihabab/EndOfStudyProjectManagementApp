module.exports = ({ nom_etudiant, filiere, nom_entreprise, adresse_entreprise, represanter_entreprise, representer_poste, pfedatedeb, pfedatefin, encadrant, poste_encadrant, tel_encadrant, email_encadrant, coordinateur, sujet, descriptif }) => {
    const today = new Date();
return `
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
            body{
                font-weight: 100;
                font-size:20px;
            }
            h1{
                margin-left:230px;
            }
            pr{
                margin-left:50px;
            }
      </style>
   </head>
   <body>
        <div class="convention">
        <h1>-=- CONVENTION DE STAGE -=-
        </h1>
    <h1>PROJET DE FIN D’ETUDES</h1>
<b><pr>ARTICLE PREMIER </pr><b><br>
<pr>    La présente convention règle les rapports de : ${nom_entreprise} , ${adresse_entreprise}</pr>
<br>
<pr>    ci-après désignée par Entreprise, et représentée par : ${represanter_entreprise} , ${representer_poste}</pr>
<br>
<pr>    avec L’Institut National des Postes et Télécommunications (INPT) représenté par Monsieur <b>Hilali Abdelaziz, Directeur Adjoint des Stages et Relations
    avec les Entreprises,</b>
    </pr><br>
<pr>    Concernant le stage de Fin d’études de ${nom_entreprise}, élève ingénieur de la filière :${filiere} Pour la période du ${pfedatedeb} au ${pfedatefin}, sous la responsabilité de :</pr><br>
<br>
<pr>             - Encadrant Externe : ${encadrant} , ${representer_poste}, ${tel_encadrant}, ${email_encadrant}.</pr><br>
<pr>             et</pr><br>
<pr>             - Coordonnateur de la filière : ${coordinateur}</pr><br>

<pr>    Le stage portera sur le sujet suivant: ${sujet}</pr>
<pr>    Descriptif détaillé : ${descriptif}</pr><br>
<br>

<b><pr>ARTICLE SECOND : </pr></b><br>
<pr>    La présente convention garantit que le règlement des stages inscrit au verso a été porté à la connaissance de l’entreprise et de l’élève et que ceux-ci en
ont approuvé expressément toutes les clauses.
</pr><br>

<b><pr>Document établi en quatre exemplaires
</pr></b><br>




        
        </div>
   </body>
</html>

`;
};