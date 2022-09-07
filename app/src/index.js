import { elementController } from "./controllers/element-controller.js";
import { productController } from "./controllers/products-controller.js";

(() => {
  const catalog = document.querySelector("[data-catalog]");
  document.addEventListener("DOMContentLoaded", () => {
    productController.renderAll(catalog.dataset.catalog);
  });

  if (elementController.getContext("products")) {
    const toggleBtns = document.querySelectorAll("[data-element='toggle']");
    toggleBtns.forEach((btn) =>
      btn.addEventListener("click", (evt) => {
        productController.toggleList(evt);
      })
    );
  }
})();
