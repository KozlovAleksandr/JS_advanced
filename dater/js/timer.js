const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const playPauseEl = document.getElementById("playPause");
const form = document.getElementById("timer_form");
const label = document.getElementById("timer_label");
const timer = document.getElementById("timer_time");

let time = [];

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const timerTime = formData.get("timerTime");

  time = timerTime.split(":");

  label.style.display = "none";
  timer.style.display = "block";
};

function updateTime() {
  if (time[2] > 0) {
    time[2]--;
    return;
  }
  time[2] = 59;
  if (time[1] > 0) {
    time[1]--;
    return;
  }
  time[1] = 59;
  if (time[0] > 0) {
    time[0]--;
  }
}

function updateClock() {
  if (playPauseEl.innerText === "СТАРТ") {
    return;
  }

  updateTime();

  hourEl.innerText = String(time[0]).padStart(2, "0");
  minuteEl.innerText = String(time[1]).padStart(2, "0");
  secondEl.innerText = String(time[2]).padStart(2, "0");

  if (time[2] == 0 && time[1] == 0 && time[0] == 0) {
    sound.play();
    playPauseEl.innerText = "СТАРТ";
    return;
  }
}

setInterval(updateClock, 1000);

playPauseEl.addEventListener("click", (e) => {
  if (playPauseEl.innerText === "СТАРТ") {
    playPauseEl.innerText = "ПАУЗА";
    return;
  }
  playPauseEl.innerText = "СТАРТ";
});
