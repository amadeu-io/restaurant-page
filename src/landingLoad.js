// loads the landing page

import "./styles/landing.css";
import beverages from "./icons/beverages.svg";
import breakfast from "./icons/breakfast.svg";
import appetizers from "./icons/appetizers.svg";
import lunch from "./icons/lunch.svg";

function landingLoad() {
  let icons = [beverages, breakfast, appetizers, lunch];
  let iconsString = [
    "Beverages",
    "Breakfast",
    "Appetizers & Bites",
    "Lunch & Dessert",
  ];

  const content = document.getElementById("content");

  // create title
  const h1 = document.createElement("h1");
  h1.textContent = "Bambuda Lodge Menu";
  content.appendChild(h1);

  // create menu items
  for (let i = 0; i < 4; i++) {
    // create container
    const itemContainer = document.createElement("div");
    itemContainer.classList = "item-container";

    // create icon
    let itemIcon = document.createElement("img");
    itemIcon.src = icons[i];

    // create name
    let itemName = document.createElement("div");
    itemName.classList = "item-name";
    itemName.textContent = iconsString[i];

    // add icon & name to container
    itemContainer.appendChild(itemIcon);
    itemContainer.appendChild(itemName);

    // add container to content
    content.appendChild(itemContainer);
  }
}

export { landingLoad };
