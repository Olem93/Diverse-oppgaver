function addToCart(index) {
  pizzaprice = pizzaItaliano[index].price;
  totalprice += pizzaprice;
  if (totalprice >= 0) {
    totalprice = totalprice++;
    {
      if (pizzaprice >= 2000) {
        pricewarning = "dyrt";
      } else pricewarning = "billig";
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
