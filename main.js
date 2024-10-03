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
  pares,
  lastImpar,
  replaceCity,
  filterTrans,
  compareTrans,
  validateBlocks,
  
} from "./helpers/script.js";

import { 

  
 } from "./helpers/ejUD1.js"

// --------- Llamada a la funcion ---------

// EJERCICIO 1
// saludar();

// EJERCICIO 2
// console.log(saludar2());

// EJERCICIO 3
// console.log(evaluarNumeros(0));

// EJERCICIO 4
// console.log(evaluarNumeros2(0));

// EJERCICIO 5
// console.log(esPrimo(5));

// EJERCICIO 6
// console.log(esPar(4));

// EJERCICIO 7
// console.log(factorial(20));

// EJERCICIO 8
// console.log(equation(2,85,2));

// EJERCICIO 9
// const ga_array = [1, 2, 5, 8, 9]
// console.log(operations(ga_array));

// EJERCICIO 10
// console.log(pares(ga_array));

// EJERCICIO 11
// console.log(lastImpar(ga_array));

// EJERCICIO 12 
// const ga_array2 = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'];
// console.log(replaceCity(ga_array2, 'Madrid', 'Madrid Capital'));

// EJERCICIO 13
// const transacciones = [
//   {id:1, mont: 8, direccion: '0xabc'},
//   {id:2, mont: 15, direccion: '0xdfe'},
//   {id:3, mont: 22, direccion: '0xjkl'},
//   {id:4, mont: 11, direccion: '0xmnq'},
//   ]

// console.log(filterTrans(transacciones));


// EJERCICIO 14
// const transacciones2 = [
//   {id:1, mont: 8, direction: '0xabc'},
//   {id:2, mont: 15, direction: '0xdfe'},
//   {id:3, mont: 22, direction: '0xjkl'},
//   {id:4, mont: 11, direction: '0xmnq'},
//   ]

// console.log(compareTrans(transacciones2, '0xabc'));


// EJERCICIO 15
const bloques = [
  {id:1, hash: 'abc123', prevHas: null},
  {id:2, hash: '0xjkl', prevHas: 'abc123'},
  {id:3, hash: '0xmnq', prevHas: '0xjkl'},
  {id:4, hash: 'jkl012', prevHas: '0xmnq'},
  ]

console.log(validateBlocks(bloques));


//-------- Inicio de la aplicacion ---------

// document.addEventListener("DOMContentLoaded", () => {
//   console.log(esPrimo(1));
// });
