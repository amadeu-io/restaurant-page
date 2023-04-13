import "../styles/reset.css";
import "../styles/global.css";
import { navLoad } from "./nav.js";
import { appetizersLoad } from "./appetizers.js";
import { beveragesLoad } from "./beverages.js";
import { breakfastLoad } from "./breakfast.js";
import { menuLoad } from "./menu.js";
import { lunchLoad } from "./lunch.js";

navLoad();
menuLoad();

let navItem = document.querySelectorAll(".nav-item");

// make menu items clickable
let menuItem = document.querySelectorAll("h2");
menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    // remove navbar highlighted item
    navItem.forEach((item) => {
      item.classList.remove("current");
    });

    // show navbar
    const nav = document.querySelector(".nav");
    nav.style.display = "flex";

    // load the clicked page
    loadFunctions[index + 1]();
  });
});

const loadFunctions = [
  menuLoad,
  beveragesLoad,
  breakfastLoad,
  appetizersLoad,
  lunchLoad,
];

navItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    // remove navbar highlighted item
    navItem.forEach((item) => {
      item.classList.remove("current");
    });

    // load the clicked page
    loadFunctions[index]();

    // menu has been clicked
    if (index === 0) {
      // make menu items clickable
      let menuItem = document.querySelectorAll("h2");
      menuItem.forEach((item, index) => {
        item.addEventListener("click", () => {
          // remove navbar highlighted item
          navItem.forEach((item) => {
            item.classList.remove("current");
          });

          // show navbar
          const nav = document.querySelector(".nav");
          nav.style.display = "flex";

          // load the clicked page
          loadFunctions[index + 1]();
        });
      });
    }
  });
});
