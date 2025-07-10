// clé api

constApiKey = "081a3d88a03ffe4241ed3bf62111904f"


// fetch de base
fetch("../dossier JSON/cinema.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)


        //    boucle pour generer des films
        for (i=0; i<8; i++){

            // Le Inner HTML modifié
     
      document.getElementById("filmAleatoire").innerHTML += `
<div class="card bg-dark text-white m-2" style="width: 12rem;">
<img src="https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[i].poster_path}" class="card-img-top" />
<div class="card-body">
<h6 class="card-title">${data.results[i].title}</h6>
<p class="card-text">${data.results[i].release_date}</p>
</div>
</div>
`;

       document.getElementById("filmPerso").innerHTML += `
<div class="card bg-dark text-white m-2" style="width: 12rem;">
<img src="https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[i].poster_path}" class="card-img-top" />
<div class="card-body">
<p class="card-text">${data.results[i].vote_average}</p>
<p class="card-text">${data.results[i].vote_count}</p>
</div>
</div>
`;


        document.getElementById("listeSuivi").innerHTML += `
 
<div class="col-7 " id="listeSuivi">
                        <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/${data.results[i].poster_path}" alt="AfficheDuFilm">
                        


                    </div>
                `
            
        }
    })





// astuce clique sur ce que tu veux clic droit "copy path"
// mettre api key dans const tt l tps
// mettre la div changer les infos avec ${data. NOM DE CE QUE JE VISE}
// POUR ICONE  
