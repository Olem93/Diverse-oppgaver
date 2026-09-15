//model

let pizza = [
  {
    pizzaName: "Marinara",
    ingredients: ["Pomodoro di San Marzano", "Garlic", "Oregano"],
    price: 159,
  },

  {
    pizzaName: "Margherita",
    ingredients: [
      "Pomodoro di San Marzano",
      "Mozzarella di Buffala",
      "Pecorino Romano",
      "Basilico",
    ],
    price: 189,
  },

  {
    pizzaName: "al Funghi",
    ingredients: [
      "White sauce",
      "Mozzarella di Buffala",
      "Mushroom",
      "Pecorino Romano",
      "Basilico",
    ],
    price: 259,
  },

  {
    pizzaName: "LUXUS EXTREMEO",
    ingredients: [
      "Mozzarella di Buffala",
      "Pecorino Romano",
      "Truffles",
      "Caviar",
      "Gold leaves",
    ],
    price: 22499,
  },
];

// let pizza = ["tomat1", "tomat2"];
// let pizza = [{ingred: "tomat1"}, "tomat2"];

//view
updateView();

function updateView() {
  testing11.innerHTML = /*html*/ `
  <h3>MENY</h3>
`;

  for (let i = 0; i < pizza.length; i++) {
    testing11.innerHTML += /*html*/ `
    <p>${pizza[i].pizzaName}</p>
    <ul>
    <li>${pizza[i].ingredients}
    </li>
    </ul>
    ${pizza[i].price}
    `;
  }
}

//controller

// function organizeIngredients(){
//     for
// }

// **Oppgave 2. Pizzarestaurant**
// Du driver en pizzarestaurant der bestillingene går bananas!
// - Model: Lag en Pizza-liste med navn, ingredienser (array?) og pris.
// - View: Vis menyen og dagens bestillinger.
// - Controller: Lag funksjoner for å:
// Regne ut totalpris for alle bestillinger.
// Hvis en pizza koster over 2999kr, gi advarsel: "Er du sikker på at du vil kjøpe denne luksuspizzaen?!"

// Enkel meny med seks valgmuligheter.
