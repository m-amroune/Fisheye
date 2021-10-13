export class Photographer {
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
  displayCard() {
    const listArticle = document.createElement("article");
    const linkPhotographer = document.createElement("a");
    const imgPhotographer = document.createElement("img");
    const cardH2 = document.createElement("h2");
    const detailsPara1 = document.createElement("p");
    const detailsPara2 = document.createElement("p");
    const detailsPara3 = document.createElement("p");
    const tagsList = document.createElement("ul");

    listArticle.classList.add("cardPhotographer");
    linkPhotographer.classList.add("linkPhotographer");
    imgPhotographer.classList.add("imgPhotographer");
    cardH2.classList.add("namePhotographer");
    detailsPara1.classList.add("localisationPhotographer");
    detailsPara2.classList.add("citationPhotographer");
    detailsPara3.classList.add("pricePhotographer");
    tagsList.classList.add("tagsList");
    listArticle.classList.add("listArticle");

    linkPhotographer.href = "../photographer-page.html?id=" + this.id;
    imgPhotographer.src =
      "./public/img/Photographers ID Photos/" + this.portrait;
    cardH2.textContent = `${this.name}`;
    detailsPara1.textContent = `${this.city}, ${this.country}`;
    detailsPara2.textContent = `${this.tagline}`;
    detailsPara3.textContent = `${this.price}€/jour`;

    // append elements in an article

    linkPhotographer.append(imgPhotographer, cardH2);

    listArticle.append(
      linkPhotographer,
      detailsPara1,
      detailsPara2,
      detailsPara3,
      tagsList
    );

    for (let j = 0; j < this.tags.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = "#" + this.tags[j];
      tagsList.appendChild(listItem);
    }

    return listArticle;
  }
  displayDetails() {
    const infoSection = document.createElement("section");
    const contactBtn = document.createElement("button");
    const imgSection = document.createElement("section");

    const nameH1 = document.createElement("h1");
    const localisation = document.createElement("p");
    const citation = document.createElement("p");
    const tagsList = document.createElement("ul");
    const imgPhotographer = document.createElement("img");

    infoSection.classList.add("infoPhotographer");
    contactBtn.classList.add("contactMe");
    imgSection.classList.add("PicturePhotographer");
    nameH1.classList.add("namePhotographerProfile");
    localisation.classList.add("localisationPhotographerProfile");
    citation.classList.add("citationPhotographerProfile");
    tagsList.classList.add("tagsListProfile");
    imgPhotographer.classList.add("imgPhotographerProfile");

    nameH1.textContent = `${this.name}`;
    localisation.textContent = `${this.city}, ${this.country}`;
    citation.textContent = `${this.tagline}`;

    infoSection.append(nameH1, localisation, citation, tagsList, imgSection);

    for (let j = 0; j < this.tags.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = this.tags[j];
      listItem.textContent = "#" + this.tags[j];
      tagsList.appendChild(listItem);
    }
    imgPhotographer.src =
      "./public/img/Photographers ID Photos/" + this.portrait;
    imgSection.appendChild(imgPhotographer);
    return infoSection;
  }
}
