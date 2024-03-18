getCodes();

const button = document.querySelector("button");
const input = document.querySelector("input");
const rightDiv = document.querySelector(".right");
let countryObj = {};
let code = "";

button.addEventListener("click", () => {
  if (input.value === "") return;
  else {
    if (input.value.length === 0) {
      rightDiv.innerHTML = "";
      const para = document.createElement("p");
      para. innerText = "No Flag Found";
      rightDiv.append(para);
    } else {
      const capitalCountryName = capitalize(input.value);
      for (let x in countryObj) {
        if (countryObj[x].toLowerCase() === capitalCountryName.toLowerCase()) {
          code = x;
          break;
        }
      }
      if (code.length === 0) {
        rightDiv.innerHTML = "";
        const para = document.createElement("p");
        para. innerText = "No Flag Found";
        rightDiv.append(para);
      } else {
        rightDiv.innerHTML = "";
        const img = document.createElement("img");
        img.src = "https://flagcdn.com/w160/" + code + ".png";
        rightDiv.append(img);
      }
    }
  }
});

function getCodes() {
  fetch("https://flagcdn.com/en/codes.json")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      countryObj = result;
    });
}

function capitalize(name) {
  const nameArr = name.split("");
  const firstLetter = nameArr.shift();
  nameArr.unshift(firstLetter.toUpperCase());
  return nameArr.join("");
}