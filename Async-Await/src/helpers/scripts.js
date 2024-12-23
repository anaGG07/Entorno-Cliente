/**
 * @description: función getUsers que realiza una petición a una API
 * https://jsonplaceholder.typicode.com/todos
 */

const urlData = import.meta.env.VITE_API_URL;
const urlUsers = import.meta.env.VITE_API_STARWARS;
const urlImg = import.meta.env.VITE_API_SWABI;


export const getUser = () => {
  return fetch(urlData)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la petcion");
      }
      console.log("La respuesta es: ", response);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error data: ", error);
    });
};

export const fetchDataUsersAsync = async () => {
    try {
        const response = await fetch(urlData);
        if (!response.ok) {
            throw new Error("Error en la peticion");
        }
        const data = await response.json();
        return data ;

    } catch (error) {
        
    }
};




//? EJERCICIO 1
/**
 * @description: Crear dos funciones, una con promesas y otra con async await 
 * que obtengan los personajes de starwars (nombre, altura) y la url 
 * de la imagen de cada uno de los usuarios de starwars y almacene el resultado en localStorage.
 * 
 */
export const ej1Promise = () => {
    return new Promise((resolve, reject) => {
        fetch(urlUsers)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los personajes');
                }
                return response.json();
            })
            .then(data => {
                const characters = data.results.map((character, index) => {
                    return {
                        name: character.name,
                        height: character.height,
                        imageUrl: `${urlImg}${index + 1}.jpg` 
                    };
                });
                
               
                localStorage.setItem('starWarsCharacters', JSON.stringify(characters));
                resolve(characters);
            })
            .catch(error => reject(error));
    });
};