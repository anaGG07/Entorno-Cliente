import { generateProductMap , generateProductMapV2, getDataProducts, modificarTallas } from "./helpers/scripts";
const url = import.meta.env.VITE_URL;
const urlProducts = import.meta.env.VITE_URL_PRODUCTS;
const urlVentas = import.meta.env.VITE_URL_VENTAS;

// FUNCION QUE DEVUELVE LA PROMESA CON LA DATA
// const result = await getDataProducts(urlProducts);
// console.log(result);


// EJERCICIO 1
// const resultFunction = await generateProductMap(urlProducts, "save");
// console.log("resultado de la funcion: ", resultFunction);

// EJERCICIO 1.1
// const resultFunctionV2 = await generateProductMapV2(getDataProducts,urlProducts, "save");
// console.log("resultado de la funcion: ", resultFunctionV2);

const resultFunction3 = await modificarTallas(urlProducts);
console.log("resultado de la funcion: ", resultFunction3);