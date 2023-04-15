import "../styles/reset.css";
import "../styles/global.css";
import { navLoad } from "./nav.js";
import { menuLoad } from "./menu.js";
import { beveragesLoad } from "./beverages.js";
import { breakfastLoad } from "./breakfast.js";
import { appetizersLoad } from "./appetizers.js";
import { lunchLoad } from "./lunch.js";

// make menu items clickable
function makeMenuLinksClickable() {
  let menuItem = document.querySelectorAll("h2");
  menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
      // show navbar
      nav.style.display = "flex";

      // load the clicked page
      loadFunctions[index + 1]();
    });
  });
}

// remove navbar highlighted item
function removeNavHighlight() {
  navItem.forEach((item) => {
    item.classList.remove("current");
  });
}

const content = document.getElementById("content");
const nav = document.querySelector(".nav");

navLoad();
menuLoad();
makeMenuLinksClickable();

const navItem = document.querySelectorAll(".nav-item");
const loadFunctions = [
  menuLoad,
  beveragesLoad,
  breakfastLoad,
  appetizersLoad,
  lunchLoad,
];

// make navbar items clickable
navItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    // remove previous nav highlight
    removeNavHighlight();

    // load the clicked page
    loadFunctions[index]();

    // if menu is clicked
    if (!0) makeMenuLinksClickable();
  });
});
