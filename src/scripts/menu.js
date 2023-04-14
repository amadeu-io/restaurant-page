// loads the HTML of menu

const menuLoad = function () {
  // hide navbar
  const nav = document.querySelector(".nav");
  nav.style.display = "none";

  // remove previous content
  content.innerHTML = "";

  let menuHTML = `
  <h1>&#x1F305; Bambuda Lodge Menu &#x1F305;</h1>
  <h2>Beverages &#x1F379;</h2>
  <h2>Breakfast &#x1F373;</h2>
  <h2>Appetizers &amp; Poolside Bites &#x1F32E;</h2>
  <h2>Lunch &amp; Dessert &#x1F35D;</h2>
  `;

  // create menu div & append HTML content
  const menu = document.createElement("div");
  menu.classList = "menu";
  menu.innerHTML = menuHTML;

  content.appendChild(menu);
};

export { menuLoad };
