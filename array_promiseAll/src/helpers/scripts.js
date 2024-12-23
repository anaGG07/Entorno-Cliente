const urlUsers = import.meta.env.VITE_API_CHARACTER;
const urlImg = import.meta.env.VITE_API_IMG;

//? EJERCICIO 1
/**
 * @description: Crear dos funciones, una con promesas y otra con async/await
 * que obtengan los personajes de starwars (nombre, altura) y la url
 * de la imagen de cada uno de los usuarios de starwars y almacene el resultado en localStorage.
 *
 */
export const ej1 = (urlUsers, urlImg) => {
  const allCharacters = [];

  return new Promise((resolve, reject) => {
    const fetchPage = (url) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener los personajes");
          }
          return response.json();
        })
        .then((data) => {
          const characters = data.results.map(({ name, height }, index) => {
            return {
              name,
              height,
              imageUrl: `${urlImg}${allCharacters.length + index + 1}.jpg`,
            };
          });

          allCharacters.push(...characters);

          if (data.next) {
            fetchPage(data.next);
          } else {
            localStorage.setItem(
              "starWarsCharacters",
              JSON.stringify(allCharacters)
            );
            resolve(allCharacters);
          }
        })
        .catch((error) => reject(error));
    };

    fetchPage(urlUsers);
  });
};

export const ej1Async = async (urlUsers, urlImg) => {
  const allCharacters = [];

  try {
    let nextUrl = urlUsers; // url inicial

    while (nextUrl) {
      const response = await fetch(nextUrl);

      if (!response.ok) {
        throw new Error("Error en la petición");
      }

      const data = await response.json();
      const characters = data.results.map(({ name, height }, index) => ({
        name,
        height,
        imageUrl: `${urlImg}${allCharacters.length + index + 1}.jpg`,
      }));

      allCharacters.push(...characters); // <-- agregar al array general, la pagina actual

      nextUrl = data.next;
    }

    // guardar los personajes en localStorage
    localStorage.setItem("starWarsCharacters", JSON.stringify(allCharacters));

    renderCharacters(allCharacters);

    //return allCharacters;
  } catch (error) {
    console.error("Error:", error);
  }
};

// PROMISE ALL
export async function fetchAllCharacterPromiseAll() {
  try {
    console.time("fetchAllCharacterPromiseAll");
    // declarar array de promesas
    const promisePagesArray = [];

    for (let i = 1; i <= 9; i++) {
      promisePagesArray.push(
        fetch(`${urlUsers}?page=${1}`)
          .then((response) => {
            if (!responde.ok) {
              throw new Error("Error");
            }
            return response.json();
          })
          .catch((error) => console.error("Error en la petición", error))
      );
    }

    // Ejecutar todas las promesas
    const resultPromiseAll = await Promise.all(promisePagesArray);

    // Mostrar en consola el resultado de la promesa
    console.log("Resultado: ", resultPromiseAll);

    const allCharacters = resultPromiseAll.reduce((acc, page) => 
      acc.concat(page.results), []
    )

    // añadir los characters de StarWars al LocalStorage
    localStorage.setItem("StarWars", JSON.stringify(allCharacters));


  } catch (error) {
    console.error("Error: ", error);
  }
  console.timeEnd("fetchAllCharacterPromiseAll");
}

export async function fetchAllCharacterPromiseAllSettled() {
  const loadingIndicator = document.createElement("div");
  loadingIndicator.textContent = "Cargando personajes...";

  document.getElementsById("app").appendChild(loadingIndicator);

  let allCharacters = [];
  const promisePagesArray = [];

  try {
    console.time("fetchAllCharacterPromiseAllSettled");
    for (let i = 1; i <= 9; i++) {
      promisePagesArray.push(
        fetch(`${urlUsers}?page=${1}`)
          .then((response) => {
            if (!responde.ok) {
              throw new Error("Error");
            }
            return response.json();
          })
          .catch((error) => console.error("Error en la petición", error))
      );
    }
    return response.json();

  } catch (error) {
    console.error("Error en la peticion fetchAllCharacterPromiseAllSettled")
  }
  
}


function renderCharacters(characters) {
  const resultDiv = document.getElementById("app");
  resultDiv.innerHTML = ""; // <-- limpiar contenido del DIV

  // Recorrer el array
  characters.forEach((character, index) => {
    // crear DIV para cada personaje
    let characterId = index + 1;

    let characterDiv = document.createElement("div");
    characterDiv.className = "character";

    // Fabrica la tarjeta

    index > 16 ? (characterId = characterId + 1) : characterId;
    characterDiv.innerHTML = `
    <div class="card-image">
    <img src="${urlImg}${characterId}.jpg" alt="${character.name}" width="200px" >
    </div>

    <div class="card-content">
    <h2>${character.name}</h2>
    <p> Altura: ${character.height}</p>
    </div>
        `;

    // añadir el characterDiv (hijo) al resultDiv (padre)
    resultDiv.appendChild(characterDiv);
  });
}
