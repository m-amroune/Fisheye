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

    // creation class
    listArticle.classList.add("cardPhotographer");
    imgPhotographer.classList.add("imgPhotographer");
    cardH2.classList.add("namePhotographer");
    detailsPara1.classList.add("localisationPhotographer");
    detailsPara2.classList.add("citationPhotographer");
    detailsPara3.classList.add("pricePhotographer");
    tagsList.classList.add("tagsList");
    listArticle.classList.add("listArticle");

    // integration  main
    imgPhotographer.src =
      "./public/img/Photographers ID Photos/" + this.portrait;
    cardH2.textContent = this.name;
    detailsPara1.textContent = this.city + " " + this.country;
    detailsPara2.textContent = this.tagline;
    detailsPara3.textContent = this.price + "€/jour";

    // appendChild for add elements to their parents

    listArticle.appendChild(imgPhotographer);
    listArticle.appendChild(cardH2);
    listArticle.appendChild(detailsPara1);
    listArticle.appendChild(detailsPara2);
    listArticle.appendChild(detailsPara3);
    listArticle.appendChild(tagsList);
    section.appendChild(listArticle);

    let listTags = this.photographersData[i].tags;
    for (let j = 0; j < listTags.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = listItem[j];
      listItem.textContent = "#" + listTags[j];
      tagsList.appendChild(listItem);
    }

    return listArticle;
  }
}
