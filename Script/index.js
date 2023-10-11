let oprc = ""; /* Primero necesitamos almacenar las operaciones */
let rslt = ""; /* Resultado operaciones */
let newOperation = true;
const screen = document.getElementById("screen");
const operation = document.getElementById("operations");

/* Creamos la constante y funcion para el boton de Borrado... */
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
  if (oprc.length > 0) {
    oprc = oprc.substring(0, oprc.length - 1);
    operation.textContent = oprc;
  }
});

/* Creamos la constante y funcion para poner pi en valor numerico... */
const pi = document.getElementById("pi");
pi.addEventListener("click", () => {
  oprc += "3.14";
  operation.textContent = oprc;
});

/* Creamos la constante y funcion para  limpiar la pantalla... */
const clean = document.getElementById("clean");
clean.addEventListener("click", () => {
  screen.textContent = "0";
  oprc = "";
  operation.textContent = "";
  rslt = "";
});

/* Creamos la constante y funcion para la inserción de (+, -, /, *)... */
const operators = document.querySelectorAll(".button.operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    oprc += operator.textContent;
    operation.textContent = oprc;
    newOperation = false;
  });
});

/* Creamos la constante y funcion para la inserccion de numeros... */
const numbers = document.querySelectorAll(".button.num");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (rslt !== "0" && newOperation) {
      oprc = "";
    }
    rslt = "0";
    oprc += number.textContent;
    operation.textContent = oprc;
  });
});

/* Creamos la constante y funcion para realizar operaciones matemáticas...*/
const equal = document.getElementById("equal");
function calculate(expression) {
  try {
    const cleanExpression = expression.replace(/[^-()\d/*+.]/g, ""); // Limpia la expresión de caracteres no deseados
    const result = eval(cleanExpression);
    return Number(result.toFixed(2));
  } catch (error) {
    return "Error";
  }
}
equal.addEventListener("click", () => {
  const result = calculate(oprc);
  screen.textContent = result;
  oprc = result.toString();
  newOperation = true;
});

/* Creamos la constante y funcion para % */
const porcent = document.getElementById("porcent");
porcent.addEventListener("click", () => {
  try {
    rslt = Number(eval(oprc) / 100);
    oprc = rslt.toString();
    screen.textContent = rslt;
  } catch (error) {
    screen.textContent = "Error";
  }
});

/* Creamos la constante y funcion para calcular la potencia cuadrada...*/
const exponent = document.getElementById("exponent");
exponent.addEventListener("click", () => {
  try {
    const base = Number(oprc);
    rslt = Math.pow(base, 2);
    operation.textContent = "sqr(" + oprc + ")";
    oprc = rslt.toString();
    screen.textContent = rslt;
  } catch (error) {
    screen.textContent = "Error";
  }
});

/* Creamos la constante y funcion para calcular la raíz cuadrada... */
const square = document.getElementById("square");
square.addEventListener("click", () => {
  try {
    rslt = Number(eval(Math.sqrt(oprc)));
    operation.textContent = "√(" + oprc + ")";
    oprc = rslt.toString();
    screen.textContent = rslt;
  } catch (error) {
    screen.textContent = "Error";
  }
});

/* Creamos la constante y funcion con el objetivo de cambiar el signo de los números... */
const sign = document.getElementById("signe");
sign.addEventListener("click", () => {
  try {
    const number = Number(oprc);
    rslt = -1 * number;
    oprc = rslt.toString();
    screen.textContent = rslt;
  } catch (error) {
    screen.textContent = "Error";
  }
});

/* Creamos la constante y funcion para dvdrdir 1 entre el número... */
const dvdr = document.getElementById("one-x");
dvdr.addEventListener("click", () => {
  try {
    rslt = Number(1 / eval(oprc));
    operation.textContent = "1/(" + oprc + ")";
    oprc = rslt.toString();
    screen.textContent = rslt;
  } catch (error) {
    screen.textContent = "Error";
  }
});
