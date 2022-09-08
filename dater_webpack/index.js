import "./styles/index.scss";
import openPage from "./modules/switcher.js";
import "./modules/timer.js";
import "./modules/main.js";
import "./modules/countdown.js";

const btns = document.getElementsByClassName("tablinks");

for (let btn of btns) {
  btn.addEventListener("click", () =>
    openPage(event, btn.getAttribute("name"))
  );
}
