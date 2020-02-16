// question 3 

const gameUrl = "https://api.rawg.io/api/games/4200";

fetch(gameUrl)
     .then(function(response) {
         return response.json()
     })
     .then(function(json){
         console.log(json);
     })
     .catch(function(error){
         console.log(error);
     });

     function createGameDetails(json){
         console.dir(json);
     

const imageUrl = document.querySelector(".image");
imageUrl.style.backgroundImage = `url("$(json.background_image)")`;
imageUrl.src = jason.image;
imageUrl.alt = json.name;

const name = document.querySelector("h1");
name.innerHTML = json.name;

const description = document.querySelector(".description");
description.innerHTML = json.description;
}
