import { productController } from "./controllers/products-controller.js";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    productController.renderProductsLists();
  });
})();
