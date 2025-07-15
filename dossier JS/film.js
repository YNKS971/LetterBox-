constApiKey = "081a3d88a03ffe4241ed3bf62111904f"


fetch("../dossier JSON/cinema.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        document.getElementById("Watch").innerHTML += `

      <div class="col-13  text-white colonne-couleur card bg-secondary rounded border border-danger style="width:20rem;" " id="Watch">
                   <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/${data.results.poster_path}"
                   
                   
                   <p> Where to stream </p>
                    <p> Amazon </p>
                  <p> Find on Amazon </p>
                  <p>   Watch trailer </p>
                   <p> Share title </p>
                  <p>  Ignore </p>
                   <p> IMDb </p>
                   <p> Update history </p>
                   <p> Suggest an edit </p>


                </div>
                `

        document.getElementById("descriptionDuFilm").innerHTML += `
 <div class="col-7  col colonne-couleur text-white " id="descriptionDuFilm">
                   <h2 class="TITREFILM text-center ">${data.results.title} </h2>
                    <p class="sypno"> Sypnopsis </p>
                   

                    <p class="resume">${data.results.overview}  </p>
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