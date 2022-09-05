import { productsService } from "../services/products-service.js";
import { ProductCard } from "../interfaces/ProductCard.js";
import { Context } from "../models/Context.js";

export const productController = {
  renderList(products, list, target) {
    list.classList.remove("loading");
    products.forEach((product) => {
      target.render(product, list);
    });
  },

  generateProductList(dataset, option) {
    const listTarget = document.querySelector(`[data-products='${dataset}']`);
    const productCard = new ProductCard();

    productsService.getProducts(dataset, option).then((products) => {
      console.log(products);
      this.renderList(products, listTarget, productCard);
    });
  },

  renderProductsLists(context) {
    const listsTargets = document.querySelectorAll("[data-products]");

    const option = new Context("abridged", "full");

    listsTargets.forEach((list) => {
      this.generateProductList(list.dataset.products, option[context]);
    });
  },
};
