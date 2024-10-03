import {  products }  from "../data/products.js"


// ? FUNCIÓN 1
/**
 * @description: crear una funcion llamada, calcTotalPrice que obtenga la suma total de los productos incluyendo el iva de cada producto. Se le pasa como parametro un array de productos que contenga price.

 * @param {Array} aoProducts
 * @param {Number} anIva
 * @returns {Object}
 */
export const calcTotalPrice = (aoProducts = []) => {
    //return products.reduce((acc, product) => acc + product.price,0);

    aoProducts.map((product) => {
        if (products.price !== undefined){

        }
    })

    // Sumar con IVA
    return aoProducts.reduce((anAcc, anProduct) => {
        if (!!anProduct.price && !!anProduct.iva) {
            return anAcc + (anProduct.price * (1 + anProduct.iva)); 
        }
    }, 0); 
}


// ? FUNCIÓN 2
/**
 * @description: Función llamada productsIva que añada totdos los elementos de products, junto con el iva de cada producto. A dicha funcion se le pasara como parametro un objeto products y un numero que será el iva paraque valga para cualquier pais. Esta funcion debe verificar que el objeto tiene la clave price.
 * @param {Array} aoProducts
 * @param {Number} anIva
 * @returns {Object}
 */
export const productsIva = (aoProducts = []) => {
   return aoProducts.map((loProduct) => {
        const priceIva = loProduct.price * iva;
        loProduct.priceIva = priceIva;
    })
}
