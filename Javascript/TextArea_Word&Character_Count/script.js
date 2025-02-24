document.querySelector(".count").onclick = function () {
  let text = document.getElementById("text").value;
  let array = text.split(" ");
  console.log(array.length);
  let count = 0;
  for (let i of text) {
    if (i !== "") {
      count++;
    }
  }
  document.querySelector(
    "#nooftext"
  ).innerText = `${array.length} word & ${count} characters`;
};
