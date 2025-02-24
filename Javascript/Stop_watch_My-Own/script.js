let timeDisplay = document.querySelector("#timeDisplay");
let [hour, minute, second] = [0, 0, 0];
let time = null;

function watch() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
  h = hour < 10 ? `0${hour}` : hour;
  s = second < 10 ? `0${second}` : second;
  m = minute < 10 ? `0${minute}` : minute;
  timeDisplay.innerText = `${h}:${m}:${s}`;
}

function startTime() {
  if (time == null) {
    time = setInterval(watch, 1000);
  } else {
    clearInterval(time);
    time = null;
  }
}

function stopTime() {
  clearInterval(time);
  time = null;
}
function resetTime() {
  [hour, minute, second] = [0, 0, 0];
  timeDisplay.innerText = `00:00:00`;
  clearInterval(time);
  time = null;
  console.log(time);
}
