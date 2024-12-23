const url = import.meta.env.VITE_URL;
const urlPokemons = import.meta.env.VITE_URL_POKEMONS;
const urlMultiplicador = import.meta.env.VITE_URL_MULTIPLICADOR;
const urlCarrito = import.meta.env.VITE_URL_CARRITO;

export const storedCards = async () => {
  try {
    const response = await fetch(urlPokemons, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al recuperar los datos");
    }

    const data = await response.json();
    const cardsMap = new Map();

    data.forEach(({ id, nombre, habilidades, puntuacionTotal, precio }) => {
      cardsMap.set(nombre, { id, habilidades, puntuacionTotal, precio });
    });

    return cardsMap;
  } catch (error) {
    console.error("Error al insertar los datos: ", error);
  }
};

export const modifyCards = async (newCard) => {
  try {
    // PETICION POKEMONS (CARTAS)
    const responsePokemons = await fetch(urlPokemons, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!responsePokemons.ok) {
      throw new Error("Error al recuperar los datos");
    }

    const dataPokemons = await responsePokemons.json();

    // PETICION CARRITO
    const responseCart = await fetch(urlCarrito, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!responseCart.ok) {
      throw new Error("Error al recuperar los datos");
    }

    const dataCarrito = await responseCart.json();

    const {
      items: [{ id, cantidad }],
    } = dataCarrito;
    console.log(id, cantidad);

    dataPokemons.forEach(({ id: idPokemon, nombre }) => {
      console.log(Number(idPokemon), nombre);

      if (Number(idPokemon) === Number(newCard.id)) {
        console.log("Los ids Coinciden");
        dataCarrito.forEach(({ items }) => {
          console.log("estos son los items -->", items);
        });
      }
    });
  } catch (error) {}
};

export const filterPokemons = async (skill) => {
  const pokemons = await storedCards();

  const skillsMap = new Map();
  let objetPokemons = new Set();

  pokemons.forEach((value, index) => {
    value.habilidades.forEach(({ nombre: nameSkill }) => {
      if (skill === nameSkill) {
        objetPokemons.add(index);
        skillsMap.set(skill, objetPokemons);
      }
    });
  });

  return skillsMap;
};

export const updatePrice = async () => {
  try {
    // OBTENER MULTIPLICADOR ACTUAL
    const storedMultiplier = await fetch(urlMultiplicador);
    const currentMultiplier = await storedMultiplier.json();

    // OBTENER LISTA DE POKEMON
    const response = await fetch(urlPokemons, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al recuperar los datos");
    }

    const pokemons = await response.json();

    const arrayPromises = [];

    // Crear promesas individuales para actualizar cada Pokémon
    pokemons.forEach((pokemon) => {
      const { id, puntuacionTotal } = pokemon;
      const newPrice = puntuacionTotal * currentMultiplier;

      // Agregar una promesa de actualización para cada Pokémon al array
      arrayPromises.push(
        (async () => {
          const updateResponse = await fetch(`${urlPokemons}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...pokemon,
              precio: newPrice,
            }),
          });

          if (!updateResponse.ok) {
            throw new Error(`Error al actualizar ${pokemon.nombre}`);
          }
          return `${pokemon.nombre} actualizado a ${newPrice}`;
        })()
      );
    });

    // Ejecutar todas las promesas con Promise.allSettled
    const results = await Promise.allSettled(arrayPromises);

    // Manejar resultados de cada promesa
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(result.value); // Mensaje de éxito
      } else {
        console.error(result.reason); // Error específico de cada Pokémon
      }
    });

    console.log("Actualización de precios completa.");
  } catch (error) {
    console.error("Error general en la actualización:", error);
  }
};

export const read = async () => {
  try {
    const response = await fetch(urlCarrito, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const dataCart = await response.json();

    const { items } = dataCart;
    return items;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const create = async (newItem) => {
  try {
    const responseItems = await fetch(urlCarrito);

    if (!responseItems.ok) {
      throw new Error("Error en la solicitud");
    }

    const dataItems = await responseItems.json();

    // Buscar si el item ya existe y actualizar su cantidad
    let itemExists = false;
    const newData = dataItems.items.map((item) => {
      if (item.id === newItem.id) {
        itemExists = true;

        return {
          ...item,
          cantidad: item.cantidad + 1,
          precioTotal: item.precioUnitario * (item.cantidad + 1),
        };
      }
      return item;
    });

    // Si el item no existe, agregarlo al array
    if (!itemExists) {
      newData.push(newItem);
    }

    // Actualizar el array items en dataItems
    dataItems.items = newData;

    // Actualizar el precio total de todo el pedido
    dataItems.totalCarrito = 0;
    dataItems.items.map(({ precioTotal }) => {
      dataItems.totalCarrito += precioTotal;
    });
    // Hacer la solicitud PUT para actualizar el carrito completo
    const responseCart = await fetch(urlCarrito, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataItems),
    });

    if (!responseCart.ok) {
      throw new Error("Error en la solicitud");
    }

    const dataCart = await responseCart.json();
    console.log("Carrito actualizado:", dataCart);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const update = async (id, newCantidad) => {
  try {
    const responseData = await fetch(urlCarrito);

    if (!responseData.ok) {
      throw new Error("Error al obtener la data");
    }

    const dataCart = await responseData.json();

    const newData = dataCart.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          cantidad: newCantidad,
          precioTotal: item.precioUnitario * newCantidad,
        };
      } else {
        return item;
      }
    });

    dataCart.items = newData;

    let total = 0;
    dataCart.totalCarrito = dataCart.items.map(({ precioTotal }) => {
      console.log(precioTotal);
      total += precioTotal;
    });
    dataCart.totalCarrito = total;

    const responseUpdateData = await fetch(urlCarrito, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataCart),
    });

    if (!responseUpdateData.ok) {
      throw new Error("Error al actualizar la data");
    }

    return await responseUpdateData.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

export const delet = async (id) => {
  try {
    const responseCart = await fetch(urlCarrito);

    if (!responseCart.ok) {
      throw new Error("Error al obtener la data");
    }

    const dataCart = await responseCart.json();

    const newData = dataCart.items.filter((item) => item.id !== id);

    dataCart.items = newData;

    let total = 0;
    dataCart.items.map(({ precioTotal }) => {
      total += precioTotal;
    });
    dataCart.totalCarrito = total;

    const responseUpdateData = await fetch(urlCarrito, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataCart),
    });

    if (!responseUpdateData.ok) {
      throw new Error("Error al actualizar la data");
    }

    const updateData = await responseUpdateData.json();
    return updateData;
    
  } catch (error) {
    console.error("Error: ", error)
  }
};
