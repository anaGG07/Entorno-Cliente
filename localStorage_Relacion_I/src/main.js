import { saveAndRestore, validateData, changeAge, removeObject, listData, storeSet, storeMap, selectStore, storeData, } from './helpers/scripts.js'
import { users } from './data/users.js';

// ? EJ1
//console.log(saveAndRestore(users, "Prueba"));


// ? EJ2
//console.log(validateData(users, "validateData"));


// ? EJ3
//console.log(changeAge("Prueba", "Ana", 50));


// ? EJ4
//console.log(removeObject("Prueba", "Lucia"));


// ? EJ5
//listData('Prueba')


// ? EJ6
// console.log(storeSet("setData", new Set([1,2,3,4,5])));


// ? EJ7
// const map = new Map()
// map.set("apple", 2);
// map.set("banana", 5);
// map.set("orange", 3);
// console.log(storeMap("mapData", map));


// ? EJ9
//selectStore(users);


// ? EJ10
const newUsers = [
    { age: 30, name: "Carlos" }, // Nuevo nombre, debería almacenarse
    { age: 25, name: "Marisa" }, // Nombre existente, no debería almacenarse
    { age: 40, name: "Teresa" }, // Nombre existente, no debería almacenarse
    { age: 28, name: "Luis" } // Nuevo nombre, debería almacenarse
  ];
storeData("Prueba", newUsers)