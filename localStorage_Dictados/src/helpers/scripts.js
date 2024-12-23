// EJERCICIO 1

/**
 * @description crear una funcion llamada saveLocalStorage que le pase como parametro un array y como segundo parametro, una cadena de texto (clave).
 * Automaticamente realizara las siguientes acciones:

- comprobará que los parametros insertados son un array y una cadena de texto

- comprobará si existe o no la clave en localStorage, si existe mensaje (esta clave esta ya almacenada), si no, almacena toda la estructura en el localStorage
* @param {Array} aoArrData
* @param {String} asKey
* @return {String} 
*/
export const saveLocalStorage = (aoArrData, asKey) => {
  if (!Array.isArray(aoArrData) || typeof asKey !== "string") {
    throw new Error("Los argumentos no son válidos");
  }
  if (localStorage.hasOwnProperty(asKey)) {
    throw new Error("esta clave esta ya almacenada");
  }
  localStorage.setItem(asKey, JSON.stringify(aoArrData));
};

// EJERCICIO 2

/**
 * @description Función a la que se le pasa como parametro una cadena de texto (clave) y el array de usuarios, y automaticamente reaice las siguientes opciones:
- comprueba que se le ha pasado una cadena de texto
- verifica si la cadena de texto, es una clave del localStorage. Si no es una clave, error, si existe lo carga en el console.table el contenido
* @param {Array} aoArrData
* @param {String} asKey
* @return {String} 
*/
export const showUsers = (aoArrDara, asKey) => {
  if (!Array.isArray(aoArrDara) || typeof asKey !== "string") {
    throw new Error("Alguno de los argumentos no son válidos");
  }

  const data = localStorage.getItem(asKey);
  console.log("Esto es data " + data)
  if (!data) {
    throw new Error("El parametro no es una clave");
  } 

  console.table(JSON.parse(data));

};

// EJERCICIO 3, PRIMERA APARICIÓN DEL ELEMENTO

/**
 * @description Crear una funcion modifyStorage, que le pase como parametro una clave,
 * usuario y la nueva edad y automaticamente, si existe modificará la edad del usuario.
 * practicar a la primera ocurrencia, a la ultima ocurrencia, a uno concreto, a todos.
 * @param {String} asKey
 * @param {String} asUserName
 * @param {Number} asEdad
 * @return {String}
 */
export const modifyFirstElementLocalStorage = (asKey, asUserName,asEdad) => {
  // Validación de tipos de datos
  if (
    typeof asKey !== "string" ||
    typeof asUserName !== "string" ||
    typeof asEdad !== "number"
  ) {
    throw new Error("Alguno de los argumentos no es válido");
  }

  const loArray = JSON.parse(localStorage.getItem(asKey));
  console.log("esto es " + loArray)

  if (!Array.isArray(loArray)) {
    throw new Error("No es un array");
  }


  // Buscar el PRIMER usuario que coincide con el nombre
  const loUser = loArray.find((user) => user.name === asUserName);

  if (!loUser) {
    throw new Error("Usuario no encontrado");
  }

  // Modificar la edad del usuario
  loUser.edad = asEdad;

  // Guardar el array actualizado en localStorage
  localStorage.setItem("usuario", JSON.stringify(loArray));
};

//ULTIMA APARICIÓN DEL ELEMENTO

export const modifyLastElementLocalStorage = (asKey, asUserName,asEdad) => {
  // Validación de tipos de datos
  if (
    typeof asKey !== "string" ||
    typeof asUserName !== "string" ||
    typeof asEdad !== "number"
  ) {
    throw new Error("Alguno de los argumentos no es válido");
  }

  const loArray = JSON.parse(localStorage.getItem(asKey));
  console.log("esto es " + loArray)

  if (!Array.isArray(loArray)) {
    throw new Error("No es un array");
  }


  // Buscar el PRIMER usuario que coincide con el nombre
  const loUser = loArray.findLast((user) => user.name === asUserName);

  if (!loUser) {
    throw new Error("Usuario no encontrado");
  }

  // Modificar la edad del usuario
  loUser.edad = asEdad;

  // Guardar el array actualizado en localStorage
  localStorage.setItem("usuario", JSON.stringify(loArray));
};


//TODAS LAS APARICIONES DEL ELEMENTO

export const modifyAllElementsLocalStorage = (asKey, asUserName, asEdad) => {
  let lnRt = "No ha funcionado";
  
  // Validación de tipos de datos
  if (
    typeof asKey !== "string" ||
    typeof asUserName !== "string" ||
    typeof asEdad !== "number"
  ) {
    throw new Error("Alguno de los argumentos no es válido");
  }

  const loArray = JSON.parse(localStorage.getItem(asKey));
  if (!loArray) {
    throw new Error("El objeto obtenido con la clave "+ asKey + " no es un array");
  }


  loArray.forEach(loUser => {
    loUser.edad = asUserName === loUser.name ? (loUser.edad = asEdad) : loUser.edad;
    if (asUserName === loUser.name ) lnRt = "Ha funcionado";
  });

  // for (let loUser of loArray) {
  //   loUser.edad = asUserName === loUser.name ? (loUser.edad = asEdad) : loUser.edad;
  // }

  // Guardar el array actualizado en localStorage
  localStorage.setItem("usuario", JSON.stringify(loArray));

  return lnRt;
};



// PRUEBA, COGE PRIMERO O ÚLTIMO

const modifySelectedElementLocalStorage = (asKey, asUserName,asEdad, anOption = 0) => {
  // Validación de tipos de datos
  if (
    typeof asKey !== "string" ||
    typeof asUserName !== "string" ||
    typeof asEdad !== "number"
  ) {
    throw new Error("Alguno de los argumentos no es válido");
  }

  const loArray = JSON.parse(localStorage.getItem(asKey));
  console.log("esto es " + loArray)

  if (!Array.isArray(loArray)) {
    throw new Error("No es un array");
  }


  // Buscar el PRIMER usuario que coincide con el nombre
  const loUser = !anOption ? loArray.find((user) => user.name === asUserName) : loArray.findLast((user) => user.name === asUserName) ;

  if (!loUser) {
    throw new Error("Usuario no encontrado");
  }

  // Modificar la edad del usuario
  loUser.edad = asEdad;

  // Guardar el array actualizado en localStorage
  localStorage.setItem("usuario", JSON.stringify(loArray));
};



// EJERCICIO 4. OPCIÓN STRING
// ! EJERCICIO TIPO EXAMEN

/**
 * @description Crea una funcion que se le pase como parametros una clave (string), un string (texto a buscar), 
 * y automaticamente realice las siguientes opciones:
- buscará dentro de la clave del localStorage el elemento que le pasemos como segundo parametro
- Devuelve 0 si lo encuentra, 1 si no.

 * @param {String} asKey
 * @param {String} asText
 * @return {Number}
 */
export const searchElementLocalStorage = (asKey, asText) =>{

  if( typeof asKey !== 'string' || typeof asText !== 'string' ){
    throw new Error("Los argumentos no son válidos")
  }

  const loArray = JSON.parse(localStorage.getItem(asKey));

  return console.log(JSON.stringify(loArray).match(asText) ? 0 : 1);
  
}



// EJERCICIO 4.1, OPCIÓN MAP
// ! EJERCICIO TIPO EXAMEN

/**
 * @description Crea una funcion que se le pase como parametros una clave (string), un string (texto a buscar), 
 * y automaticamente realice las siguientes opciones:
- buscará dentro de la clave del localStorage el elemento que le pasemos como segundo parametro
- Devuelve 0 si lo encuentra, 1 si no.

 * @param {String} asKey
 * @param {String} asText
 * @return {Number}
 */
export const searchElementLocalStorage2 = (asKey, asText) =>{

  if( typeof asKey !== 'string' || typeof asText !== 'string' ){
    throw new Error("Los argumentos no son válidos")
  }

  const loArray = JSON.parse(localStorage.getItem(asKey));

  const lbFound =  loArray.some((user) => JSON.stringify(user).includes(asText));

  return console.log(!lbFound ? 0 : 1) ;
  
}


