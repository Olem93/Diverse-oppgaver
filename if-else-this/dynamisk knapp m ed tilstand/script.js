//model
let buttonThing = 0;
let isButtonSpawned = "";
let timeOut;
// let knappId = document.getElementById("knappId");
//view
updateView();

function updateView() {
  dynaknapp.innerHTML = /*HTML*/ `
    <p>test</p>
    
    <div id="knappId">
    <button onclick="summonButton()">Spawner knapp</button>
    </div>
    <div id="spawnPoint"></div>
    

    

    `;
}

// controller

function summonButton() {
  spawnPoint.innerHTML = /*HTML*/ `
    <button id="spawnedButton" onclick="buttonColorchange(this)">test1</button>
`;
  console.log(summonButton());
}

// function buttonColorchange(shift) {
//   if (buttonThing === 0) {
//     shift.style.background = "red";
//     shift.innerHTML = "Green";
//     buttonThing = 1;

//     // copyKnapp();
//   } else if (buttonThing === 1) {
//     shift.style.background = "green";
//     shift.innerHTML = "Blue";
//     buttonThing = 2;

//     // copyKnapp();
//   } else {
//     shift.style.background = "blue";
//     shift.innerHTML = "Red";
//     buttonThing = 0;

//     // copyKnapp();
//   }
// }

function copyKnapp() {
  let cloneVar = document.getElementById("spawnedButton").innerHTML;
  spawnPoint.innerHTML += cloneVar;
}
// let cloneVar = dynaknapp.innerHTML;
// dynaknapp.innerHTML += cloneVar;
// lage en komponent som genererer en knapp, hvor du da endrer innholdet til knappen med parameter
