let getTime = () => {
  let hr = document.querySelector("#hr");
  let min = document.querySelector("#min");
  let sec = document.querySelector("#sec");
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  hour = hour < 10 ? `0${hour}` : `${hour}`;
  minute = minute < 10 ? `0${minute}` : `${minute}`;
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  hr.innerText = hour;
  min.innerText = minute;
  sec.innerText = seconds;
};
setInterval(getTime, 1000);
