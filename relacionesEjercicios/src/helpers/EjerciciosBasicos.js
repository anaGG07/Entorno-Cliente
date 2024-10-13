//---------- Glosario de nomenclaturas ------------
/**
 * 1ª letra es el ámbito: [ local(l), global(g), argumento(a) ]
 * 2ª letra es el tipo de dato: [boolean(b), String(s), Number(n), Double(d), objeto(o)...]
 * 3ª letra(opcional), complementa el tipo de dato [BigInt(bi)...]
 * Variable de retorno -> _rt
 * Ejemplo: let ls_cadena = "ejemplo"
 */

// --------- Declaracion de funciones ---------

/**
 * ? EJERCICIO 1.
 */
/**
 * @description: Dado un array de números, utiliza los métodos filter y map para obtener los números pares y elevarlos al cuadrado.
 * @param {Array} aoNumbers
 * @returns {Array}
 */
export const paresAlCuadrado = (aoNumbers = []) => {
  return aoNumbers
    .filter((num) => num % 2 == 0)
    .map((numPar) => {
      return Math.pow(numPar, 2);
    });
};



/**
 * ? EJERCICIO 2.
 */

/**
 * @description: Dado un array de strings, usa reduce para concatenar todos los strings en una sola frase con espacios entre ellos.
 * @param {Array} aoStrings
 * @returns {String}
 */
export const unirStrings = (aoStrings = []) => {
  return aoStrings.reduce((acc, string) => {
    return acc.concat(" ", string);
  });
};
/**  VERSIÓN REFACTORIZADA
 * const unirStrings = (aoStrings = []) => aoStrings.join(" ");
 */



/**
 * ? EJERCICIO 3.
 */
/**
 * @description: Dado un array de numeros,usa some para verificar si existe algún número mayor a 100 y every para comprobar si todos los num. son positivos.
 * @param {Array} aoNumbers
 * @returns {Boolean}
 */
export const positivosMayorQue100 = (aoNumbers = []) =>
  aoNumbers.every((num) => num > 0) && aoNumbers.some((num) => num > 100);



/**
 * ? EJERCICIO 4.
 */
/**
 * @description: Dado un array de numeros desordenados, usar sort para ordenarlos de mayor a menor.
 * @param {Array} aoNumbers
 * @returns {Array}
 */
export const ordenarMayorAMenor = (aoNumbers) =>
  aoNumbers.sort((a, b) => b - a);



/**
 * ? EJERCICIO 5.
 */
/**
 * @description: Dado un array de números usar el método find para obtener el primer número divisible por 3. Usa el metodo findIndex para obtener el índice
 * @param {Array} aoNumbers
 * @returns {Object}
 */
export const divisiblePor3 = (aoNumbers = []) => {
  let lnNumber = aoNumbers.find((num) => num % 3 == 0);
  let lnIndex = aoNumbers.findIndex((num) => num === lnNumber);
  return { lnNumber, lnIndex };
};



/**
 * ? EJERCICIO 6.
 */
/**
 * @description: Dado un array de números, usa forEach para sumar todos los números.
 * @param {Array} aoNumbers
 * @returns {Number}
 */
export const sumaArray = (aoNumbers = []) => {
  let lnResultado = 0;
  aoNumbers.forEach((num, index) => {
    lnResultado += aoNumbers[index];
  }, 0);

  return lnResultado;
};



/**
 * ? EJERCICIO 7.
 */
/**
 * @description: Dado un array de números, usa slice para obtener los primeros 3 números y splice para eliminar los dos últimos elementos del array original.
 * @param {Array} aoNumbers
 * @returns {Object}
 */
export const usoSliceSplice = (aoNumbers = []) => {
  return {
    firstString: aoNumbers.slice(0, 3),
    originalArray: aoNumbers.splice(-2, 2),
  };
};



/**
 * ? EJERCICIO 8.
 */
/**
 * @description: Dado un objeto que representa un producto, usa Object.keys para obtener las claves del objeto y Object.values para obtener sus valores
 * @param {Object} aoProducts
 * @returns {Object}
 */
export const obtenerClaveValor = (aoProducts = {}) => {
    return { "claves" : Object.keys(aoProducts), "valores" : Object.values(aoProducts) }
};



/**
 * ? EJERCICIO 9.
 */
/**
 * @description: Dado un objeto que representa un coche, usa Object.entries para convertirlo en un array de pares clave-valor
 * @param {Object} aoCar
 * @returns {Object}
 */
export const convertirObjetoEnArray = (aoCar = {}) => Object.entries(aoCar);



/**
 * ? EJERCICIO 10.
 */
/**
 * @description: Dado un objeto de configuración, usa Object.assign para crear una copia del objeto con una propiedad adicional
 * @param {Object} aoConfig
 * @returns {Object}
 */
export const crearCopiaObjeto = (aoConfig = {}) => Object.assign({}, aoConfig, { nueva : "propiedad" });



/**
 * ? EJERCICIO 11.
 */
/**
 * @description: Crea un objeto que combine dos objetos dados usando el spread operator.
 * @param {Object} aoObj1
 * @param {Object} aoObj2
 * @returns {Object}
 */
export const combinarObjetos = (aoObj1 = {}, aoObj2 = {}) => {
    return { ...aoObj1, ...aoObj2 }
};



/**
 * ? EJERCICIO 12.
 */
/**
 * @description: Dado un objeto con varias propiedades, usa delete para eliminar una propiedad especifica.
 * @param {Object} aoObj
 * @param {String} asProperty
 * @returns {Object}
 */
export const eliminarPropiedad = (aoObj = {}, asProperty = "") => {
    delete aoObj[asProperty]
    return aoObj
};



/**
 * ? EJERCICIO 13.
 */
/**
 * @description: Dado un objeto que representa una cuenta de usuario, usa hasOwnProperty para comprobar si tiene una propiedad específica.
 * @param {Object} aoUserCount
 * @param {String} asProperty
 * @returns {Object}
 */
export const comprobarPropiedad = (aoObj = {}, asProperty = "") => aoObj.hasOwnProperty(asProperty)



/**
 * ? EJERCICIO 14.
 */
/**
 * @description: Dado un objeto, convierte todas sus claves a mayúsculas utilizando Object.keys y reduce.
 * @param {Object} aoOrders
 * @returns {Object}
 */
export const keyUppercase = (aoOrders = {}) => {
  const keys = Object.keys(aoOrders);

  return keys.reduce((acc, key) => {
    acc[key.toUpperCase()] = aoOrders[key];
    return acc;
  }, {});
};



/**
 * ? EJERCICIO 15.
 */
/**
 * @description: Dado un array de Objetos que representan estudiantes, usar filter y map para obtener los nombres de los estudiantes que tienen una calificación mayor o igual a 85.
 * @param {Array} aoStudents
 * @returns {Object}
 */
export const comprobarCalificaciones = (aoStudents = []) => aoStudents
.filter(est => est.calificacion > 85)
.map(estudiante => estudiante.nombre);



/**
 * ? EJERCICIO 16.
 */
/**
 * @description: Dado un array de productos, usa reduce para calcular el costo total de todos los productos multiplicando el precio por la cantidad.
 * @param {Array} aoProducts
 * @returns {Number}
 */
export const calcularCostoTotal = (aoProducts = []) => aoProducts.reduce((acc, product) => acc += product.precio * product.cantidad ,0)

/**
 * ? EJERCICIO 17.
 */
/**
 * @description: Dado un array de números y un objeto que clasifique esos números en pares e impares, usa forEach para llenar el objeto con los números correspondientes.
 * @param {Array} aoNumbers
 * @param {Object} aoObject
 * @returns {Number}
 */
export const rellenarObjeto = (aoProducts = [], aoObject = {}) => {

}


/**
 * ? EJERCICIO 20.
 */
/**
 * @description: Dado un array de objetos que representan compras con propiedades fecha y monto, usa sort para ordenar las compras por fecha (más reciente primero).
 * @param {Array} aoShopping
 * @returns {Object}
 */
export const ordenarCompras = (aoShopping = []) => aoShopping.sort((a, b) => b.fecha - a.fecha);
 