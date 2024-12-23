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
 * ? EJERCICIO 1. SUMA DE ARRAYS
 */

/**
 * @description: Función que toma dos arrays (arr1 y arr2) del mismo tamaño. La función debe devolver un nuevo array que contenga la suma de los elementos correspondientes.
 * @param {Object} aoArr1
 * @param {Object} aoArr2
 * @returns {Object}
 *
 */
export const sumaArrays = (aoArr1, aoArr2) => {
  if (aoArr1.length == aoArr2.length) {
    const loArr3 = aoArr1.concat(aoArr2);
    return loArr3.reduce((acc, num) => acc + num, 0);
  }
};

/**
 * ? EJERCICIO 2. DUPLICADOS
 */

/**
 * @description: Función que toma un array (arr), elimina los elementos duplicados y devuelve un nuevo array con elementos unicos, manteniendo el orden original.
 * @param {Object} aoArr1
 * @returns {Object}
 *
 */
export const eliminarDuplicados = (aoArr1 = []) => {
  return [...new Set(aoArr1)];
};

/**
 * ? EJERCICIO 3. FILTRAR NUMEROS PARES
 */

/**
 * @description: Toma un array de numeros y devuelve un nuevo array con solo los numeros pares.
 * @param {Object} aoArr
 * @returns {Object}
 *
 */
export const filtrarPares = (aoArr = []) => {
  return aoArr.filter((anNum) => anNum % 2 === 0); // Crea un array con todos los elementos que cumplen la condición.
};

/** RESOLUCION EJERCICIO 3 UTILIZANDO REDUCE
 * /**
 * @description: Toma un array de numeros y devuelve un nuevo array con solo los numeros pares.
 * @param {Object} aoArr
 * @returns {Object}
 *
 *
export const filtrarPares = (aoArr = []) => {
  return aoArr.reduce((acumulador, num) => {
    if(num % 2 === 0){
      acumulador.push(num);
    }else {
      return acumulador
    } 
  })
};
 */


/**
 * ? EJERCICIO 4. UNIÓN DE ARRAYS
 */

/**
 * @description: Acepta un número variable de arrays y los combina en uno solo.
 * @param {Object} aoArr
 * @returns {Object}
 *
 */
export const unirArrays = (...aoArr) => {
  return aoArr.reduce((acumulador, actual) => acumulador.concat(actual));
};

/**
 * ? EJERCICIO 5. CONTEO DE PALABRAS
 */

/**
 * @description: Toma una cadena de texto y devuelve un objeto que cuente cuántas veces aparece cada palabra en el texto.
 * @param {String} asCadena
 * @returns {Object}
 *
 */
export const contarPalabras = (asCadena = "") => {
  const lsWords = asCadena.split(" ");

  return lsWords.reduce(
    (acumulador, actual) => (
      (acumulador[actual] = (acumulador[actual] || 0) + 1), acumulador
    ),
    {}
  );
};

// FUNCIONAMIENTO

// Primera palabra: "hola":
// acumulador inicialmente es {}.
// acumulador["hola"] es undefined.
// acumulador["hola"] || 0 devuelve 0.
// 0 + 1 es 1.
// Ahora, acumulador["hola"] se actualiza a 1, es decir, el acumulador ahora es: { hola: 1 }.

// Segunda palabra: "mundo":
// acumulador["mundo"] es undefined porque "mundo" no ha aparecido antes.
// acumulador["mundo"] || 0 devuelve 0.
// 0 + 1 es 1.
// Ahora, acumulador["mundo"] se actualiza a 1, es decir, el acumulador ahora es: { hola: 1, mundo: 1 }.

// Tercera palabra: "hola" (nuevamente):
// acumulador["hola"] es 1 porque ya ha aparecido antes.
// acumulador["hola"] || 0 devuelve 1.
// 1 + 1 es 2.
// Ahora, acumulador["hola"] se actualiza a 2, es decir, el acumulador ahora es: { hola: 2, mundo: 1 }.

/**
 * ? EJERCICIO 6. ORDENAR NÚMEROS
 */

/**
 * @description: Toma un array de números y lo ordena de menor a mayor.
 * @param {Objet} aoNumbers
 * @returns {Object}
 *
 */
export const ordenarNumeros = (aoNumbers = []) => {
  return aoNumbers.sort();
};

/**
 * ? EJERCICIO 7. ELIMINAR ELEMENTOS
 */

/**
 * @description: Recibe un array y un elemento. Elimina la primera aparición de ese elemento.
 * @param {Objet} aoCollect
 * @param {String} asElement
 * @returns {Object}
 *
 */
export const eliminarElemento = (aoCollect = [], asElement) => {
  let lnPos = aoCollect.indexOf(asElement);
  if (lnPos !== -1) {
    aoCollect.splice(lnPos, 1);
  }
  return aoCollect;
};

/**
 * ? EJERCICIO 8. MAXIMO Y MINIMO
 */

/**
 * @description: Recibe un array de números y devuelve un objeto con las propiedades max y min, que contengan el valor máximo y mínimo del array.
 * @param {Array} aoNumbers
 * @returns {Object}
 *
 */
export const encontrarMaxMin = (aoNumbers = []) => {
  const loMaxMin = {};
  aoNumbers.sort();
  loMaxMin["max"] = aoNumbers[aoNumbers.length - 1];
  loMaxMin["min"] = aoNumbers[0];

  return loMaxMin;
};

// OPCION MAS EFICIENTE
// export const encontrarMaxMin = (aoNumbers = []) => {
//   return {
//     max: Math.max(...aoNumbers), -----> Math.max(...aoArr): Usa el spread operator (...) para pasar todos los elementos del array como argumentos a Math.max, que devuelve el valor máximo.
//     min: Math.min(...aoNumbers)
//   };
// }

/**
 * ? EJERCICIO 9. BUSCAR ELEMENTO
 */

/**
 * @description: Recibe un array y un elemento. Debe devolver el índice de la primera aparición de elemento en el array o -1 si no lo encuentra
 * @param {Array} aoNumbers
 * @param {String} asElement
 * @returns {Number}
 *
 */
export const buscarElemento = (aoNumbers = [], asElement) => {
  return aoNumbers.indexOf(asElement);
};

/**
 * ? EJERCICIO 10. DIVIDIR EN FRAGMENTOS
 */

/**
 * @description: Recibe un array y un número entero (tamaño). Debe devolver el array en fragmentos del tamaño del parámetro introducido.
 * @param {Array} aoArray
 * @param {String} anSize
 * @returns {Array}
 *
 */
export const dividirFragmento = (aoArray = [], anSize) => {
  let loNewCollect = [];

  while (aoArray.length) {
    loNewCollect.push(aoArray.slice(0, anSize)); // se añade al nuevo array la portcion obtenida con "slice"
    aoArray = aoArray.slice(anSize); // Se eliminan los "anSize" primeros elementos del array original.
  }

  return loNewCollect;
};
