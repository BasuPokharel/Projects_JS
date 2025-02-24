let button = document.querySelector("button");
let input = document.querySelector(".input");
let text = document.querySelector(".text");
button.addEventListener("click", () => {
  text.style.fontSize = `${input.value}px`;
});
