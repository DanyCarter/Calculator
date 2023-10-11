let operations = "";
let result = "";
let newOperation = true;

const screen = document.getElementById("screen");
const operation = document.getElementById("operations");
const numbers = document.getElementsByTagName("button");
const buttonOperations = document.querySelector(".operator");
const clean = document.getElementById("clean");
const equal = document.getElementById("equal");
const porz = document.getElementById("porcent");
const X = document.getElementById("exponent");
const raiz = document.getElementById("square");
const plsMns = document.getElementById("signe");
const divide = document.getElementById("divide");

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
  // Obtiene la expresión actual de la calculadora.
  const expression = document.getElementById("operations").textContent;
  // Elimina el último carácter de la expresión.
  const newExpression = expression.slice(0, expression.length - 1);
  // Actualiza la expresión de la calculadora.
  document.getElementById("operations").textContent = newExpression;
});

//funcion para poner 3,14 como digito
const piButton = document.getElementById("pi");
// Añade un event listener al botón "pi"
piButton.addEventListener("click", () => {
  // Agrega "3.14" a la operación
  operations += "3.14";
  // Actualiza la pantalla con la operación actualizada
  operation.textContent = operations;
});
//Funcion para limpiar la pantalla
const cleanButton = document.getElementById("clean");
// Agrega un event listener al botón "clean"
cleanButton.addEventListener("click", () => {
  // Establece el contenido de la pantalla en "0"
  screen.textContent = "0";
  // Reinicia las operaciones y el resultado
  operations = "";
  result = "";
  // Limpia la pantalla de operaciones
  operation.textContent = "";
});
