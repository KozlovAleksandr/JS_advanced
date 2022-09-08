const headline = document.getElementById("headline");
const countdown = document.getElementById("countdown");
const content = document.getElementById("content");
const form = document.getElementById("countdown_form");

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const countdownTo = formData.get("countdownTo");

  if (countdownTo) {
    form.style.display = "none";
    countdown.style.display = "block";

    const countDown = new Date(countdownTo).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("countdown__days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("countdown__hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("countdown__minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("countdown__seconds").innerText = Math.floor(
            (distance % minute) / second
          ));

        if (distance < 0) {
          headline.style.display = "none";
          countdown.style.display = "none";
          content.style.display = "block";
          clearInterval(x);
        }
      }, 0);
  }
};
