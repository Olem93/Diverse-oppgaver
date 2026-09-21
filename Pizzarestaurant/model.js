const model = {
  testing11: document.getElementById("testing11"),
};

const pizzaItaliano = [
  {
    pizzaNameITA: "Pizza Marinara",
    ingredients: ["Pomodoro di San Marzano", "Aglio", "Oregano"],
    price: 1.99,
  },

  {
    pizzaNameITA: "Pizza Margherita",
    ingredients: [
      "Pomodoro di San Marzano",
      "Mozzarella di Buffala",
      "Pecorino Romano",
      "Basilico",
    ],
    price: 2.99,
  },

  {
    pizzaNameITA: "Pizza al Funghi",
    ingredients: [
      "Salsa bianca.",
      "Mozzarella di Buffala.",
      "Funghi.",
      "Pecorino Romano.",
      "Basilico.",
    ],
    price: 5.99,
  },

  {
    pizzaNameITA: "Pizza troppo cara solo per influencer e idioti.",
    ingredients: [
      "Salsa al cioccolato fondente.",
      "Noci.",
      "Tartufli.",
      "Caviale.",
      "Foglie d'oro.",
    ],
    price: 2000,
  },
];

//American style
const pizzaUSA = [
  {
    pizzaNameENG: "CHEESE PIZZA",
    ingredients: [
      "TOMATERSAUCE.",
      "PARMESAN",
      "DRY MOZZARELLA CHEESE.",
      "OREGANO.",
      "BACONGREASE.",
      "LARD",
      "LEAD",
    ],
    price: 29.99,
  },

  {
    pizzaNameENG: "FUCK IT UP WITH BACON",
    ingredients: [
      "TOMATERSAUCE.",
      "AMERICAN CHEESE.",
      "BACON.",
      "BEEF",
      "BACONGREASE.",
      "LARD",
      "LEAD",
    ],
    price: 59.99,
  },

  {
    pizzaNameENG: "FUCK MY WALLET",
    ingredients: [
      "TOMATERSAUCE.",
      "DRY MOZZARELLA CHEESE.",
      "OREGANO.",
      "BEEF",
      "BACON",
      "ALLIGATOR",
      "BOBCAT",
      "BACON",
      "EXTRA BACON",
      "HABANERO SAUCE",
      "BACONGREASE.",
      "LARD",
      "LEAD",
    ],
    price: 199.99,
  },
];
//Ingredienti: Salsa al cioccolato fondente.,Noci.,Tartufli.,Caviale.,Foglie d'oro.

// let pizza = [
//   {
//     pizzaName: "Marinara",
//     ingredients: ["Pomodoro di San Marzano", "Garlic", "Oregano"],
//     price: 159,
//   },

//   {
//     pizzaName: "Margherita",
//     ingredients: [
//       "Pomodoro di San Marzano",
//       "Mozzarella di Buffala",
//       "Pecorino Romano",
//       "Basilico",
//     ],
//     price: 189,
//   },

//   {
//     pizzaName: "al Funghi",
//     ingredients: [
//       "White sauce",
//       "Mozzarella di Buffala",
//       "Mushroom",
//       "Pecorino Romano",
//       "Basilico",
//     ],
//     price: 259,
//   },

//   {
//     pizzaName: "LUXUS EXTREMEO",
//     ingredients: [
//       "Dark chocolate salsa",
//       "Nuts",
//       "Truffles",
//       "Caviar",
//       "Gold leaves",
//     ],
//     price: 22499,
//   },
// ];

// **Oppgave 2. Pizzarestaurant**
// Du driver en pizzarestaurant der bestillingene går bananas!
// - Model: Lag en Pizza-liste med navn, ingredienser (array?) og pris.
// - View: Vis menyen og dagens bestillinger.
// - Controller: Lag funksjoner for å:
// Regne ut totalpris for alle bestillinger.
// Hvis en pizza koster over 2999kr, gi advarsel: "Er du sikker på at du vil kjøpe denne luksuspizzaen?!"

// Enkel meny med seks valgmuligheter.
