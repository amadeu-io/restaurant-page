// loads the HTML and CSS of nav

const navLoad = function() {
  const nav = document.querySelector(".nav");

  let navHTML = `
  <div class="nav-item" id="menu">Menu</div>
  <div class="nav-item" id="beverages">Beverages &#x1F379;</div>
  <div class="nav-item" id="breakfast">Breakfast &#x1F373;</div>
  <div class="nav-item" id="appetizers">Appetizers &amp; Bites &#x1F32E;</div>
  <div class="nav-item" id="lunch">Lunch &amp; Dessert &#x1F35D;</div>
  `;

  nav.innerHTML = navHTML;
}

export { navLoad };
