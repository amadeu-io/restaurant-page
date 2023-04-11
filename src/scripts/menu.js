// loads the HTML and CSS of menu

import "../styles/menu.css";

function menuLoad() {
  const content = document.getElementById("content");

  let menuHTML = `
  <h1>&#x1F305; Bambuda Lodge Menu &#x1F305;</h1>
  <h2>Beverages &#x1F379;</h2>
  <h2>Breakfast &#x1F373;</h2>
  <h2>Appetizers &amp; Poolside Bites &#x1F32E;</h2>
  <h2>Lunch &amp; Dessert &#x1F35D;</h2>
  `;

  content.innerHTML = menuHTML;
}

export { menuLoad };
