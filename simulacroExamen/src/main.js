import { modifyCards, storedCards, filterPokemons, updatePrice, create, read, update, delet } from "./helpers/scripts";

const card = {
    "id": "1",
    "nombre": "Pikachu",
    "habilidades": [
      {
        "nombre": "Impactrueno",
        "puntuacion": 8
      },
      {
        "nombre": "Ataque Rápido",
        "puntuacion": 6
      },
      "Quick Attack",
      "Thunderbolt"
    ],
    "puntuacionTotal": 14,
    "precio": 28
  }


export const init = async() => {
   // const resultFunction1 = await storedCards();
   // console.log(resultFunction1);

    // const resultFunction2 = await modifyCards(card);
    // console.log(resultFunction2);

    // const resultFunction3 = await filterPokemons("Vuelo");
    // console.log(resultFunction3);

    // const resultFunction4 = await updatePrice(2);
    // console.log(resultFunction4);ç

    // const resultFunction5 = await read() ;
    // console.log(resultFunction5);


    //  const newItem = {
    //    id: 9,
    //    nombre: "Nuevo Pokémon",
    //    cantidad: 10,
    //    precioUnitario: 10,
    //    precioTotal: 100
    //  };
  
    //  const resultFunction6 = await create(newItem) ;
    //  console.log(resultFunction6);

    // const resultFunction7 = await update(8, 3) ;
    // console.log(resultFunction7);

    const resultFunction8 = await delet(8) ;
    console.log("resultado de la funcion: ", resultFunction8);

}

init();