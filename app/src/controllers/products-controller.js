import { productsService } from "../services/products-service.js";
import { ProductCard } from "../model/ProductCard.js";
import { Context } from "../class/Context.js";
import { Product } from "../class/Product.js";

export const productController = {
  generateList(products, target) {
    const card = new ProductCard();

    target.classList.remove("loading");
    products.forEach((product) => {
      card.render(new Product(product), target);
    });
  },

  renderList(dataset, option) {
    const listTarget = document.querySelector(`[data-products='${dataset}']`);

    productsService.getProducts(dataset, option).then((products) => {
      this.generateList(products, listTarget);
    });
  },

  renderAll(context) {
    const listsTargets = document.querySelectorAll("[data-products]");

    const option = new Context("abridged", "full");

    listsTargets.forEach((list) => {
      this.renderList(list.dataset.products, option[context]);
    });
  },

  toggleList(evt) {
    const productContainer = evt.target.parentNode.parentNode.parentNode;
    console.log(productContainer);
    const toggleBtn = productContainer.querySelector("[data-element='toggle']");
    const productsList = productContainer.querySelector("[data-products]");

    productsList.classList.toggle("expanded");
    toggleBtn.classList.toggle("expanded");
  },
};
