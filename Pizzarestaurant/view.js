//view
updateView();

function updateView() {
  model.testing11.innerHTML = /*html*/ `
  <h1>La Pizzeria da Ole Martini</h1>
  <h3>Menù Pizze italiane</h3>
`;

  for (let i = 0; i < pizzaItaliano.length; i++) {
    testing11.innerHTML += /*html*/ `
    <p>${pizzaItaliano[i].pizzaNameITA}</p>
    <ul>
    <li>Ingredienti: ${pizzaItaliano[i].ingredients}
    </li>
    </ul>
    <p>Price: € ${pizzaItaliano[i].price}</p>
    `;
  }
  for (let i = 0; i < pizzaUSA.length; i++) {
    testing11.innerHTML += /*html*/ `
    <p>${pizzaUSA[i].pizzaNameENG}</p>
    <ul>
    <li>Ingredients: ${pizzaUSA[i].ingredients}
    </li>
    </ul>
    <p>Price: $ ${pizzaUSA[i].price}</p>
    `;
  }
}
