import "./style/style.scss";

import { drawItem } from "./item";
import items from "./items";

const galleryElement = document.getElementById("gallery");

items.map((item) => galleryElement.appendChild(drawItem(item)));
