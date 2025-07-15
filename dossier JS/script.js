// clé api


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


// fetch de b

fetch(`https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1`, options)
    .then(response => response.json())
    .then(data => {
        console.log(data)




 function chercherFilm (){
          
        }
        





        //    boucle pour generer des films (filmPerso)
        for (i = 0; i < 10; i++) {


            // Le Inner HTML modifié

            document.getElementById("filmAleatoire").innerHTML += `
<div class="card bg-dark rounded text-white  m-2" style="width: 12rem;">
<a href="film.html?id=${data.results[i].id}">  <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[i].poster_path}" class="card-img-top" />                              </a>

<div class="card-body">
<h6 class="card-title">${data.results[i].title}</h6>
<p class="card-text">${data.results[i].release_date}</p>
</div>
</div>
`
 }

//  boucle pour FilmPerso: 
for (pers=13; pers >7; pers--){ 




            document.getElementById("filmPerso").innerHTML += `
<div class="card bg-dark text-white m-1" style="width: 12rem;">
<a href="film.html?id=">
<img src="https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[pers].poster_path}" class="card-img-top" /> </a>
<div class="card-body">
<p class="card-text">${data.results [pers].vote_average} </p>


</div>
</div>
`
}

for (fin=19; fin>9; fin--){ 


            document.getElementById("listeSuivi").innerHTML += `
<div class="card bg-dark text-white m-1  " style="width: 12.3rem;  ">
<a href="film.html?id=">
<img src="https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[fin].poster_path}" class="card-img-top" /> </a>


</div>
</div>

`
}

       
    })














