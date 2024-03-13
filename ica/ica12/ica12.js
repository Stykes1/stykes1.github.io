const btn = document.querySelector("button");

btn.addEventListener("click", getQuote);

let questApi = "https://trivia.cyberwisp.com/getrandomchristmasquestion"
const quote = "";
function getQuote(){
    fetch(questApi)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    else {
        console.log(text());
    }
  })

//   .then((text) => {
//     poemDisplay.textContent = text;
//   })

//   .catch((error) => {
//     poemDisplay.textContent = `Could not fetch verse: ${error}`;
//   });
}

