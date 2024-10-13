// ------ Importaciones -------
import { modifyLastElementLocalStorage,modifyFirstElementLocalStorage, modifyAllElementsLocalStorage, showUsers, searchElementLocalStorage, saveLocalStorage, searchElementLocalStorage2, } from './helpers/scripts.js';
import { usuarios } from './data/usuarios.js';


// ------ Ejecutar funciones --------

// ? FUNCIÓN 1 
//localStorage.clear();
//saveLocalStorage(usuarios, "usuarios");
//console.log("Datos guardados en localStorage:", localStorage.getItem("usuario"));


// ? FUNCIÓN 2.0
//modifyFirstElementLocalStorage("usuario", "Isaias", 80);
//console.log("Edad cambiada")


// ? FUNCIÓN 2.1
//modifyLastElementLocalStorage(usuarios, "Isaias", 30);
//console.log("Edad cambiada")


// ? FUNCIÓN 2.2
//let rt = modifyAllElementsLocalStorage("usuario", "Isaias", 800);
//console.log(rt);


// ? FUNCIÓN 3
//showUsers(usuarios, "usuario");

// ? FUNCION 4
//searchElementLocalStorage("usuario", "edd");

searchElementLocalStorage2("usuarios", "name");