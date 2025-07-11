constApiKey = "081a3d88a03ffe4241ed3bf62111904f"


fetch("../dossier JSON/cinema.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

      document.getElementById("Watch").innerHTML += `

      <div class="col-13  text-white colonne-couleur card bg-secondary rounded border border-danger style="width:20rem;" " id="Watch">
                   <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/${data.results[0].poster_path}"
                   
                   
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

                document.getElementById("descriptionDuFilm").innerHTML+=`
 <div class="col-7  col colonne-couleur text-white " id="descriptionDuFilm">
                   <p class="TITREFILM">${data.results[0].title} </p>
                    <p class="categorie">${data.results[0].release_date} </p>
                    <p class="resume">${data.results[0].overview}  </p>
                    <p class="acteurs">  </p>
                </div>
            </div>
        </div>

    `








    })