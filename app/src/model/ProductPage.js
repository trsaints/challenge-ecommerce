import { Context } from "../class/Context.js";
import { elementController } from "../controllers/element-controller.js";
import { productsController } from "../controllers/products-controller.js";
import { productController } from "../controllers/product-controller.js";

export class ProductPage {
  #generateImage(context, file) {
    const entryPoint = new Context("./app/", "../");
    const path = `${entryPoint[context]}assets/images/${file}`;
    const image = elementController.generate("img", "product__image");

    image.setAttribute("src", path);

    return image;
  }

  #generateRelated(category, path) {
    const aside = elementController.generate("aside", "product__related");
    const header = elementController.generate("header", "related__header");
    const icon = elementController.generate("i", "fa-solid");
    icon.classList.add("fa-arrow-right");

    const headerContent = {
      title: elementController.generate("h3", "related__header--title"),
      link: elementController.generate("a", "related__header--link"),
    };

    headerContent.title.textContent = "Produtos Similares";
    headerContent.link.textContent = "Ver Todos";
    headerContent.link.appendChild(icon);

    const context = new Context(
      "./app/screens/products.html",
      "./products.html"
    );

    headerContent.link.setAttribute("href", context[path]);

    header.appendChild(headerContent.title);
    header.appendChild(headerContent.link);

    const related = elementController.generate("ul", "related__list");
    related.classList.add("expanded");

    related.dataset.products = category;

    productsController.renderList("abridged", related);
    aside.appendChild(header);
    aside.appendChild(related);

    return aside;
  }

  #generateContent(product) {
    const info = elementController.generate("section", "product__info");

    const content = {
      title: elementController.generate("h2", "product__title"),
      description: elementController.generate("p", "product__description"),
      price: elementController.generate("p", "product__price"),
    };

    content.title.textContent = product.name;
    content.description.textContent = product.description;
    content.price.innerHTML = `<span class="sr-only">Preço: </span>R$ ${product.price}`;

    info.appendChild(content.title);
    info.appendChild(content.price);
    info.appendChild(content.description);

    return info;
  }

  #setCloseEvent(button) {
    const wrapper = document.querySelector("[data-element='product']");
    const context = document.querySelector("[data-context]");

    button.addEventListener("click", () => {
      productController.close(wrapper);
      elementController.show(context);
    });
  }

  #generateButton() {
    const button = elementController.generate("button", "product__close");
    button.innerHTML = "<i class='fa-solid fa-arrow-left'></i> Voltar";
    this.#setCloseEvent(button);

    return button;
  }

  #generate(product, context, category) {
    const frag = document.createDocumentFragment();
    const productContent = elementController.generate(
      "div",
      "product__content"
    );

    const content = {
      info: this.#generateContent(product),
      image: this.#generateImage(context, product.image),
      related: this.#generateRelated(category, context),
      button: this.#generateButton(),
    };

    productContent.appendChild(content.info);
    productContent.appendChild(content.image);
    frag.appendChild(content.button);
    frag.appendChild(productContent);
    frag.appendChild(content.related);

    return frag;
  }

  render(product, category, target) {
    const pageContext = document.querySelector("[data-context]");
    const page = this.#generate(product, pageContext.dataset.context, category);

    target.appendChild(page);
  }
}
