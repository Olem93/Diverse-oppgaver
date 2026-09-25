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
    ],
    price: 9,
    menuNumber: "1: ",
    menuImage: "images/pizza-usa-img1.webp",
  },

  {
    pizzaNameUSA: "BUFFALO CHICKEN PIE",
    ingredients: [
      "A WHOLE DEEP FRIED CHICKEN!",
      "OUR TOP SECRET BUFFALO SAUCE!",
      "EXTRA BUTTER",
      "BACONGREASE",
      "LARD",
    ],
    price: 12,
    menuNumber: "2: ",
    menuImage: "images/pizza-usa-img2.webp",
  },

  {
    pizzaNameUSA: "",
    ingredients: [
      "TOMATERSAUCE",
      "AMERICAN CHEESE",
      "BACON",
      "BEEF",
      "BACONGREASE",
      "LARD",
    ],
    price: 15,
    menuNumber: "3: ",
    menuImage: "images/pizza-usa-img3.webp",
  },

  {
    pizzaNameUSA: "ALLIGATOR PIE SUPREME",
    ingredients: [
      "TOMATERSAUCE",
      "CHEESE",
      "ALLIGATOR HEAD",
      "ALLIGATOR LIMBS",
      "ALLIGATOR BEEF",
      "BACON",
      "HABANERO SAUCE",
      "OREGANO",
      "BACONGREASE",
      "LARD",
    ],
    price: 200,
    menuNumber: "4: ",
    menuImage: "images/pizza-usa-img4.webp",
  },
];

// const menuImage = new Image();
// menuImage.src = "pizzaUSA-IMG-4.jpg";
