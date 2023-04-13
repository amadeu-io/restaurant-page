import "../styles/reset.css";
import "../styles/global.css";
import { navLoad } from "./nav.js";
import { appetizersLoad } from "./appetizers.js";
import { beveragesLoad } from "./beverages.js";
import { breakfastLoad } from "./breakfast.js";
import { menuLoad } from "./menu.js";
import { lunchLoad } from "./lunch.js";

navLoad();
//beveragesLoad();
//menuLoad();

let navItem = document.querySelectorAll(".nav-item");

const loadFunctions = [
  menuLoad,
  beveragesLoad,
  breakfastLoad,
  appetizersLoad,
  lunchLoad,
];

navItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    navItem.forEach((item) => {
      item.classList.remove("current");
    });

    loadFunctions[index]();
    item.classList.add("current");
  });
});
