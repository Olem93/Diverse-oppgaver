function addToCart(index) {
  console.log(index);
  if (model.currentPage === "italiano") {
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
  if (model.currentPage === "american") {
    pizzaprice = pizzaUSA[index].price;
    totalprice += pizzaprice;
    currency = "TOTAL PUSSY EUROPE MONEY";
    if (totalprice >= 0) {
      totalprice = totalprice++;
      {
        if (pizzaprice >= 150) {
          pricewarning = "GIVE OUR CEO MORE MONEY!";
        } else pricewarning = "";
      }
    }
  }
  updateView();
  console.log(totalprice, pricewarning);
}
