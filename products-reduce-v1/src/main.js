// importaciones librerias
import "./styles/tailwind.css"; // importación de estilos

// importaciones propias
import { products } from "./data/products.js";
import { calcTotalPrice, productsIva } from "./helpers/scripts.js";

// declaración de variables
const appDiv = document.getElementById("app");

// inicio de ejecución
appDiv.innerHTML = products
  .map(
    (product) => `
    <div class="bg-white rounded-lg shadow-md p-6 transformation duration-300 hover:scale-105 hover:shadow-xl">
      <div class="w-full h-40 mb-4 overflow-hidden">
        <img class="w-full h-full object-contain" src="${product.image}" alt="imagen" >
      </div>
      <h1 class="text-lg font-bold">${product.name}</h1>
      <h2 class="text-gray-500">${product.price}</h2>
    </div>
  `
  ); // Convierte el array de strings en un único string


