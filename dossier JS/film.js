const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODFhM2Q4OGEwM2ZmZTQyNDFlZDNiZjYyMTExOTA0ZiIsIm5iZiI6MTc1MjA4MzM4OS42Nywic3ViIjoiNjg2ZWFiYmRhMzhlNmM5MGU5ZWQ2YThhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wsFRIMwEEaqw3dq-Hjx1JfvBXOa8JRmQvSls_vB5gys'
  }
};


const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');
console.log(id)


fetch( `https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, options)
    .then(response => response.json())
    .then(data => {
      



    // faire une fonction on click sur le bouton "search" 
    // diriger sur recherche.html
    // stocker ce que l'utilisateur met 
    // chercher par le biais de l'API si le "string" de l'utilisateur est proche d'un film 
    


    function utilisateurFilm(){
        
    }



        function chercherFilm (){

// let text= input_text.value;
// addEventListener("input", (event) => { })

// oninput = (event) => { }



        }
        

        document.getElementById("Watch").innerHTML += `

      <div class="col-13  text-white colonne-couleur card bg-secondary roundedstyle="width:20rem;" " id="Watch">
                   <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}"
                   
                   
                   <p> Where to stream </p>
                    <p> Amazon </p>
                  <p> Find on Amazon </p>
                


                </div>
                `

        document.getElementById("descriptionDuFilm").innerHTML += `
 <div class="col-7  col colonne-couleur text-white " id="descriptionDuFilm">
                   <h2 class="TITREFILM text-center ">${data.title} </h2>
                    <p class="sypno"> Sypnopsis </p>
                   

                    <p class="resume">${data.overview}  </p>
                    <p class="acteurs">  </p>

                    <p class="seance"> Seance </p> 
                    <p class="searchSeance"> Chercher une séance </p>

                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Rechercher votre séance"
                        aria-label="Search" />
                    <button class="btn btn-outline-success " type="submit">Rechercher</button>


                    
                </div>

<div class="container ">
  <div class="row align-items-center">
    <div class="col m-5 ">
     <li> Paris </li>
<li> Lyon </li>
<li> Marseille </li>
<li> Nice </li> 
<li> Paris 6e arrondissement </li> 
<li> Paris 19e arrondissement </li>
 <li> Brest </li>

    </div>
    <div class="col">
  <li> Bordeaux </li>
<li> Tours </li>
<li> Nimes </li>
<li> Clermont </li> 
<li> Dijon </li> 
<li> La Ciotat </li>
 <li> Paris 12e arrondissement </li>
    </div>
    <div class="col">
           <li> Montpellier </li>
<li> Nancy </li>
<li> Dunkerque </li>
<li> Pau </li> 
<li> Le Mans </li> 
<li> Lyon 2e arrondissement </li>
 <li> Angers </li>


    </div>

    <button type="button" class="btn btn-warning">Voir toutes les séances (9899) </button>
  </div>
</div>

            </div>
        </div>

    `










    })



