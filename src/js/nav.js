// loads the HTML and CSS of nav

import "../css/reset.css";
import "../css/global.css";
import "../css/nav.css";

const navLoad = function () {
  const nav = document.querySelector(".nav");

  let navHTML = `
  <div class="nav-item" id="menu">Menu</div>
  <div class="nav-item" id="beverages">&#x1F379; Beverages</div>
  <div class="nav-item" id="breakfast">&#x1F373; Breakfast</div>
  <div class="nav-item" id="appetizers"><a href="./appetizers.html">&#x1F32E; Appetizers &amp; Bites</a></div>
  <div class="nav-item" id="lunch">&#x1F35D; Lunch &amp; Dessert</div>
  `;

  nav.innerHTML = navHTML;
};

export { navLoad };
