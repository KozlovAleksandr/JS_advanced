let play = document.getElementById("play");
let pause = document.getElementById("pause");

let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");

let start = null;

var contar = function () {
  if (seconds.value == 0 && minutes.value == 0) {
    pause.classList.remove("act");
    play.classList.add("act");

    clearInterval(start);
  } else {
    pause.classList.add("act");
    play.classList.remove("act");

    if (seconds.value == 0) {
      seconds.value = 60;
      if (minutes.value != 0) {
        minutes.value--;
        if (minutes.value < 10) {
          minutes.value = `0${minutes.value}`;
        }
      }
    }
    seconds.value--;
    if (seconds.value < 10) {
      seconds.value = `0${seconds.value}`;
    }
  }
};

play.addEventListener("click", function () {
  if (
    (seconds.value == 0 && minutes.value == 0) ||
    minutes.value > 59 ||
    seconds.value > 59
  ) {
    window.alert("Неверный формат");
  } else {
    start = setInterval(contar, 1000);
  }
});

pause.addEventListener("click", function () {
  pause.classList.remove("act");
  play.classList.add("act");

  clearInterval(start);
});
