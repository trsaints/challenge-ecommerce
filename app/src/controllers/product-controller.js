import { Product } from "../class/Product.js";
import { ProductPage } from "../model/ProductPage.js";
import { elementController } from "./element-controller.js";
import { productsService } from "../services/products-service.js";

export const productController = {
  render(id, category, target) {
    const page = new ProductPage();

    elementController.show(target);
    target.classList.add("loading");

    productsService.getProduct(id).then((product) => {
      elementController.load(target);
      page.render(new Product(product[0]), category, target);
    });
  },

  open(target) {
    elementController.clear(target);
    elementController.show(target);
  },

  close(target) {
    elementController.clear(target);
    elementController.hide(target);
  },
};
