//Numero maximo
var max = 100;

// Numero minimo
var min = 1;

// Numero aleatorio

var numSecreto = parseInt(Math.random() * (max - min) + min);

var msg = "Por favor ingrese un numero para adivinar el numero magico";

while (true) {
  var numUser = parseInt(prompt(msg, "0"));
  if (numUser === numSecreto) {
    alert("Ganasteeeee!! adivinaste el numero secreto");
    break;
  } else if (numUser === 0) {
    break;
  } else if (numUser > numSecreto) {
    msg = "Lo sentimos, ese numero que ingresaste es mayor al numero magico";
  } else if (numUser < numSecreto) {
    msg = "Lo sentimos, ese numero que ingresaste es menor al numero magico";
  }
}
