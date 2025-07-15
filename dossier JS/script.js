// clé api

constApiKey = "081a3d88a03ffe4241ed3bf62111904f"


// fetch de base
fetch("../dossier JSON/cinema.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)


        //    boucle pour generer des films (filmPerso)
        for (i = 0; i < 8; i++) {


            // Le Inner HTML modifié

            document.getElementById("filmAleatoire").innerHTML += `
<div class="card bg-dark rounded text-white  m-2" style="width: 12rem;">
<a href="film.html? id=${data.results[i].id}">  <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[i].poster_path}" class="card-img-top" />                              </a>

<div class="card-body">
<h6 class="card-title">${data.results[i].title}</h6>
<p class="card-text">${data.results[i].release_date}</p>
</div>
</div>
`
 }

//  boucle pour FilmPerso: 
for (pers=13; pers >9; pers--){ 




            document.getElementById("filmPerso").innerHTML += `
<div class="card bg-dark text-white m-1" style="width: 12rem;">
<a href="film.html? id=">
<img src="https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[pers].poster_path}" class="card-img-top" /> </a>
<div class="card-body">
<p class="card-text">${data.results [pers].vote_average} </p>


</div>
</div>
`
}

for (fin=19; fin>11; fin--){ 


            document.getElementById("listeSuivi").innerHTML += `
<div class="card bg-dark text-white m-1  " style="width: 12.3rem;  ">
<a href="film.html? id=">
<img src="https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[fin].poster_path}" class="card-img-top" /> </a>


</div>
</div>

`
}

       
    })














