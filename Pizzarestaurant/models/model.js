const model = {
  pizzApp: document.getElementById("pizzApp"),
  currentPage: "home",
};

const pizzaItaliano = [
  {
    pizzaNameITA: "Pizza Marinara",
    ingredients: ["Pomodoro di San Marzano", "Aglio", "Oregano calabrese"],
    price: 1.99,
  },

  {
    pizzaNameITA: "Pizza Margherita",
    ingredients: [
      "Pomodoro di San Marzano",
      "Mozzarella di Bufala",
      "Pecorino Romano",
      "Basilico",
    ],
    price: 2.99,
  },

  {
    pizzaNameITA: "Pizza al Funghi",
    ingredients: [
      "Salsa bianca",
      "Mozzarella di Bufaala",
      "Funghi",
      "Pecorino Romano",
      "Basilico",
    ],
    price: 5.99,
  },

  {
    pizzaNameITA: "Pizza troppo cara solo per influencer e idioti.",
    ingredients: [
      "Salsa al cioccolato fondente",
      "Noci",
      "Tartufli",
      "Caviale",
      "Foglie d'oro",
    ],
    price: 2000,
  },
];

//American style
const pizzaUSA = [
  {
    pizzaNameUSA: "MARGARITA/CHEESE PIZZA",
    ingredients: [
      "TOMATERSAUCE",
      "PARMESAN",
      "CHEESE",
      "OREGANO",
      "BACONGREASE",
      "LARD",
      "LEAD",
    ],
    price: 29.99,
  },

  {
    pizzaNameUSA: "FUCK IT UP WITH BACON",
    ingredients: [
      "TOMATERSAUCE",
      "AMERICAN CHEESE",
      "BACON",
      "BEEF",
      "BACONGREASE",
      "LARD",
      "LEAD",
    ],
    price: 59.99,
  },

  {
    pizzaNameUSA: "FUCK MY WALLET",
    ingredients: [
      "TOMATERSAUCE",
      "CHEESE",
      "OREGANO",
      "BEEF",
      "BACON",
      "ALLIGATOR",
      "BOBCAT",
      "BACON",
      "EXTRA BACON",
      "HABANERO SAUCE",
      "BACONGREASE",
      "LARD",
      "LEAD",
    ],
    price: 199.99,
  },
];

let language = "";
let italianLan;
// **Oppgave 2. Pizzarestaurant**
// Du driver en pizzarestaurant der bestillingene går bananas!
// - Model: Lag en Pizza-liste med navn, ingredienser (array?) og pris.
// - View: Vis menyen og dagens bestillinger.
// - Controller: Lag funksjoner for å:
// Regne ut totalpris for alle bestillinger.
// Hvis en pizza koster over 2999kr, gi advarsel: "Er du sikker på at du vil kjøpe denne luksuspizzaen?!"
