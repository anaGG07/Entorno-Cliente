/**
 *
 * @param {Array<Object>} data
 * @returns {Promise}
 */
export const getDataProducts = async (data) => {
  const responseProducts = await fetch(data);

  if (!responseProducts.ok) {
    throw new Error("Error al recuperar los datos");
  }

  const dataProducts = await responseProducts.json();

  return dataProducts;
};

/**
 *
 * @param {Promise} data
 * @param {String} save
 * @returns  {Map <String, Object>}
 */
export const generateProductMap = async (data, save = "") => {
  try {
    //todo CONSULTA API PRODUCTOS
    let dataProducts = await getDataProducts(data);

    let dataMap = new Map();

    dataProducts.forEach(
      ({
        nombre,
        precio,
        stock: { cantidad },
        detalles: { "tallas disponibles": tallas, colores },
      }) => {
        dataMap.set(nombre, {
          precio,
          cantidad,
          "tallas disponibles": tallas,
          colores,
        });
      }
    );

    let mensaje = dataMap;

    if (save === "save") {
      const storeData = JSON.parse(localStorage.getItem("DataProductos"));

      if (!storeData) {
        localStorage.setItem("DataProductos", JSON.stringify([...dataMap]));
        mensaje = "Guardado en localStorage correctamente";
      }
    }

    return mensaje;
  } catch (error) {
    console.error("Error: ", error);
  }
};

/**
 *
 * @param {Function} function
 * @param {Promise} data
 * @param {String} save
 * @returns  {Map <String, Object> }
 */
export const generateProductMapV2 = async (dataFunction, data, save = "") => {
  try {
    //todo CONSULTA API PRODUCTOS
    let dataProducts = await dataFunction(data);

    let dataMap = new Map();

    dataProducts.forEach(
      ({
        nombre,
        precio,
        stock: { cantidad },
        detalles: { "tallas disponibles": tallas, colores },
      }) => {
        dataMap.set(nombre, { precio, cantidad, tallas, colores });
      }
    );

    let mensaje = dataMap;

    if (save === "save") {
      const storeData = JSON.parse(localStorage.getItem("DataProductos"));

      if (!storeData) {
        localStorage.setItem("DataProductos", JSON.stringify([...dataMap]));
        mensaje = "Guardado en localStorage correctamente";
      }
    }

    return mensaje;
  } catch (error) {
    console.error("Error: ", error);
  }
};

/**
 * 

 * @param {Promise} data
 * @returns  {Map <String, Object> }
 */
export const modificarTallas = async (dataUrl) => {
  try {
    const getData = await getDataProducts(dataUrl);

    let nombres = [];
    await Promise.all(
      getData.map(
        async ({
          id,
          nombre,
          categoria: { nombre: nombreCategoria, subcategorias },
          detalles,
          detalles: { "tallas disponibles": tallas },
        }) =>
          nombreCategoria === "Ropa" && subcategorias.includes("Deportiva") &&
          !tallas.includes("XS") && tallas.unshift("XS") && nombres.push(nombre) &&
          (await fetch(`${dataUrl}/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              detalles: {
                ...detalles,
                "tallas disponibles": tallas,
              },
            }),
          }))
      )
    );
    return nombres && "No se ha modificado nada";
  } catch (error) {
    console.error("Error: ", error);
  }
};
