//model
let buttonThing = 0;
let isButtonSpawned = "";
let timeOut;
// let knappId = document.getElementById("knappId");
//view
updateView();

function updateView() {
  dynaknapp.innerHTML = /*HTML*/ `
  <div id="knappId"  onclick="summonButton()">Ikke trykk her! do not press! IKKE LOV!
    </div>
    <div id="spawnPoint"></div>
    `;
}

// controller

function summonButton() {
  spawnPoint.innerHTML += /*HTML*/ `
    <button id="spawnedButton" onclick="buttonColorchange(this)"></button>
`;
  copyKnapp();
}

// function buttonColorchange(shift) {

//   if (buttonThing === 0) {
//     shift.style.background = "red";
//     shift.innerHTML = "Green";
//     buttonThing = 1;
//   } else if (buttonThing === 1) {
//     shift.style.background = "green";
//     shift.innerHTML = "Blue";
//     buttonThing = 2;
//   } else {
//     shift.style.background = "blue";
//     shift.innerHTML = "Red";
//     buttonThing = 0;
//   }
//   buttonThing = randomNum();
// }

// function randomNum() {
//   return Math.floor(Math.random() * 3) + 1;
// }

function copyKnapp() {
  let cloneVar = document.getElementById("spawnedButton").innerHTML;
}
