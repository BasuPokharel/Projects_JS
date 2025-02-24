let showText = document.querySelector("#text");
let textarea = document.querySelector("#textarea");
let btn = document.querySelector("#Start");
let result = document.querySelector("#result");

let prompts = [
  "the quick brown fox jumps over the laxy dog 1",
  "the quick brown fox jumps over the laxy dog 2",
  "the quick brown fox jumps over the laxy dog 3",
];
let startTime, endTime, timeGap;

function typeNow() {
  let time = new Date();
  startTime = time.getTime();
  btn.innerText = `End`;
  let randomNumber = Math.floor(Math.random() * prompts.length);
  showText.innerText = prompts[randomNumber];
}

function speedTest() {
  let time = new Date();
  endTime = time.getTime();
  timeGap = (endTime - startTime) / 1000;
  calculateSpeed(timeGap);
  btn.innerText = `reset`;
}

function calculateSpeed(timeDiff) {
  let input = textarea.value.trim();
  if (input == "") {
    result.innerText = `Your speed is 0 WPM & you typed 0 words in ${timeDiff.toFixed(
      0
    )} seconds`;
  } else {
    let length = input.split(" ").length;
    let speed = Math.round((length / timeDiff) * 60);
    result.innerText = `Your speed is ${speed} WPM & you typed ${length} words in ${timeDiff.toFixed(
      0
    )} seconds`;
  }
}

function reset() {
  result.innerText = ``;
  showText.innerText = ``;
  textarea.value = ``;
  btn.innerText = `start`;
}

btn.addEventListener("click", (evts) => {
  switch (evts.target.innerText.toLowerCase()) {
    case "start":
      textarea.disabled = false;
      typeNow();
      break;

    case "end":
      textarea.disabled = true;
      speedTest();
      break;

    case "reset":
      textarea.disabled = true;
      reset();
      break;
  }
});
