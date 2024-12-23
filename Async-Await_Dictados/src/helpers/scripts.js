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
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al obtener los personajes');
                    }
                    return response.json();
                })
                .then(data => {
    
                    const characters = data.results.map(({ name, height }, index) => {
                        return {
                            name,
                            height,
                            imageUrl: `${urlImg}${allCharacters.length + index + 1}.jpg`
                        };
                    });

                    allCharacters.push(...characters);

                    if (data.next) {
                        fetchPage(data.next);
                    } else {
                        localStorage.setItem('starWarsCharacters', JSON.stringify(allCharacters));
                        resolve(allCharacters);
                    }
                })
                .catch(error => reject(error)); 
        };

        fetchPage(urlUsers);
    });
};


export const ej1Async = async (urlUsers, urlImg) => {
    const allCharacters = []; 

    try {
        let nextUrl = urlUsers; // url inicial

        while(nextUrl) {
            const response = await fetch(nextUrl);
            
            if(!response.ok){
                throw new Error("Error en la petición")
            }

            const data = await response.json();
            const characters = data.results.map(({name, height }, index) => ({
                name,
                height,
                imageUrl: `${urlImg}${allCharacters.length + index + 1}.jpg`
            }));
            
            allCharacters.push(...characters); // <-- agregar al array general, la pagina actual
    
            nextUrl = data.next;
        }

    // guardar los personajes en localStorage
    localStorage.setItem('starWarsCharacters', JSON.stringify(allCharacters));
    
    renderCharacters(allCharacters);
    
    //return allCharacters;

    } catch (error) {
        console.error("Error:", error);
    }

}

function renderCharacters(characters){

    const resultDiv = document.getElementById("app");
    resultDiv.innerHTML = ""; // <-- limpiar contenido del DIV


    // Recorrer el array
    characters.forEach((character, index) => {

        // crear DIV para cada personaje
        const characterId = index + 1;
        const characterDiv = document.createElement("div");
        characterDiv.className = "character";

        // Fabrica la tarjeta
        characterDiv.innerHTML= `
        <h2>${character.name}</h2>
        <p> Altura: ${character.height}</p>
        <img src="${urlImg}${characterId}.jpg" alt="${character.name}" width="250px" >
        `;

        // añadir el characterDiv (hijo) al resultDiv (padre)
        resultDiv.appendChild(characterDiv);


    });
}