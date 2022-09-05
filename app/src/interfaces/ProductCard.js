import { elementController } from "../controllers/element-controller.js";
import { Context } from "../models/Context.js";

export class ProductCard {
  generateBanner(caption, image, context) {
    const entryPoint = new Context("./app/", "../");

    const path = `${entryPoint[context]}assets/images/${image}`;

    const cardFigure = elementController.generateElement(
      "figure",
      "item__banner"
    );
    const figureImg = elementController.generateElement("img", "item__image");
    const figcaption = elementController.generateElement(
      "figcaption",
      "item__description"
    );

    figureImg.setAttribute("src", path);
    figcaption.textContent = caption;

    cardFigure.appendChild(figureImg);
    cardFigure.appendChild(figcaption);

    return cardFigure;
  }

  generateContent(price, URL) {
    const frag = document.createDocumentFragment();
    const productPrice = elementController.generateElement("p", "item__price");
    const productLink = elementController.generateElement("a", "item__link");
    const linkIcon = elementController.generateElement("i", "fa-solid");
    linkIcon.classList.add("fa-up-right-from-square");

    productPrice.textContent = `R$ ${price}`;
    productLink.textContent = "Ver produto ";
    productLink.appendChild(linkIcon);
    productLink.setAttribute("href", URL);

    frag.appendChild(productPrice);
    frag.appendChild(productLink);

    return frag;
  }

  generate(product, context) {
    const productCard = elementController.generateElement(
      "li",
      "products__item"
    );

    const cardBanner = this.generateBanner(
      product.name,
      product.image,
      context
    );

    const cardContent = this.generateContent(product.price, "#");

    productCard.appendChild(cardBanner);
    productCard.appendChild(cardContent);

    return productCard;
  }

  render(product, target) {
    const pageContext = document.querySelector("[data-catalog]");
    const productCard = this.generate(product, pageContext.dataset.catalog);

    target.appendChild(productCard);
  }
}
