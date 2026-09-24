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
    price: 9,
    menuNumber: "ONE: ",
  },

  {
    pizzaNameUSA: "BUFFALO CHICKEN PIE",
    ingredients: [
      "A WHOLE DEEP FRIED CHICKEN!",
      "OUR TOP SECRET BUFFALO SAUCE!",
      "EXTRA BUTTER",
      "BACONGREASE",
      "LARD",
      "LEAD",
    ],
    price: 12,
    menuNumber: "TWO: ",
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
    price: 15,
    menuNumber: "THREE: ",
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
    price: 200,
    menuNumber: "FOUR: ",
  },
];
