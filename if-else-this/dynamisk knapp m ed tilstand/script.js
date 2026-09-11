//model
let buttonThing = 0;
let isButtonSpawned = "";
let timeOut;
let redvar = 1;
// let knappId = document.getElementById("knappId");
//view
updateView();
function updateView() {
  dynaknapp.innerHTML = /*HTML*/ `
  <button onclick="summonButton">test 123 trykkbar div</button>
    <div>${summonButton()}</div>
    `;
}

// controller

function summonButton() {

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
