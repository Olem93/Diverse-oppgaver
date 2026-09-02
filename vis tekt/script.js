let onscreentext = "";

pageView();
function pageView() {
  app.innerHTML = /*html*/ `
  <div>
  <input onchange="onscreentext=this.value" id="inputtext">
  <button onclick="addTextonscreen()">Trykk her for å legge tekst under</button>
  <p id="outputtext"></p>
  </div>
  `;
}

function addTextonscreen() {
  document.getElementById("outputtext").innerHTML = onscreentext;
}
