import { elementController } from "../controllers/element-controller.js";
import { iconController } from "../controllers/icon-controller.js";
import { Context } from "../class/Context.js";

export class ProductCard {
  generateBanner(caption, image, context) {
    const entryPoint = new Context("./app/", "../");
    const path = `${entryPoint[context]}assets/images/${image}`;

    const figure = elementController.generate("figure", "item__banner");
    
    const banner = {
      img: elementController.generate("img", "item__image"),
      caption: elementController.generate("figcaption", "item__description"),
    };

    banner.img.setAttribute("src", path);
    banner.caption.textContent = caption;

    figure.appendChild(banner.img);
    figure.appendChild(banner.caption);

    return figure;
  }

  generateContent(price, URL) {
    const frag = document.createDocumentFragment();

    const content = {
      price: elementController.generate("p", "item__price"),
      link: elementController.generate("a", "item__link"),
    };

    const linkIcon = elementController.generate("i", "fa-solid");
    linkIcon.classList.add("fa-up-right-from-square");
    iconController.hideIcon(linkIcon);

    content.price.textContent = `R$ ${price}`;
    content.link.textContent = "Ver produto ";
    content.link.appendChild(linkIcon);
    content.link.setAttribute("href", URL);

    frag.appendChild(content.price);
    frag.appendChild(content.link);

    return frag;
  }

  generate(product, context) {
    const productCard = elementController.generate("li", "products__item");

    const card = {
      banner: this.generateBanner(product.name, product.image, context),
      content: this.generateContent(product.price, "#"),
    };

    productCard.appendChild(card.banner);
    productCard.appendChild(card.content);

    return productCard;
  }

  render(product, target) {
    const pageContext = document.querySelector("[data-catalog]");
    const productCard = this.generate(product, pageContext.dataset.catalog);

    target.appendChild(productCard);
  }
}
