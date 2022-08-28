import { productsService } from "../services/products-service.js";
import { ProductCard } from "../interfaces/ProductCard.js";

function generateProductList(dataset) {
  const listTarget = document.querySelector(`[data-products='${dataset}']`);
  const productCard = new ProductCard();

  productsService.getProducts(dataset).then((products) => {
    console.log(products)
    listTarget.classList.remove("loading");
    products.forEach((product) => {
      productCard.renderProductCard(product, listTarget);
    });
  });
}

function renderProductsLists() {
  const listsTargets = document.querySelectorAll("[data-products]");

  listsTargets.forEach((list) => {
    generateProductList(list.dataset.products);
  });
}

export const productController = {
  renderProductsLists,
};
