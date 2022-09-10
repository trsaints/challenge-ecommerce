import { productsService } from "../services/products-service.js";
import { ProductCard } from "../model/ProductCard.js";
import { Context } from "../class/Context.js";
import { Product } from "../class/Product.js";
import { elementController } from "./element-controller.js";

export const productsController = {
  generateList(products, target) {
    const card = new ProductCard();

    elementController.load(target);
    products.forEach((product) => {
      card.render(new Product(product), target);
    });
  },

  renderList(context, target) {
    const category = target.dataset.products;

    productsService.getProducts(category, context).then((products) => {
      this.generateList(products, target);
    });
  },

  renderAll(context) {
    const listsTargets = document.querySelectorAll("[data-products]");

    const option = new Context("abridged", "full");

    listsTargets.forEach((list) => {
      this.renderList(option[context], list);
    });
  },

  toggleList(evt) {
    const productContainer = evt.target.parentNode.parentNode.parentNode;

    const toggleBtn = productContainer.querySelector("[data-element='toggle']");
    const toggleStatus = toggleBtn.querySelector("[data-toggle='status']");
    const productsList = productContainer.querySelector("[data-products]");

    const isExpanded = toggleBtn.classList.contains("expanded");

    if (isExpanded) {
      toggleStatus.textContent = "Mostrar todos";
    } else {
      toggleStatus.textContent = "Ocultar todos";
    }

    console.log(toggleStatus.textContent);

    productsList.classList.toggle("expanded");
    toggleBtn.classList.toggle("expanded");
  },
};
