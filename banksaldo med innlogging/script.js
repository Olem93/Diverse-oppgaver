//model
const bankUser = {
  username: "kurtjonnysivertsen",
  password: "superkurt69",
  name: "Kurt-Jonny Sivertsen",
  savingsBalance: 40,
  usageBalance: 50,
};

let inputUsername;
let inputPassword;
let login = true;
let number1;
let number2;

//view
updateView();
function updateView() {
  app.innerHTML = /*html*/ `
  <div>
  <p>Logg inn i banken</p>

  <input
  onchange="inputUsername = this.value" 
  type="usernametext"
  placeholder="Brukernavn"
  />
  
  <input
  onchange="inputPassword = this.value" 
  type="passwordtext"
  placeholder="Passord"
  />
<button onclick="checkLogin()">Logg inn</button>
<p>${returnLogin()}</p>
</div>

<div>
<h3>Sparekonto</h3>
<input type=Number onchange="number1 = Number(this.value)"/>
<button onclick="changeBalance(number1, 'savingsBal')">Overfør</button>
<span>${bankUser.savingsBalance}</span>
<h3>Brukskonto</h3>
<input type=Number onchange= "number2 = Number(this.value)"/>
<button onclick="changeBalance(number2, 'usageBal')">Overfør</button>
<span>${bankUser.usageBalance}</span>

</div>

  `;
}

//controller balance

function changeBalance(numbers, account) {
  if (numbers === number1 && account === "savingsBal") {
    bankUser.usageBalance += number1;
    bankUser.savingsBalance -= number1;
  } else if (numbers === number2 && account === "usageBal") {
    bankUser.usageBalance -= number2;
    bankUser.savingsBalance += number2;
  } else if (bankUser.savingsBalance < 0 || bankUser.usageBalance < 0) {
    bankUser.usageBalance = number2;
    bankUser.savingsBalance = number1;
    // return "Invalid transfer";
  }
  updateView();
  console.log(number1);
}

//controller login

function checkLogin() {
  if (
    bankUser.username === inputUsername &&
    bankUser.password === inputPassword
  ) {
    login = true;
  } else {
    login = false;
  }
  updateView();
}

function returnLogin() {
  if (login === true) {
    return "Du er logget inn";
  } else if (login === false) {
    return "Feil brukernavn eller passord. Sjekk om du har skrevet riktig";
  } else {
    return "";
  }
}
