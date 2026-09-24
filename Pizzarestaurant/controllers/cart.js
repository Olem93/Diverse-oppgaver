function addToCart(index) {
  if (viewItalianMenu()) {
    pizzaprice = pizzaItaliano[index].price;
    totalprice += pizzaprice;
    currency = "TOTALE EUR €";
    if (totalprice >= 0) {
      totalprice = totalprice++;
      {
        if (pizzaprice >= 2000) {
          pricewarning =
            "Questa è una pizza stupidamente costosa per stupidi YouTuber con troppi soldi.";
        } else pricewarning = "";
      }
    }
  }
  updateView();
  console.log(totalprice, pricewarning);
}

// function calculatePrice() {
//   if (pizzaprice > i) {
//   } else if (pizzaprice === null) {
//   }
// }
