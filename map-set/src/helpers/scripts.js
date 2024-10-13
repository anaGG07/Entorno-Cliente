

/**
 * @description Dado un string, usa Map para contar la frecuencia de cada palabra
 * @param {String} asText
 * @return {Object}
 */
export const contarFrecuenciaPalabras = (asText = "") => {
    const wordCount = new Map();
    asText.split(" ").forEach((word) => {
        wordCount.set(word, (wordCount.get(word) || 0) +1)
    })
  
  return wordCount
}

/**
 * @description Recibe un array y verifica que todos los elementos de un array son únicos. Devuelve true/false
 * @param {Array} asArray
 * @return {Object}
 */
export const verificarUnico = (asArray) => asArray.length === new Set(asArray).size;

//export const verificarUnico = (asArray) => asArray.every(num => asArray.filter(x => x === num).length === 1);



/**
 * @description Recibe un array y desordena el contenido
 * @param {Array} aoArray
 * @return {Object}
 */
export const ofuscarArray = (aoArray = []) => {
  
  const loArray = [];
  let loRandom = new Set();
   
    while(loRandom.size < aoArray.length){
      loRandom.add(Math.floor(Math.random() * aoArray.length))
    }
    
    aoArray.forEach((num, indice) => {
      loArray[indice] = aoArray[[...loRandom][indice]]
    })
    
    return loArray
    
  }


  // REFACTORIZACIÓN EJERICIO ANTERIOR
export const ofuscarArray2 = (aoArray = []) => {
    return aoArray
      .map(value => ({ value, sort: Math.random() }))  // Mapear cada valor con un número aleatorio (clave:valor)
      .sort((a, b) => a.sort - b.sort)                 // Ordenar según el valor aleatorio
      .map(({ value }) => value);                      // Devolver solo los valores ya mezclados (se elimina el valor "sort" utilizando desestructuración.)
  }
  