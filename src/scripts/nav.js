// loads the HTML and CSS of nav

import "../styles/nav.css";

function navLoad() {
  const nav = document.querySelector(".nav");

  let navHTML = `
  <div class="nav-item">Menu</div>
  <div class="nav-item current">Beverages &#x1F379;</div>
  <div class="nav-item">Breakfast &#x1F373;</div>
  <div class="nav-item">Appetizers &amp; Bites &#x1F32E;</div>
  <div class="nav-item">Lunch &amp; Dessert &#x1F35D;</div>
  `;

  nav.innerHTML = navHTML;
}

export { navLoad };
