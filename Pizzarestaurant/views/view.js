//view
updateView();

function updateView() {
  let html = "";
  if (model.currentPage === "home") html = "";
  else if (model.currentPage === "italiano") html = viewItalianMenu();
  else if (model.currentPage === "american") html = viewAmericanMenu();
  model.pizzApp.innerHTML = /*html*/ `
  <div>
    <button onclick="changePage('')">Home</button>
    <button onclick="changePage('italiano')">Italiano</button>
    <button onclick="changePage('american')">American</button>
  </div>
  <div>${html}</div>
  `;
}

function viewItalianMenu() {
  let html = /*html*/ `
  <h1>La Pizzeria da Corleone</h1>
  <h3>Menù Pizze italiane</h3>

  `;
  for (let i = 0; i < pizzaItaliano.length; i++) {
    html += /*html*/ `
    <p>${pizzaItaliano[i].pizzaNameITA}</p>
    <ul>
    <li>Ingredienti: ${pizzaItaliano[i].ingredients}
    </li>
    </ul>
    <p>Price: € ${pizzaItaliano[i].price}</p> 
    <p><button>Aggiungi al Carrello</button></p>
 `;
  }
  return html;
}

function viewAmericanMenu() {
  let html = /*html*/ `
  <h1>KYLE'S GREASY PIES!</h1>
  <h3>PIZZA MENU!</h3>
  <p>Warning: Consumption of lead might cause poisoning and voting for Trump.</p>

  `;
  for (let i = 0; i < pizzaUSA.length; i++) {
    html += /*html*/ `
  <p>${pizzaUSA[i].pizzaNameUSA}</p>
  <ul>
  <li>Ingredients: ${pizzaUSA[i].ingredients}
  </li>
  </ul>
  <p>Price: $ ${pizzaUSA[i].price}</p>
  <p><button onlick="">ADD TO CART TO BUY</button></p>

  
  `;
  }
  return html;
}
