import "./ProductList.css";

export class ProductList {
  //. Propiedades privadas

  #products;
  #apiurl;

  //. Constructor

  constructor(apiurl) {
    this.#apiurl = apiurl;
    this.#products = [];

    // Donde se renderiza
    this.appContainer = document.getElementById("app");
  }

  //. Métodos privados para obtener los productos

  //metodo para inicializar
  async init() {
    try {
      this.#products = await this.#getchDataProducts();
      this.#renderProduct();
    } catch (error) {
      this.renderError(error);
    }
  }

  async #getchDataProducts() {
    try {
      const response = await fetch(this.#apiurl);

      if (!response) {
        throw new Error("Error al obtener la data");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error("Error al hacer el fetch");
    }
  }

  // Método público para obtener los productos
  #renderProduct() {
    if (this.#products.length === 0) {
      this.renderError("No hay productos para mostrar");
    }

    const productsHTML = this.#products
      .map((product, i) => {
        return `
                <div data-id="${i}" class="product-card">
                    <h3>${product.name}</h3>
                    <p>Precio: ${product.price}</p>
                    <p>Descripción: ${product.description}</p>
                    <p id="${i}">Categoría: ${product.category}</p>
                </div>
            `;
      })
      .join("");

      
      
      this.appContainer.innerHTML = `
      <div class="product-list" style="background-color:"transparent"">
      ${productsHTML}
      </div>
      `;

      const categoria = document.querySelector(".product-list");
     
      categoria.addEventListener("click", (event) => {
        const id = event.target.dataset.id;

        if(id){
            const productCard = document.querySelector(`[data-id = "${id}"]`);
            productCard.style.backgroundColor = productCard.style.backgroundColor === "transparent" ? "green" : "transparent";

        }

        
        
      });
  }

  renderError(message) {
    this.appContainer.innerHTML = `
        <div id="mensajeError" class="error">${message}</div>
        `;
  }

  #validateData(product){
    const { name, price, description, category } = product;

    if(!name || !price || !description || !category){

    }

    return true;
  }


  get apiurl() {
    return this.#apiurl;
  }


  set addProduct(product){

    if(this.#validateData(product)){

        //añadir producto
        this.#opFetchProductData(product, "post")

    } else {
        throw new Error("Datos del producto incorrectos");
        
    }
  }

  

  // metodo para (post, patch, delete, put)

  async #opFetchProductData(product, method){
    try {

        switch(method){

            case "get":
                const responseGet = await fetch(this.#apiurl);

                if (!responseGet) {
                  throw new Error("Error al obtener la data");
                }
          
                const dataGet = await responseGet.json();
          
                return dataGet;
            break;



            case "post":

            const responsePost = await fetch(this.#apiurl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
              });

            if (!responsePost) {
              throw new Error("Error al obtener la data");
            }
      
            const dataPost = await responsePost.json();
      
            return dataPost;
            break;



            case "put":

                const responsePut = await fetch(`${this.#apiurl}/${id}`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(product),
                  });
               
                if (!responsePut) {
                  throw new Error("Error al obtener la data");
                }
             
                const dataPut = await responsePut.json();
             
                return dataPut;

            break;



            case "delete":

                const id = product.id;
                const responseDelete = await fetch(`${this.#apiurl}/${id}`, 
                    {
                        method: "DELETE",
                       
                    });

                if (!responseDelete) {
                  throw new Error("Error al obtener la data");
                }
          
                console.log("Eliminado correctamente")

            break;

            case "patch":

            break;
        
            default :
            break;
        }

    } catch (error) {
        
    }
   
  }

}

