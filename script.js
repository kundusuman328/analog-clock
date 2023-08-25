function showClock() {
  let h = document.getElementsByClassName("hr")[0];
  let m = document.getElementsByClassName("mn")[0];
  let s = document.getElementsByClassName("ss")[0];

  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  h.style.transform = `rotate(${hour * 30 + (min / 60) * 30}deg)`;
  m.style.transform = `rotate(${min * 6 + (sec / 60) * 6}deg)`;
  s.style.transform = `rotate(${sec * 6}deg)`;
}

setInterval(showClock, 1000);
