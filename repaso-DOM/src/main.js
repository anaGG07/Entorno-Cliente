import { ProductList } from "./components/ProductList";

const urlApi = "http://localhost:3000/products";

const productList = new ProductList(urlApi);

productList.init();


