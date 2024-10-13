//---------- Glosario de nomenclaturas ------------
/**
 * 1ª letra es el ámbito: [local(l), global(g), argumento(a), objeto(o)]
 * 2ª letra es el tipo de dato: [boolean(b), String(s), Number(n), Double(d)...]
 * 3ª letra(opcional), complementa el tipo de dato [BigInt(bi)...]
 * Variable de retorno -> _rt
 * Ejemplo: let ls_cadena = "ejemplo"
 */

// --------- Declaracion de funciones ---------

/**
 * ? FUNCIÓN 1
 */

/**
 * @description: Este es un ejemplo de como se declara una funcion en JS
 * @param: No recibe parametros
 * @returns: No retorna nada
 *
 */
export function saludar() {
  console.log("Hola mundo");
}

/**
 * ? FUNCIÓN 2
 */

/**
 * @param {String} as_nombre
 * @returns {String}
 * @description: Esta funcion recibe un parametro y retorna un saludo
 */
export function saludar2(as_nombre) {
  return `Hola  ${as_nombre ?? "Desconocido"}`;
}

/**
 * ? FUNCIÓN 3
 */

/**
 * @param {Number} an_numero
 * @description: Retorna si el parametro es positivo, negativo o cero
 * @returns {String}
 */
export function evaluarNumeros(an_numero) {
  return an_numero === 0
    ? "es cero"
    : an_numero > 0
    ? "es positivo"
    : "es negativo";
}

/**
 * ? FUNCIÓN 4
 */

/**
 * @param {Number} an_numero
 * @description: Retorna si el parametro es positivo, negativo o cero y comprueba que el parametro sea 'number'
 * @returns {Number}
 */
export function evaluarNumeros2(an_numero) {
  return typeof an_numero !== "number"
    ? "no es un numero"
    : evaluarNumeros(an_numero);
  //return typeof numero !== 'number' ? "no es un numero" : numero === 0 ? "es cero" : numero > 0 ? "es positivo" : "es negativo";
}

/**
 * ? FUNCIÓN 5
 */

/**
 * @param {Number} an_numero
 * @description: Comprueba si el parametro es par o impar
 * @returns {boolean}
 */
export const esPar = (an_numero) => {
  //return typeof numero !== 'number' ?  NaN : numero % 2 === 0;
  return !isNaN(an_numero) ? an_numero % 2 === 0 : NaN;
};

/**
 * ? FUNCIÓN 6
 */

/**
 * @description: Comprueba si el parametro es un numero primo. Si no se le pasa parametro, coge 0
 * @param {Number} an_num
 * @returns {boolean}
 *
 */
export const esPrimo = (an_num = 0) => {
  // Por defecto se toma el argumento como 'primo'
  let lb_rt = true;

  // Si el argumeno es 2, automáticamente es 'primo'
  if (an_num !== 2) {
    // Si es par, no es 'primo'
    if (esPar(an_num)) {
      lb_rt = !lb_rt;
    } else {
      // Se evalúan todos los valores inferiores o iguales a la raíz cuadrada del argumento.
      // Si el módulo es cero, no será 'primo'
      let lb_continue = true;
      for (let ln_i = 2; ln_i <= Math.sqrt(an_num, 2) && lb_continue; ln_i++) {
        // Si algún modulo es cero, se deja de comprobar y sale del bucle.
        lb_continue = an_num % ln_i !== 0;
      }
      lb_rt = lb_continue;
    }
  }

  return lb_rt;
};

/**
 * ? FUNCIÓN 7
 */

/**
 * @description: Realiza el factorial de un numero
 * @param {Number} an_number
 * @returns {Number}
 * @error NaN
 */
export const factorial = (an_number = 1) => {
  // Si el argumento no es un numero o negativo, no se hace la función.
  let ln_rt = typeof an_number !== "number" || an_number < 0 ? NaN : 1;

  // Se comprueba que se puedan realizar los cálculos
  if (!!ln_rt) {
    // Se realiza una operación recursiva siempre que el argumento sea > 1
    // llamando a la propia función con (n-1) y multiplicándolo por el argumento.
    ln_rt = an_number > 1 ? factorial(an_number - 1) * an_number : ln_rt;
  }
  return ln_rt;

  // OPCIÓN SIN RECURSIVIDAD UTILIZANDO BUCLE 'FOR'
  // let ln_rt = typeof an_number !== 'number' || an_number < 0  ? NaN : 1
  // if(!!ln_rt){
  //  for(let ln_i = 1; ln_i <= an_number; ln_i++){
  //    ln_rt *= ln_i;
  //  }
  // }
  // return ln_rt
};

/**
 * ? FUNCIÓN 8
 */

/**
 * @description: Resolución de una ecuación de segundo grado
 * @param {Number} ln_a
 * @param {Number} ln_b
 * @param {Number} ln_c
 * @returns {Number}
 * @error null
 */
export const equation = (an_a = 0, an_b = 0, an_c = 0) => {
  // Variables de salida
  let ln_rt1 = 0;
  let ln_rt2 = 0;
  let ln_rt = null;

  // Se comprueba que se pueda realizar la ecuación
  if (!!an_a && typeof an_b === "number" && typeof an_c === "number") {
    ln_rt1 = (-an_b + Math.sqrt(an_b * an_b - 4 * an_a * an_c, 2)) / (2 * an_a);
    ln_rt2 = (-an_b - Math.sqrt(an_b * an_b - 4 * an_a * an_c, 2)) / (2 * an_a);

    // Se crea el objeto de salida ln_rt con los valores obtenidos en la ecuación
    ln_rt = { ln_rt1, ln_rt2 };
  }
  return ln_rt;
};

/**
 * ? FUNCIÓN 9
 */

/**
 * @description: Dado un array de números, calcula: máximo, mínimo y mediana
 * @param {array} an_array
 * @returns {object}
 * @error null
 */
export const operations = (an_array) => {
  // Se asignan los valores límite (mínimos y máximos)
  let ln_rt = null;
  let ln_max = -Infinity,
    ln_min = Infinity,
    ln_av = 0,
    ln_med;

  // Se comprueba que todos los elementos sean números
  if (an_array.every((ln_number) => typeof ln_number === "number")) {
    an_array.forEach((ln_num) => {
      ln_max = ln_num > ln_max ? ln_num : ln_max;
      ln_min = ln_num < ln_min ? ln_num : ln_min;
      // Se aprovecha el bucle para sumar todos los elementos
      ln_av += ln_num;
    });

    // Se calcula la media
    let ln_size = an_array.length;
    ln_av /= ln_size;

    let ln_sort = an_array.sort();

    // Comprobar si el tamaño del array es par o impar
    if (esPar(ln_size)) {
      let ln_div = ln_size / 2;
      // Como se empieza a contar desde 0, a la posición encontrada se le resta 1 para sumar las dos posiciones centrales.
      ln_med = (an_array[ln_div] + an_array[ln_div - 1]) / 2;
    } else {
      // Para un tamaño impar, se divide entre 2 y se trunca.
      ln_med = ln_sort[parseInt(ln_size / 2)];
    }
    ln_rt = { ln_max, ln_min, ln_av, ln_med };
  }

  return ln_rt;
};

/**
 * ? FUNCIÓN 10
 */

/**
 * @description: Dado un array de números, calcular los pares mediante metodos de arrays
 * @param {array} an_array
 * @returns {object}
 * @error null
 */
export const pares = (an_array = []) =>
  an_array.filter((ln_num) => ln_num % 2 === 0);

// FORMA LARGA
// export const pares = (an_array=[]) => {
//   let ln_pares = an_array.filter(ln_num => ln_num % 2 === 0);
//   return ln_pares;
// }

/**
 * ? FUNCIÓN 11
 */

/**
 * @description: Dado un array de números, devolver el ultimo numero impar
 * @param {array} an_array
 * @returns {object}
 * @error null
 */
export const lastImpar = (an_array = []) =>
  an_array.filter((ln_num) => ln_num % 2 !== 0).pop();

//FORMA LARGA
//  export const lastImpar = (an_array=[]) => {
//   let ln_impares = an_array.filter(ln_num => ln_num % 2 !== 0);
//   return ln_impares.pop();
//  }

// <-ES14 (2023) VERSION 2->
//export const lastImp = (an_array = []) => evaluarNumeros.findLast(n => n % 2 !== 0);

/**
 * ? FUNCIÓN 12
 */

/**
 * @description: Dado un array de ciudades, buscar la ciudad dada en el segundo parámetro y si la encuentra, la sustituye por el tercer parámetro.
 * @param {array} asCities
 * @param {String} asOldCity
 * @param {String} asNewCity
 * @returns {Array}
 */

export const replaceCity = (asCities = [], asOldCity, asNewCity) => {
  return asCities.map((ln_city) =>
    ln_city === asOldCity ? asNewCity : ln_city
  );
};

/**
 * ? FUNCIÓN 13
 */

/**
 * @description: Filtrar las transacciones cuyo monto sea mayor que 12, ordenadas de mayor a menor
 * @param {Array} aoTrans
 * @returns {Array}
 *
 */
export const filterTrans = (aoTrans = []) => {
  return aoTrans
    .filter((lnTransaction) => lnTransaction.mont > 12)
    .sort((lnA, lnB) => lnB.mont - lnA.mont);
};

/**
 * ? FUNCIÓN 14
 */

/**
 * @description: Buscar la transacción por la dirección, y devolver cuántas transacciones hay mayores y menores a la suya
 * @param {Array} aoArrayTransactions
 * @param {String} asAdress
 * @returns {Object}
 */
export const compareTrans = (aoTransactions = [], asAdress) => {
  let lnBigger = 0;
  let lnSmaller = 0;

  const loCorrect = aoTransactions.find(
    (loTransaction) => loTransaction.direction === asAdress 
  );

  aoTransactions.forEach((loTransaction) => 
    loTransaction.mont > loCorrect.mont
      ? lnBigger++
      : loTransaction.mont != loCorrect.mont
      ? lnSmaller++
      : lnSmaller
  );

  return { lnBigger, lnSmaller };
};


/**
 * ? FUNCIÓN 15
 */

/**
 * @description: Valida que todos los bloques mantienen la integridad de transacciones. Se le pasa un bloque y devuelve true si todos los bloques son válidos, y false en caso contrario.
 * @param {Array} asBlocks
 * @returns {Boolean}
 */
export const validateBlocks = (asBlocks = []) => {
  let lnPrevHas;
  let lbValid = true;

  asBlocks.forEach((loTransaction) => {
    loTransaction.prevHas === lnPrevHas || !loTransaction.prevHas
      ? (lnPrevHas = loTransaction.hash)
      : (lbValid = false);
  });

  return lbValid;
};

/**
 * ? FUNCIÓN 16
 */

/**
 * @description: Usando reduce, obten el máximo de un array
 * @param {Array} aoNumbers
 * @returns {Number}
 */
export const reduceArray = (aoNumbers = []) => {
  return aoNumbers.reduce((lnAcc, lnNumber) =>
    lnAcc > lnNumber ? lnAcc : lnNumber
  );
};

/**
 * ? FUNCIÓN 17
 */

/**
 * @description: Usando reduce, elimina los duplicados de un array
 * @param {Array} aoNumbers
 * @returns {Number}
 */
export const reduceArray2 = (aoNumbers = []) => {
  return aoNumbers.reduce((anAcc, anNumber) => {
    if (!anAcc.find(anItem => anItem === anNumber)) { 
      anAcc.push(anNumber);
    }
    return anAcc;
  }, []);
};

/**
 * ? FUNCIÓN 18
 */

/**
 * @description: Dado un array de nombres y un limitador numérico, asignar a cada nombre un número aleatorio sin exceder el límite.
 * @param {Array} aoNames
 * @param {Number} anLimit
 * @returns {Object}
 */
export const aleatorio = (aoNames = [], anLimit) => {
  const loNames = [...aoNames]; // copia del argumento array
  let lnCounter = 1;
  const loRtn = [];

  if (anLimit >= loNames.length) {
    aoNames.map(() => {
      let lnValue = Math.floor(Math.random() * loNames.length); // numero aleatorio
      let lsName = loNames.splice(lnValue, 1)[0];
      loRtn[lsName] = lnCounter++;
    });
  }

  return loRtn;
};

/* EJERCICIO DESARROLLADO
let aoNames = ["ana","luis", "sara", "victor", "bon", "casu"]

const aleatorio = (aoNames = [], number) => {
  const array = [];
  
  if (number >= aoNames.length){
    let contador = 0;
    
      const numeros = [];
      
      while(numeros.length < aoNames.length){
        let random = Math.floor(Math.random() * aoNames.length) +1;
        
       let contains = numeros.filter((n) => n === random);
        let b = !!contains[0]
       if(!b){
         //console.log(contains, random, "r")
         //console.log(numeros, "n1")
         numeros.push(random)
         //console.log(numeros, "n2")
       };
        
    }
    aoNames.map((name) => {
    array[name] = numeros[contador++]
  });
  }
 
  return array
  
}

*/


// ? SEGUNDA FORMA DE RESOLVER EJERCICIO 18
/**
 * @description: Dado un array de nombres y un limitador numérico, asignar a cada nombre un número aleatorio sin exceder el límite.
 * @param {Array} aoNames
 * @param {Number} anLimit
 * @returns {Object}
 */
export const aleatorio2 = (aoNames = [], anLimit) => {
  const loSets = [];
  
  if (anLimit >= aoNames.length){
    
      const loNumberSet = [];
      
      while(loNumberSet.length < aoNames.length){
         let lnRandom = Math.floor(Math.random() * aoNames.length) +1;
         if (!loNumberSet.filter((n) => n === lnRandom)[0]) loNumberSet.push(lnRandom);
      }
    
    // Asignar a cada nombre un número aleatorio del loSets
    let lnContador = 0;
    aoNames.map((name) => loSets[name] = loNumberSet[lnContador++]);
  }
 
  return loSets
  
}


/**
 * ? FUNCIÓN 18
 */

/**
 * @description: Dado un array de nombres y un limitador numérico, asignar a cada nombre un número aleatorio sin exceder el límite.
 * @param {Array} aoFact
 * @returns {Object}
 */
export const calcularFacturacion = (aoFact = []) => {
  return aoFact.reduce((acumulador, actual) => {
    if (!acumulador[actual.nombre]) {
      acumulador[actual.nombre] = 0; 
    }
    acumulador[actual.nombre] += actual.total; 
    return acumulador;
  }, {});
}

/**
 * const facturas  = [
  {nombre: "Luis", total:300, cpu: [60, 90, 10]},
  {nombre: "Sara", total:200, cpu: [50, 90, 30]},
  {nombre: "Sara", total:100, cpu: [70,70,80]},
  {nombre: "Carlos", total:300, cpu: [90,90,90]},
  {nombre: "Luis", total:200, cpu: [100,70,40]},
]

const calcularFacturacion = (facturas = []) => {
  const resultado = facturas.reduce((acumulador, actual) => {
 
    if (!acumulador[actual.nombre]) {
      acumulador[actual.nombre] = 0; 
    }
    
    acumulador[actual.nombre] += actual.total;
    return acumulador;
  }, {});

  
  return Object.keys(resultado).map(nombre => ({
    nombre: nombre,
    total: resultado[nombre]
  }));
}

console.log(calcularFacturacion(facturas));
 */

/**
 * ? FUNCIÓN 19
 */

/**
 * @description: Dado un array de nombres y un limitador numérico, asignar a cada nombre un número aleatorio sin exceder el límite.
 * @param {Array} aoList
 * @param {Number} anNum
 * @returns {String}
 */
export const eleccionDelegado = (aoList = [], anNum) => {
  if (!Array.isArray(aoList) && typeof anNum == 'Number'){
    return "Error";
  } else {
    let lnRandom = Math.floor(Math.random() * (anNum +1));
    return aoList[lnRandom]
  }
}


/**
 * @description: Dado un array de palabras, contar cuantas vocales hay en total.
 * @param {Array} aoList
 * @returns {Object}
 */
export const contarVocales = (aoList = []) => {
  let lsWords = [];
  
  for (let element of aoList) {
    lsWords = [...lsWords, ...element];
  }
 
  const vocales = ['a', 'e', 'i', 'o', 'u'];


  return lsWords.reduce((acumulador, actual) => {
    if (vocales.includes(actual.toLowerCase())) {
      acumulador[actual] = (acumulador[actual] || 0) + 1;
    }
    return acumulador;
  }, {});
};


/**
 * @description: Dado un array de palabras, devolver la palabra con mayor longitud.
 * @param {Array} aoList
 * @returns {Object}
 */
export const mayorLong = (aoList = []) => {
  aoList.reduce((acumulador, actual) => actual.length > acumulador.length ? actual : acumulador, ""); 
  return {palabraLarga:palabraLarga.length};
};

/**
 * @description: Dado un array de palabras, eliminar las duplicadas.
 * @param {Array} aoList
 * @returns {Object}
 */
export const eliminarDup = (aoList = []) => {
  return [...new Set(aoList)];
};


/**
 * @description: Dado un array de palabras, crear un objeto cuya clave sea la palabra y valor sea el numero de veces que aparece.
 * @param {Array} aoList
 * @returns {Object}
 */
export const contPalabras = (aoList = []) => {
  
};



/**
 * @description: Dado un array de palabras, contar cuantas vocales hay en total.
 * @param {Array} aoList
 * @returns {Object}
 */
export const contarVocales2 = (aoList = []) => {
  lsWords.reduce(
    (acumulador, actual) => (acumulador += actual.match(/[aeiou]/g).length), 0);
};