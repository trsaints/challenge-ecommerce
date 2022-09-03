import { productsService } from "../services/products-service.js";
import { ProductCard } from "../interfaces/ProductCard.js";

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

  renderProductsLists(path) {
    const listsTargets = document.querySelectorAll("[data-products]");

    const option = {
      index: "abridged",
      products: "full"
    }

    listsTargets.forEach((list) => {
      this.generateProductList(list.dataset.products, option[path]);
    });
  },
};
