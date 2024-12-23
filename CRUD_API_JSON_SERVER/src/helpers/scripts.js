const urlPriceHistory = import.meta.env.VITE_URL_PRICE_HISTORY;
const urlProducts = import.meta.env.VITE_URL_PRODUCTS;
const urlCategory = import.meta.env.VITE_URL_CATEGORY;
const urlComments = import.meta.env.VITE_URL_COMMENTS;

export const insertData = async (newData) => {
  try {
    const response = await fetch(urlPriceHistory, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error("Error al insertar los datos");
    }

    const data = await response.json();
    console.log("Producto creado correctamente: ", data);
    return data;
  } catch (error) {
    console.error("Error al insertar los datos: ", error);
  }
};

export const createProduct = async (newProduct) => {
  try {
    const responseCategory = await fetch(urlCategory);
    const categories = await responseCategory.json();

    const category = categories.find(
      (categoria) => categoria.nombre === newProduct.categoria
    );

    if (!category) {
      const maxId =
        categories.length > 0
          ? Math.max(...categories.map((cat) => Number(cat.id)))
          : 0;

      const newCategory = {
        id: JSON.stringify(maxId + 1),
        nombre: newProduct.categoria,
      };

      const createCategoryResponse = await fetch(urlCategory, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });

      category = newCategory;
    }

    const responseProduct = await fetch(urlProducts);
    const products = await responseProduct.json();
    console.log(products);
    
    const maxIdProduct =
      products.length > 0
        ? Math.max(...products.map((prod) => Number(prod.id)))
        : 0;

    const productInsert = {
      id: JSON.stringify(maxIdProduct + 1),
      nombre: newProduct.nombre,
      precio: newProduct.precio,
      imagen: newProduct.imagen,
      categoria: Number(category.id),
    };

    const createProductResponse = await fetch(urlProducts, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productInsert),
    });

    console.log("OK", await createProductResponse.json());
  } catch (error) {
    console.error("Error al insertar el producto o la categoría: ", error);
  }
};

export const storedProducts = async () => {
  try {
    //SOLICITUD PRODUCTOS

    const responseProducts = await fetch(urlProducts, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!responseProducts.ok) {
      throw new Error(
        `Error en la solicitud productos: ${responseProducts.status}`
      );
    }
    const dataProducts = (await responseProducts.json()) || [];

    // SOLICITUD CATEGORIAS

    const responseCategories = await fetch(urlCategory, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!responseCategories.ok) {
      throw new Error(
        `Error en la solicitud categorias: ${responseCategories.status}`
      );
    }

    const dataCategories = (await responseCategories.json()) || [];

    dataProducts.forEach(({ nombre: nombreP, categoria }) => {
      dataCategories.forEach(({ id, nombre }) => {
        if (categoria === Number(id)) {
          console.log(`${nombreP}, pertenece a la categoría:  ${nombre}`);
        }
      });
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
