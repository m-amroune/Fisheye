export class PhotographerCard {
  constructor(name, id, city, country, tags, tagline, price, portrait) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
  }
  // function for one photographer card
  display() {
    // creation elements main
    const listArticle = document.createElement("article");
    const imgPhotographer = document.createElement("img");
    const cardH2 = document.createElement("h2");
    const detailsPara1 = document.createElement("p");
    const detailsPara2 = document.createElement("p");
    const detailsPara3 = document.createElement("p");
    const tagsList = document.createElement("ul");

    // creation class elements main
    listArticle.classList.add("cardPhotographer");
    imgPhotographer.classList.add("imgPhotographer");
    cardH2.classList.add("namePhotographer");
    detailsPara1.classList.add("localisationPhotographer");
    detailsPara2.classList.add("citationPhotographer");
    detailsPara3.classList.add("pricePhotographer");
    tagsList.classList.add("tagsList");
    listArticle.classList.add("listArticle");

    // integration elements for  main
    imgPhotographer.src =
      "./public/img/Photographers ID Photos/" + this.portrait;
    cardH2.textContent = this.name;
    detailsPara1.textContent = this.city + " " + this.country;
    detailsPara2.textContent = this.tagline;
    detailsPara3.textContent = this.price + "€/jour";

    // append elements in an article

    listArticle.append(
      imgPhotographer,
      cardH2,
      detailsPara1,
      detailsPara2,
      detailsPara3,
      tagsList
    );

    for (let j = 0; j < this.tags.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = this.tags[j];
      listItem.textContent = "#" + this.tags[j];
      tagsList.appendChild(listItem);
    }

    return listArticle;
  }
}
