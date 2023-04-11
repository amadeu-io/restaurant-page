// loads the HTML and CSS of breakfast

import "./styles/beverages.css";

function beveragesLoad() {
  const content = document.getElementById("content");

  let beveragesHTML = `
  <div class="left">
    <h1>Beverages &#x1F379;</h1>

    <h2>Superfood Smoothies</h2>

    <div class="item-container">
      <h3>Vitamin Sea - $4</h3>
      <p class="description">
        Papaya, pineapple, carrot, ginger and honey.
      </p>
    </div>

    <div class="item-container">
      <h3>Caribbean Power - $4.50</h3>
      <p class="description">
        Beetroot, apple, carrot, pineapple and honey.
      </p>
    </div>

    <div class="item-container">
      <h3>Forest Detox - $4</h3>
      <p class="description">
        Cucumber, celery, pineapple and fresh lemon juice.
      </p>
    </div>

    <h2>Special Smoothies</h2>

    <div class="item-container">
      <h3>Sugar Rush - $4.50</h3>
      <p class="description">
        Vanilla ice cream, cookies, milk, chocolate syrup, and whipped
        cream.
      </p>
    </div>

    <div class="item-container">
      <h3>Sweet Berry - $4.50</h3>
      <p class="description">
        Blueberry, strawberry jam, vanilla ice cream, milk and whipped
        cream.
      </p>
    </div>

    <h2>Fresh Drinks</h2>

    <div class="item-container">
      <h3>Fresh Fruit Smoothie - $3</h3>
      <p class="description">
        Pineapple / Passion Fruit / Banana / Papaya / Watermelon. Includes
        one fruit. Extra Fruit $1.00 / Almond Milk: $0.50 / Coconut Milk:
        $0.50 / Honey: $0.50
      </p>
    </div>

    <div class="item-container">
      <h3>Lemonades - $3</h3>
      <p class="description">
        Traditional / Pink Coconut / Fresh Mint. Includes one fruit. Extra
        Fruit $1.00 / Almond Milk: $0.50 / Coconut Milk: $0.50 / Honey:
        $0.50
      </p>
    </div>

    <h2>Beer</h2>

    <div class="item-container">
      <h3>Balboa / Panamá - $2.5</h3>
      <p class="description">Michelada + $1.5 / Chelada + $0.75</p>
    </div>

    <div class="item-container">
      <h3>Corona - $3.5</h3>
    </div>

    <div class="item-container">
      <h3>Hard Seltzer Adan & Eva - $3</h3>
    </div>

    <h2>Wine</h2>

    <div class="item-container">
      <h3>Glass of Red or White Wine - $4</h3>
    </div>

    <div class="item-container">
      <h3>B&amp;G Sauvignon Blanc - $6.50 / $25</h3>
    </div>

    <div class="item-container">
      <h3>Alamos Cabernet Sauvignon - $6.50 / $25</h3>
    </div>

    <div class="item-container">
      <h3>Sparkling Rosé - $6 / $25</h3>
    </div>
  </div>

  <div class="right">
    <h2>Signature Cocktails</h2>

    <div class="item-container">
      <h3>Green Island - $6.50</h3>
      <p class="description">
        White rum, vodka, basil, ginger syrup, fresh orange juice and fresh
        pineapple juice.
      </p>
    </div>

    <div class="item-container">
      <h3>Bambuda Sunset - $6.50</h3>
      <p class="description">
        Gin, white tequila, aperol, lemon, rosemary and splash of soda.
      </p>
    </div>

    <div class="item-container">
      <h3>White Sand - $6.50</h3>
      <p class="description">
        Dark rum, white rum, gin, triple sec, almond syrup, lemon juice and
        fresh pineapple juice.
      </p>
    </div>

    <div class="item-container">
      <h3>Passion in Bocas - $7</h3>
      <p class="description">
        Dark rum, vodka, egg white, orange syrup, fresh passion fruit juice
        and nutmeg topping.
      </p>
    </div>

    <div class="item-container">
      <h3>Tropical Mule - $7.50</h3>
      <p class="description">
        Vodka, lemon, mint, ginger syrup, fresh passion fruit juice and
        splash of soda.
      </p>
    </div>

    <div class="item-container">
      <h3>Dark Mojito - $8.50</h3>
      <p class="description">
        White rum, jagermeifter, lemon, mint, ginger syrup, and splash of
        soda.
      </p>
    </div>

    <h2>Classic Cocktails</h2>

    <div class="item-container">
      <h3>Margarita - $6</h3>
      <p class="description">Traditional / Passion Fruit / Spicy.</p>
    </div>

    <div class="item-container">
      <h3>Mojito - $6.50</h3>
      <p class="description">Traditional / Passion fruit / Tropicoco</p>
    </div>

    <div class="item-container">
      <h3>Caipirinha - $6</h3>
      <p class="description">
        Cachaza, lemon, simple syrup and splash of soda.
      </p>
    </div>

    <div class="item-container">
      <h3>Tequila Sunrise - $6</h3>
      <p class="description">
        White tequila, lemon, fresh orange juice & grenadine.
      </p>
    </div>

    <div class="item-container">
      <h3>Piña Colada - $6.50</h3>
      <p class="description">
        White rum, coconut liquor, triple c, fresh pineapple and coconut
        cream.
      </p>
    </div>

    <div class="item-container">
      <h3>Long Island Iced Tea - $6</h3>
      <p class="description">
        Vodka, gin, white rum, white tequila, lemon juice & coke.
      </p>
    </div>

    <div class="item-container">
      <h3>Espresso Martini - $6.50</h3>
      <p class="description">Vodka, coffee liqueur, baileys expresso.</p>
    </div>

    <div class="item-container">
      <h3>Bloody Mary - $7.50</h3>
      <p class="description">
        Vodka, tomato juice, tabasco, pepper, salt, jalapeno juice,
        worcestershire sauce and lemon juice.
      </p>
    </div>

    <div class="item-container">
      <h3>Aperol Spritz - $8</h3>
      <p class="description">
        Aperol, sparkling wine, fresh orange juice & splash of soda.
      </p>
    </div>

    <div class="item-container">
      <h3>Whisky Sour - $6</h3>
      <p class="description">
        Whisky, lemon, egg white and angostura bitters.
      </p>
    </div>
  </div>
  `;

  content.innerHTML = beveragesHTML;
}

export { beveragesLoad };
