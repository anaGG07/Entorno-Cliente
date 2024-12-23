// ? EJERCICIO 1
/**
 * @description: "Función que acepta un array de objetos (con nombre y edad), guarde este array
 * en localStorage y luego lo recupere. Verifica si el array ya está guardado y evita duplicados"
 * @param {Array} aoArray
 * @param {String} asKey
 * @return {Boolean}
 */
export const saveAndRestore = (aoArray, asKey) => {

    // Recuperar el contenido actual de asKey
    let storedArray = JSON.parse(localStorage.getItem(asKey)) || [];
    console.log("Array almacenado antes:", storedArray);
  

    // Filtrar y añadir solo los elementos que no estén ya presentes en storedArray
    const newArray = aoArray.filter(
      (item) => 
        !storedArray.some(
          (storedItem) => 
            storedItem.name === item.name && storedItem.age === item.age
        )
    );

  
    // Concatenar newArray a storedArray y guardar el resultado en localStorage
    if (newArray.length > 0) {
      storedArray = storedArray.concat(newArray);
      localStorage.setItem(asKey, JSON.stringify(storedArray));
      console.log("Array almacenado actualizado después de guardar:", storedArray);
    } else {
      console.log("No hay elementos nuevos para añadir.");
    }
  
  };
  
 

// ? EJERCICIO 2

/**
 * @description: "Función que acepte un array de objetos (nombre y edad).
Valida que nombre sea una cadena no vacía y edad sea un número
mayor que 0 antes de almacenarlo en LocalStorage .
 * @param {Array} aoArray
 * @param {String} asKey
 * @return {Boolean}
 */
export const validateData = (aoArray, asKey) => {
    // Recuperar datos ya almacenados en localStorage
    const storedArray = JSON.parse(localStorage.getItem(asKey)) || [];
    const newArray = [];

    
    for (const { name, age } of aoArray) {
        if (typeof name === 'string' && name.length > 0 && typeof age === 'number' && age > 0) {
            
            // Evitar duplicados: añadir solo si no está ya en storedArray
            const isDuplicate = storedArray.some(
                storedItem => storedItem.name === name && storedItem.age === age
            );
            if (!isDuplicate) {
                newArray.push({ name, age });
            }
        }
    }

    // Solo guardar en localStorage si hay elementos nuevos que añadir
    if (newArray.length > 0) {
        // Combinar los arrays: almacenado + nuevos, y guardar en localStorage
        const updatedArray = storedArray.concat(newArray);
        localStorage.setItem(asKey, JSON.stringify(updatedArray));
        return true;  // Retorna true si se agregaron nuevos elementos
    }

    return false;  // Retorna false si no hubo elementos nuevos que añadir
};


// ? EJERCICIO 3
/**
 * @description: Función que permita actualizar la edad de una persona en un array de
objetos almacenado en LocalStorage , buscando a la persona por nombre.
 * @param {Array} asKey
 * @param {String} asName
 * @param {String} anNewAge
 * @return {Boolean}
 */
export const changeAge = (asKey, asName, anNewAge) => {
  
  const loStoredArray = JSON.parse(localStorage.getItem(asKey));
  
  loStoredArray.forEach((loUser) => {
    if (loUser.name === asName) {
      loUser.age = anNewAge;
    }
  });

  // loStoredArray.forEach(({ name, age }) =>{
  //   if (asName === name) age = anNewAge;
  // });
  
  localStorage.setItem(asKey, JSON.stringify(loStoredArray));
}


// ? EJERCICIO 4
/**
 * @description: Crea una función que permita eliminar un objeto del array almacenado en LocalStorage ,
  buscando por el nombre de la persona.
 * @param {String} asKey
 * @param {String} asName
 * @return {Boolean}
 */
export const removeObject = (asKey, asName) => {

  const loStoredArray = JSON.parse(localStorage.getItem(asKey));

  if (loStoredArray.length === 0 || typeof asKey !== 'string' || typeof asName !== 'string') {
    throw new Error("Los argumentos no son válidos o no se encontró nada en localStorage")
  }

  const newArray = loStoredArray.filter(({name}) => name !== asName);

  localStorage.setItem(asKey, JSON.stringify(newArray));
  return loStoredArray.length !== newArray.length;

}


// ? EJERCICIO 5
/**
 * @description: Crea una función que recupere el array de
 * objetos almacenado en LocalStorage y muestre los datos en una lista
 * dentro de un <div> con el id app
 * @param {String} asKey
 * @return {Boolean}
 */
export const listData = (asKey) => {

  const loStoredArray = JSON.parse(localStorage.getItem(asKey));

  if (!Array.isArray(loStoredArray) || loStoredArray.length === 0) {
    console.error("No se ha recuperado ningún elemento o el array está vacío.");
    return false;
  }

  // Selecciona el contenedor de la lista
  const appDiv = document.getElementById("app");

  // Crea una lista desordenada
  const ul = document.createElement("ul");

  // Itera sobre el array y crea un elemento de lista para cada objeto
  loStoredArray.forEach(({ name, age }) => {
    const li = document.createElement("li");
    li.textContent = `Nombre: ${name}, Edad: ${age}`;
    ul.appendChild(li);
  });

  // Agrega la lista al div
  appDiv.appendChild(ul);

  console.log("Datos listados en el DOM.");
  return true;
}


// ? EJERCICIO 6
/**
 * @description: Crea una función que acepte un Set
de números, lo convierta a un array para almacenarlo en LocalStorage ,
y luego lo recupere y lo convierta nuevamente en un Set .
 * @param {String} asKey
 * @param {Set} aoSet
 * @return {Boolean}
 */
export const storeSet = (asKey, aoSet) => {

  if ( typeof asKey !== 'string' || !(aoSet instanceof Set)){
    throw new Error("Los argumentos no son válidos")
  }

  localStorage.setItem(asKey, JSON.stringify([...aoSet]));

  const newSet = new Set(JSON.parse(localStorage.getItem(asKey)));

  return newSet.size > 0;
}


// ? EJERCICIO 7
/**
 * @description: Crea una función que acepte un Map , 
 * lo convierta a un array de pares clave-valor, lo almacene en
 * LocalStorage y luego lo recupere y vuelva a convertir en Map
 * @param {String} asKey
 * @param {Map} aoMap
 * @return {Boolean}
 */
export const storeMap = (asKey, aoMap) => {

  if ( typeof asKey !== 'string' || !(aoMap instanceof Map)){
    throw new Error("Los argumentos no son válidos")
  }

  localStorage.setItem(asKey, JSON.stringify([...aoMap]));

  const newMap = new Map(JSON.parse(localStorage.getItem(asKey)));
  
  return newMap.size > 0;

}


// ? EJERCICIO 8
/**
 * @description: Crea una función
que recupere un array de objetos desde LocalStorage y use la
destructuración para acceder a los nombres de las personas y mostrar solo
los nombres en el DOM.
 */



// ? EJERCICIO 9
/**
 * @description: Crea una función que
acepte un array de objetos, donde cada objeto tiene nombre y edad . Si
algún objeto tiene un nombre vacío o una edad menor a 18, no lo
almacena en LocalStorage y devuelve un mensaje indicando qué
objetos son inválidos
 * @param {Array} aoArray
 * @return {Boolean}
 */
export const selectStore = (aoArray) => {

  if (aoArray.length === 0 || !Array.isArray(aoArray)){
    throw new Error("Los argumentos no son válidos")
  }

  const loStoreArray =[]; 

  aoArray.forEach(element => {
    const { name, age } = element;
    if (name !== "" && age > 18){
      loStoreArray.push(element)
    } else {
      console.log("Elemento inválido: ", element)
    }
  })

  localStorage.setItem("EJ9", JSON.stringify(loStoreArray));

  return loStoreArray.length
}



// ? EJERCICIO 10
/**
 * @description: Crea una función que acepte un array de objetos 
 * y almacene solo aquellos objetos cuyo nombre no esté ya 
 * almacenado en LocalStorage . Usa una función
 * para verificar la existencia y almacenar los nuevos objetos
 * @param {Array} aoArray
 * @param {String} asKey
 * @return {Boolean}
 */
export const storeData = (asKey, aoArray) => {

  if(aoArray.length === 0 || !Array.isArray(aoArray)){
    throw new Error("Los argumentos no son válidos")
  }

  const loStoreArray = JSON.parse(localStorage.getItem(asKey)) || [];

  const loNewArray = aoArray.filter((element) => {
    return !loStoreArray.some(storedElement => storedElement.name === element.name);
  });

  localStorage.setItem(asKey, JSON.stringify(loStoreArray.concat(loNewArray)));
}