// loads the HTML and CSS of nav

import "../css/reset.css";
import "../css/global.css";
import "../css/nav.css";

// add navbar highlighted item
function addNavHighlight() {
  const navItem = document.querySelectorAll(".nav-item");
  navItem.forEach((item) => {
    item.addEventLister("click", () => {
      console.log("sd");
    });
  });
}

// remove navbar highlighted item
function removeNavHighlight() {
  navItem.forEach((item) => {
    item.classList.remove("current");
  });
}

const navLoad = function () {
  const nav = document.querySelector(".nav");

  let navHTML = `
  <div class="nav-item" id="menu"><a href="./menu.html">Menu</a></div>
  <div class="nav-item" id="beverages"><a href="./beverages.html">&#x1F379; Beverages</a></div>
  <div class="nav-item" id="breakfast"><a href="./breakfast.html">&#x1F373; Breakfast</a></div>
  <div class="nav-item" id="appetizers"><a href="./appetizers.html">&#x1F32E; Appetizers &amp; Bites</a></div>
  <div class="nav-item" id="lunch"><a href="./lunch.html">&#x1F35D; Lunch &amp; Dessert</a></div>
  `;

  nav.innerHTML = navHTML;
};

export { navLoad };
