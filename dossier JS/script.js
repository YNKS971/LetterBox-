// clé api

constApiKey = "081a3d88a03ffe4241ed3bf62111904f"


// fetch de base
fetch("../dossier JSON/cinema.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)


        //    boucle pour generer des films
        for (i=0; i<7; i++){

            // Le Inner HTML modifié
        document.getElementById("filmAleatoire").innerHTML += `
      <div class="col-7  col colonne-couleur " id="filmAleatoire"> 
      <p>${data.results[i].title}</p>
                      <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/${data.results[i].poster_path}" alt="Affiche du film">
                       
                      <p class="dateSortie"> ${data.results[i].release_date}</p>
                      <p class ="voteCount> ${data.results[i].vote_count}"</p>
                </div>
      `

        document.getElementById("filmPerso").innerHTML += `
   <div class="col-5 fs-2 " id="filmPerso">
                    <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/${data.results[i].poster_path}" alt="Affiche du film">
                    <p> ${data.results[i].vote_average}</p>
                    <p> ${data.results[i].vote_count}</p>     
                                `


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
