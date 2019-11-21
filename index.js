const url = `https://api.chucknorris.io/jokes/random`;
var chuckJoke = document.querySelector("#chuck-norris");

function fetchChuckNorris() {
        axios.get(url)
          .then(function(response) {
            chuckJoke.innerHTML = response.data.value;
          })
        .catch(function (error) {
            chuckJoke.innerHTML = "(An error has occurred.)";
        });
           
      }
      
var button = document.querySelector("#btn");
button.addEventListener("click", fetchChuckNorris);

fetchChuckNorris();