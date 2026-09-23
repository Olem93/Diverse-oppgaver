//view
updateView();

function updateView() {
  let html = "";
  let pricewarning = "";
  if (model.currentPage === "home") html = "";
  else if (model.currentPage === "italiano") html = viewItalianMenu();
  else if (model.currentPage === "american") html = viewAmericanMenu();
  model.pizzApp.innerHTML = /*html*/ `
  <div>
    <button onclick="changePage('')">Home</button>
    <button onclick="changePage('italiano')">Italiano</button>
    <!--<button onclick="changePage('american')">American</button>-->
  </div>
  <div>${html}</div>
  <div>${totalprice}</div>
  <div>${pricewarning}</div>

  `;
}
//  <div>${price}</div>
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
    <p>€ ${pizzaItaliano[i].price}</p>
    <p><button onclick="addToCart(${i})">Aggiungi</button></p>


 `;
  }
  return html;
}

// function viewAmericanMenu() {
//   let html = /*html*/ `
//   <h1>KYLE'S GREASY PIES!</h1>
//   <h3>PIZZA MENU!</h3>
//   <p>Warning: Consumption of lead might cause poisoning and voting for Trump.</p>

//   `;
//   for (let i = 0; i < pizzaUSA.length; i++) {
//     html += /*html*/ `
//   <p>${pizzaUSA[i].pizzaNameUSA}</p>
//   <ul>
//   <li>Ingredients: ${pizzaUSA[i].ingredients}
//   </li>
//   </ul>
//   <p>$ ${pizzaUSA[i].price}</p>
//   <p><button onlick="addToCart(${i})">ADD TO CART TO BUY</button></p>

//   `;
//   }
//   return html;
// }

// **Oppgave 2. Pizzarestaurant**
// Du driver en pizzarestaurant der bestillingene går bananas!
// - Model: Lag en Pizza-liste med navn, ingredienser (array?) og pris.
// - View: Vis menyen og dagens bestillinger.
// - Controller: Lag funksjoner for å:
// Regne ut totalpris for alle bestillinger.
// Hvis en pizza koster over 2999kr, gi advarsel: "Er du sikker på at du vil kjøpe denne luksuspizzaen?!"
