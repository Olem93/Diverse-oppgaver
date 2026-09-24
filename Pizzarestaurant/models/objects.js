const model = {
  pizzApp: document.getElementById("pizzApp"),
  currentPage: "home",
};

const pizzaItaliano = [
  {
    pizzaNameITA: "Pizza Marinara",
    ingredients: ["Pomodoro di San Marzano", "Aglio", "Oregano calabrese"],
    price: 1,
    menuNumber: 1,
  },

  {
    pizzaNameITA: "Pizza Margherita",
    ingredients: [
      "Pomodoro di San Marzano",
      "Mozzarella di Bufala",
      "Pecorino Romano",
      "Basilico",
    ],
    price: 2,
    menuNumber: 3,
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
    price: 5,
    menuNumber: 3,
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
    menuNumber: 4,
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
