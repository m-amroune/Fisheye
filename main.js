const section = document.getElementById("photographersGallery");
const header = document.querySelector(".header");

let photographersData = [];
let headerTags = [];

const fetchPhotographers = async () => {
  await fetch("data.json")
    .then((res) => res.json())
    .then((data) => (photographersData = data.photographers));
};

const photographersDisplay = async () => {
  await fetchPhotographers();

  // creation elements tags navigation
  const navigation = document.createElement("nav");
  const tagsListNavigation = document.createElement("ul");

  // creation class tags navigation
  tagsListNavigation.classList.add("tagListNavigation");
  navigation.classList.add("navigation");

  let headerTags = photographersData;
  const listHashtags = headerTags.map((headerTags) => headerTags.tags); // conversion in array
  console.log(listHashtags);
  listHashtagsSingle = [].concat(...listHashtags); // single array
  console.log(listHashtagsSingle);
  let HashtagsWithoutDuplicate = Array.from(new Set(listHashtagsSingle)); // delete duplication
  console.log(HashtagsWithoutDuplicate);

  for (let j = 0; j < HashtagsWithoutDuplicate.length; j++) {
    let listItem = document.createElement("li");
    listItem.textContent = listItem[j];
    listItem.textContent = "#" + HashtagsWithoutDuplicate[j];
    tagsListNavigation.appendChild(listItem);
  }

  // appendChild in nav
  navigation.appendChild(tagsListNavigation);
  header.appendChild(navigation);

  for (let i = 0; i < photographersData.length; i++) {
    // creation elements main
    const listArticle = document.createElement("article");
    const imgPhotographer = document.createElement("img");
    const cardH2 = document.createElement("h2");
    const detailsPara1 = document.createElement("p");
    const detailsPara2 = document.createElement("p");
    const detailsPara3 = document.createElement("p");
    const tagsList = document.createElement("ul");

    imgPhotographer.classList.add("imgPhotographer");
    cardH2.classList.add("namePhotographer");
    detailsPara1.classList.add("localisationPhotographer");
    detailsPara2.classList.add("citationPhotographer");
    detailsPara3.classList.add("pricePhotographer");
    tagsList.classList.add("tagsList");
    listArticle.classList.add("listArticle");

    // integration html main
    imgPhotographer.src =
      "./public/img/Photographers ID Photos/" + photographersData[i].portrait;
    cardH2.textContent = photographersData[i].name;
    detailsPara1.textContent =
      photographersData[i].city + " " + photographersData[i].country;
    detailsPara2.textContent = photographersData[i].tagline;
    detailsPara3.textContent = photographersData[i].price + "€/jour";

    let listTags = photographersData[i].tags;
    for (let j = 0; j < listTags.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = listItem[j];
      listItem.textContent = "#" + listTags[j];
      tagsList.appendChild(listItem);
    }

    // appendChild in article

    listArticle.appendChild(imgPhotographer);
    listArticle.appendChild(cardH2);
    listArticle.appendChild(detailsPara1);
    listArticle.appendChild(detailsPara2);
    listArticle.appendChild(detailsPara3);
    listArticle.appendChild(tagsList);
    section.appendChild(listArticle);
  }
};
photographersDisplay();
