import { createProduct, insertData, storedProducts } from "./helpers/scripts";



// const dataParaInsertar = {
//     productId : 1,
//     precios: [23, 26, 21.75, 19.99]
// }

// insertData(dataParaInsertar);


const productInsert = {
    nombre: "Producto Nuevo",
    precio: 300,
    imagen: "https://via.placeholder.com/150",
    categoria: "Material Escolar I" // Nueva categoría que no existe en `data.json`
  };
  
  
  // createProduct(productInsert);

  storedProducts();