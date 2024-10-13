/**
 * @description Dada la estructura de usuarios de json placeholder. Se pide:
 * 
-crear una funcion que genere un resumen mostrando: 
nombre usuario, email, ciudad y la website de todos los usuarios.

Obligatorio la desestructuración de objetos para la realizacion del ejercicio.

* @param {Array} aoArrData
* @return {Object}
*/
const resumenUser = (aoArrData = []) => {
  let loResume = "";

  for (const {
    username,
    email,
    address: { city },
    website,
  } of aoArrData) {
    loResume += `UserName: ${username}\nEmail: ${email}\nCity: ${city}\nWebSite: ${website}\n\n`;
  }

  return loResume;
};



/**
 * @description: Crear una funcion que se le pase por parametro el array de usuarios y la ciudad,
 * llamada buscarCiudad, y devuelva el nombre del usuario, el email y la geolocalizacion
 * @param {Array} aoArrData
 * @return {Object}
 */
const buscarCiudad = (aoArrData = [], asCity) => {
  let loResume = "";

  for (const {
    username,
    email,
    address: {
      city,
      geo: { lat, lng },
    },
  } of aoArrData) {
    if (city === asCity) {
      loResume += `UserName: ${username}\nEmail: ${email}\nGeolocalización:\n lat: ${lat}\n lng: ${lng}\n\n`;
    }
  }

  return console.log(loResume);
};

module.exports = { resumenUser, buscarCiudad }