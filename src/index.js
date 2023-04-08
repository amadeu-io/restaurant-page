import "./style.css";
import beverages from "./icons/beverages.svg";
import breakfast from "./icons/breakfast.svg";
import appetizers from "./icons/appetizers.svg";
import lunch from "./icons/lunch.svg";

let icons = [beverages, breakfast, appetizers, lunch];

const content = document.getElementById("content");

const h1 = document.createElement("h1");
h1.textContent = "Bambuda Lodge Menu";
content.appendChild(h1);

icons.forEach((icon) => {
  let imgIcon = new Image();
  imgIcon.src = icon;
  content.appendChild(imgIcon);
});
