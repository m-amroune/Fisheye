const section = document.getElementById("photographersGallery");

let photographersData = [];

const fetchPhotographers = async () => {
  await fetch("data.json")
    .then((res) => res.json())
    .then((data) => (photographersData = data.photographers));

  console.log(photographersData);
};

const photographersDisplay = async () => {
  await fetchPhotographers();

  let photographer = photographersData;

  for (let i = 0; i < photographer.length; i++) {
    let ListArticle = document.createElement("article");
    let imgPhotographer = document.createElement("img");
    let cardH2 = document.createElement("h2");
    let detailsPara1 = document.createElement("p");
    let detailsPara2 = document.createElement("p");
    let detailsPara3 = document.createElement("p");
    let tagsList = document.createElement("ul");

    imgPhotographer.src = photographer[i].portrait;
    cardH2.textContent = photographer[i].name + photographer[i].portrait;
    detailsPara1.textContent =
      photographer[i].city + ", " + photographer[i].country;
    detailsPara2.textContent = photographer[i].tagline;
    detailsPara3.textContent = photographer[i].price + "€/jour";

    let listTags = photographer[i].tags;
    for (let j = 0; j < listTags.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = "#" + listTags[j];
      tagsList.appendChild(listItem);
    }

    ListArticle.appendChild(imgPhotographer);
    ListArticle.appendChild(cardH2);
    ListArticle.appendChild(detailsPara1);
    ListArticle.appendChild(detailsPara2);
    ListArticle.appendChild(detailsPara3);
    ListArticle.appendChild(tagsList).style.display = "flex";
    section.appendChild(ListArticle);
  }
};

photographersDisplay();
