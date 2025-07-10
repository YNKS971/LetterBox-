constApiKey = "081a3d88a03ffe4241ed3bf62111904f"


fetch("../dossier JSON/cinema.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

      document.getElementById("Watch").innerHTML += `

      <div class="col-5  text-white colonne-couleur  " id="Watch">
                    <img src="" alt="Affiche du film"> Lorem ipsum dolor sit amet cA, eius?
                    Where to stream
                    Amazon
                    Find on Amazon
                    Watch trailer
                    Share title
                    Ignore
                    IMDb
                    Update history
                    Suggest an edit


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