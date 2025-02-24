let timeFunction = () => {
  let hh = document.getElementById("hour");
  let mh = document.getElementById("minute");
  let sh = document.getElementById("second");
  let d = new Date();
  let h = d.getHours();
  h = h > 12 ? h - 12 : h === 0 ? 12 : h;
  let m = d.getMinutes();
  let s = d.getSeconds();
  let srotation = s * 6;
  let hrotation = h * 30 + 0.5 * m;
  let mrotation = m * 6;
  sh.style.transform = `rotate(${srotation}deg)`;
  hh.style.transform = `rotate(${hrotation}deg)`;
  mh.style.transform = `rotate(${mrotation}deg)`;
};
timeFunction();
setInterval(timeFunction, 1000);
