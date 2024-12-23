// Promesa de la obtención de los usuarios


/**
 * @description: // Realizar una descarga de la data de los users que está en mi Web y mostrarla en consola.
 * @param {Array} aoUers 
 * @returns 
 */
export const obtenerUsuarios = (aoUers) => {
  console.log("Cargando los usuarios...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !Array.isArray(aoUers) || aoUers.length === 0
        ? reject(new Error("No hay usuarios"))
        : resolve(aoUers);
    }, 3000);
  });
};


/**
 * @description: //Crear una aplicación, que verifique el login y password de un usuario, usando promesas.
 * - Si el login y el pass es correcto -> mensaje de bienvenida y añadirá cada vez que accede a "access" dia-mes-año-hora-minuto
 * Si las credenciales no son correctas -> error en el acceso.
 * @param {String} asFindUsername 
 * @param {String} asFindPassword 
 * @param {*} aoDataLogin 
 * @returns 
 */
export const login = (asFindUsername, asFindPassword, aoDataLogin) => {
  console.log("validando...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // aqui valido la contraseña y password

      if (aoDataLogin[asFindUsername].password === asFindPassword) {
        
        // construir la fecha
        const fecha = new Date();
        const dia = String(fecha.getDate());
        const mes = fecha.getMonth(); 
        const año = fecha.getFullYear();
        const horas = String(fecha.getHours()); 
        const minutos = String(fecha.getMinutes());
        const fechaPersonalizada = `${dia}/${mes}/${año}, ${horas}:${minutos}`;
    
        // Guardar la fecha personalizada en el historial de acceso del usuario
        aoDataLogin[asFindUsername].access.push(fechaPersonalizada);
    
        // Guarda el objeto `aoDataLogin` en localStorage
        localStorage.setItem("Data", JSON.stringify(aoDataLogin));

        // devuelve el objeto
        resolve({ miData: aoDataLogin[asFindUsername], miUser: asFindUsername });

      } else {

        reject(new Error("Usuario o contraseña incorrecta"));

      }
    }, 3000);
  });
};
