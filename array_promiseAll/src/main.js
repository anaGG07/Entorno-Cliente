import { ej1, ej1Async } from './helpers/scripts.js';

const urlUsers = import.meta.env.VITE_API_CHARACTER;
const urlImg = import.meta.env.VITE_API_IMG;

// ? Ej1
// ej1(urlUsers, urlImg)
//     .then(characters => console.log('Personajes almacenados:', characters))
//     .catch(error => console.error(error));

// ? Ej2
// ej1Async(urlUsers, urlImg)
//     .then(characters => console.log('Personajes almacenados:', characters))
//     .catch(error => console.error(error));

document
  .getElementById('fetching-characters-async')
  .addEventListener("click", () => ej1Async(urlUsers, urlImg));

