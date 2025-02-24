let input = document.getElementById("input");
let button = document.querySelectorAll("button");
let result;
let clear = document.getElementById("clear");
let allClear = document.getElementById("all-clear");
let userIn;
let submit = document.getElementById("calc");
// for all buttons accepting in array
button.forEach((btn) => {
  btn.addEventListener("click", (nmbr) => {
    userIn = input.value += nmbr.target.innerText;
  });
});

// C button
clear.addEventListener("click", () => {
  input.value = userIn.slice(0, userIn.length - 2);
});

//AC button
allClear.addEventListener("click", () => {
  input.value = "";
});

//trigger for = button
submit.addEventListener("click", (event) => {
  input.value = eval(userIn.slice(0, userIn.length - 1)); // remove = from last
});
