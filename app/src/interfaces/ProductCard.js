import { elementController } from '../controllers/element-controller.js' ;

export class ProductCard {
  generateBanner(caption, src) {
    const cardFigure = elementController.generateElement(
      "figure",
      "item__banner"
    );
    const figureImg = elementController.generateElement("img", "item__image");
    const figcaption = elementController.generateElement(
      "figcaption",
      "item__description"
    );

    figureImg.setAttribute("src", src);
    figcaption.textContent = caption;

    cardFigure.appendChild(figureImg);
    cardFigure.appendChild(figcaption);

    return cardFigure;
  }

  generateContent(price, URL) {
    const frag = document.createDocumentFragment();
    const productPrice = elementController.generateElement("p", "item__price");
    const productLink = elementController.generateElement("a", "item__link");

    productPrice.textContent = `R$ ${price}`;
    productLink.textContent = "Ver produto";
    productLink.setAttribute("href", URL);

    frag.appendChild(productPrice);
    frag.appendChild(productLink);

    return frag;
  }

  generateCard(product) {
    const productCard = elementController.generateElement(
      "li",
      "products__item"
    );
    const cardBanner = this.generateBanner(product.name, product.image);
    const cardContent = this.generateContent(product.price, "#");

    productCard.appendChild(cardBanner);
    productCard.appendChild(cardContent);

    return productCard;
  }

  renderProductCard(product, target) {
    const productCard = this.generateCard(product);

    target.appendChild(productCard);
  }
}
