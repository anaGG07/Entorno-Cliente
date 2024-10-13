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
 * ? EJERCICIO 11. MAPEAR NÚMEROS
 */

/**
 * @description: Recibe un array y una función. Se debe aplicar la función a cada elemento del array y devolver un nuevo array con los resultados aplicados.
 * @param {Array} aoArray
 * @param {Function} aoFunction
 * @returns {Array}
 *
 */
export const mapearNumeros = (aoArray = [], afFunction) => {
    return aoArray.map((lnElement) => afFunction(lnElement));
  };
  
  /**
   * ? EJERCICIO 12. COMBINAR OBJETOS
   */
  
  /**
   * @description: Recibe dos objetos (array/objeto). Debe combinar ambos en uno solo y devolverlo.
   * @param {Objet} aoCollect
   * @param {Objet} aoCollect2
   * @returns {Object}
   *
   */
  export const combinarObjetos = (aoCollect = {}, aoCollect2 = {}) => {
    if (Array.isArray(aoCollect) && Array.isArray(aoCollect2)) {
      return aoCollect.concat(aoCollect2);
    } else if (typeof aoCollect === "object" && typeof aoCollect2 === "object") {
      return { ...aoCollect, ...aoCollect2 };
    }
  };
  
  /**
   * ? EJERCICIO 13. EXTRAER PROPIEDADES
   */
  
  /**
   * @description: Recibe un objeto y un array. Debe devolver un nuevo objeto que contenga solo las propiedades especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en el nuevo objeto.
   * @param {Array} aoArray
   * @param {Objet} aoObject
   * @returns {Object}
   *
   */
  export const extraerPropiedades = (aoArray = [], aoObject = {}) => {
    const loNewObject = {};
  
    for (let loProperty of aoProperties) {
      if (aoObject.hasOwnProperty(loProperty)) {
        loNewObject[loProperty] = aoObject[loProperty];
      }
    }
    return loNewObject;
  };
  
  // DATOS DE PRUEBA
  // const aoObject = {
  //   nombre: "Juan",
  //   edad: 30,
  //   profesion: "Ingeniero"
  // };
  
  // const aoProperties = ["nombre", "profesion", "pais"];
  
  /**
   * ? EJERCICIO 14. RANGO DE NÚMEROS
   */
  
  /**
   * @description: Recibe dos números (inicio, fin). Debe devolver un array que contenga todos los números en ese rango. Ambos incluidos.
   * @param {Number} anStart
   * @param {Number} anEnd
   * @returns {Object}
   *
   */
  export const rangoNumeros = (anStart = 0, anEnd = 0) => {
    const laRange = [];
  
    if (typeof anStart == "number" && typeof anEnd == "number") {
      while (anStart <= anEnd) {
        laRange.push(anStart++);
      }
    }
    return laRange;
  };
  
  /**
   * ? EJERCICIO 15. INVERTIR CADENA
   */
  
  /**
   * @description: Recibe una cadena y devuelve una nueva cadena con los caracteres en orden inverso
   * @param {String} asWords
   * @returns {String}
   */
  export const invertirCadena = (asWords = "") => {
    const array = asWords.split(" ");
  
    return array
      .map((lsWord) => {
        return lsWord.split("").reverse().join("");
      })
      .join(" ");
  };
  
  /**
   * ? EJERCICIO 16. CAPITALIZAR PALABRAS
   */
  
  /**
   * @description: Recibe una cadena y devuelve una nueva cadena con el primer carácter de cada palabra en mayúscula
   * @param {String} asWords
   * @returns {String}
   */
  export const capitalizarPalabras = (asCharacters = "") => {
    return asCharacters
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };
  
  /**
   * ? EJERCICIO 17. CAPITALIZAR PALABRAS
   */
  
  /**
   * @description: Recibe una matriz y un número (escalar). Devuelve la matriz con los resultados de "matriz * escalar"
   * @param {Array} aoMatrix
   * @param {Number} anScalar
   * @returns {String}
   */
  export const multiplicarMatrizPorEscalar = (aoMatrix = [], anScalar = 0) => {
    return aoMatrix.map((loRow) =>
      loRow.map((lnElement) => lnElement * anScalar)
    );
  };
  
  /**
   * ? EJERCICIO 18. COMBINACIÓN DE ARRAYS
   */
  
  /**
   * @description: Recibe "creciente/decreciente" junto con un número de arrays. Devuelve un array con todos los elementos de los arrays ordenados de forma crec/dec. Por defecto se hará de forma creciente.
   * @param {String} asOrder
   * @param {Array} anCollect
   * @returns {Array}
   */
  export const combinarArrays = (asOrder = "ASC", ...anCollect) => {
    let loArr = [];
  
    anCollect.map((loA) => {
      loArr = loArr.concat(...loA).sort();
    });
  
    if (asOrder == "DESC") loArr.reverse();
    return loArr;
  };
  
  /**
   * ? EJERCICIO 19. PALÍNDROMO
   */
  
  /**
   * @description: Recibe una palabra y devuelve "true" si se lee igual de derecha a izquierda y viceversa, o "false" en caso contrario.
   * @param {String} aoWord
   * @returns {Boolean}
   */
  export const esPalindromo = (aoWord = "") => {
    return aoWord === aoWord.split("").reverse().join("");
  };
  
  /**
   * ? EJERCICIO 20. DIFERENCIA DE ARRAYS
   */
  
  /**
   * @description: Recibe dos arrays que serán comparados y debe devolver un nuevo array con las coincidencias entre ambos.
   * @param {Array} aoArray1
   * @param {Array} aoArray2
   * @returns {Array}
   */
  export const diferenciaArrays = (aoArray1 = [], aoArray2 = []) => {
    return aoArray2
      .filter((num) => !aoArray1.includes(num))
      .concat(aoArray1.filter((num) => !aoArray2.includes(num)))
      .sort();
  };
  
  // EJERCICIO 20 SIN REFACTORIZAR
  // const diferecniaArrays = (aoArray1 = [], aoArray2 = []) => {
  //   const loArray = aoArray1.filter(num => !aoArray2.includes(num));
  //  return aoArray2.filter(num => !aoArray1.includes(num)).concat(loArray).sort();
  // }
  