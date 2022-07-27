//selektoren
const button = document.querySelector("button");
const pElement = document.createElement("p");
const url = "https://krautipsum.com/api/kraut";

//get data from api
const loadKraut = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      pElement.innerText = data.kraut;
      document.body.append(pElement);
    });
};

button.addEventListener("click", loadKraut);
