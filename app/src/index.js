import { elementController } from "./controllers/element-controller.js";
import { productController } from "./controllers/product-controller.js";
import { productsController } from "./controllers/products-controller.js";

(() => {
  const catalog = document.querySelector("[data-catalog]");
  const productWrapper = document.querySelector("[data-element='product']");
  document.addEventListener("DOMContentLoaded", () => {
    productsController.renderAll(catalog.dataset.catalog);

    document.addEventListener("click", (evt) => {
      const currTarget = evt.target;
      const isProductLink = elementController.getData(
        currTarget.parentNode,
        "product-id"
      );

      if (isProductLink) {
        const productId = currTarget.parentNode.dataset.productId;
        const productCategory =
          currTarget.parentNode.parentNode.dataset.products;

        elementController.hide(catalog);

        productController.open(productWrapper);
        productController.render(productId, productCategory, productWrapper);
      }
    });
  });

  if (elementController.getContext("products")) {
    const toggleBtns = document.querySelectorAll("[data-element='toggle']");

    toggleBtns.forEach((btn) =>
      btn.addEventListener("click", (evt) => {
        productsController.toggleList(evt);
      })
    );
  }
})();
