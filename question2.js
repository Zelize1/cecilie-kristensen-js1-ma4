// question 2

const gamesUrl = "https://api.rawg.io/api/games";

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
    })
    .catch(function(error) {
        console.log(error);
    });

    function handleJson(json) {
        console.dir(json);
    }

    function handleJson(json) {

        const results = json.results;
        console.dir(results);

        const resultsContainer = document.querySelector(".game");

        let html ="";
    
        results.forEach(function(result) {
            let imageUrl = "https://via.placeholder.com/250";

        if (result.image) {
            imageUrl = result.image;
        }

            html += `<div class="game">
            <h2>Name of game</h2>
            <img src="/path/to/image" alt="Name of game">
        </div>`;
        });

        resultsContainer.innerHTML = html;

    }

    fetch(gamesUrl)
    .then(response => {return response.json()
    .then(json => handleJson(json))
    .catch(error => console.log(error));
    })
