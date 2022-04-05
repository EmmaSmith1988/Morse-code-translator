import { translate } from "./app.js"

const input = document.querySelector(".translator__input")
const button = document.querySelector(".translator__button")
const translation = document.querySelector(".translator__result")
// const clear = document.querySelector(".translator__clear")

button.addEventListener("click", (event) => {
  event.preventDefault();
  translation.innerHTML = translate(input.value);
})