import {
  saludar,
  saludar2,
  evaluarNumeros,
  evaluarNumeros2,
  esPrimo,
  esPar,
  factorial,
  equation,
  operations,
} from "./helpers/script.js";

// --------- Llamada a la funcion ---------
saludar();
console.log(saludar2());
console.log(evaluarNumeros(0));
console.log(evaluarNumeros2(0));
console.log(esPrimo(5));
console.log(esPar(4));
console.log(factorial(20));
console.log(equation(2,85,2));
let ga_array = [1, 5, 8, 9]
console.log(operations(ga_array));

//-------- Inicio de la aplicacion ---------

document.addEventListener("DOMContentLoaded", () => {
  console.log(esPrimo(1));
});
