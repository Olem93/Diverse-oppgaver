//model
let startNum = 1;

//view
updateView();

function updateView() {
  oppgavenbla.innerHTML = /*HTML*/ `
    <p>test</p>
    <div>${startNum}</div>
    <button onclick="changeNumber('double')">Doble tallet</button>
    <button onclick="changeNumber('byOne')">Øk tall med 1</button>
    <button onclick="changeNumber('resetNum')">reset tall til 1</button>
    <div>${condition()}</div>
    `;
}
//controller

function condition() {
  if (startNum === 112) {
    return "Du har vunnet";
  } else if (startNum > 112) {
    return "loser";
  }
  return "";
}

function changeNumber(action) {
  if (action === "double") {
    startNum = startNum * 2;
  } else if (action === "byOne") {
    startNum = startNum + 1;
  } else if (action === "resetNum") {
    startNum = 1;
  }
  updateView();
}

// Lag et program som starter med å vise frem tallet 1.
// Lag 3 knapper som skal gjøre følgende:
// “doble tallet”,
// “øke tallet med 1”,
// ”resette tallet til 1”

// Hvis summen er høyere enn 112, så skal du få opp en melding at du har tapt,
// men hvis du er nøyaktig på 112, så har du vunnet.
