import { obtenerUsuarios, login } from "./helpers/scripts.js";
import { users, loginUsers } from "./data/data.js";

// ? FUNCION 1

// obtenerUsuarios(users)
//   .then((users) => {
//     let tiempo = 0;
//     setTimeout(() => {
//       users.forEach(({ name, age }) => {
//         // <-- Corregido forEach
//         console.log(`Nombre: ${name}, Edad: ${age}`);
//       });
//     }, 1000 * tiempo);
//     ++tiempo;
//   })
//   .catch((error) => {
//     console.error(error);
//   });



// ? FUNCION 2  

login("username2", "4567", loginUsers)
  .then(({ miData, miUser }) => {

    console.log(`Bienvenido ${miUser} --> Access: ${miData.access}`);

  })
  .catch((error) => {
    console.error(error);
  });
