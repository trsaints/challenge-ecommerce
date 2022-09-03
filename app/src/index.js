import { productController } from "./controllers/products-controller.js";

(() => {
  const catalog = document.querySelector("[data-catalog]");
  document.addEventListener("DOMContentLoaded", () => {
    productController.renderProductsLists(catalog.dataset.catalog);
  });
})();
