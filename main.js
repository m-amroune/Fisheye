const section = document.getElementById("photographersGallery");

// loading jsonfile in variable
let requestURL =
  "https://github.com/m-amroune/MoustaphaAmroune_6_10072021/blob/main/data.json";
// new object XMLHttpRequest
let request = new XMLHttpRequest();

// Use method GET for recuperate json data
request.open("GET", requestURL);

request.responseType = "json"; // wait response in json format
request.send();

request.onload = function () {
  let photographer = request.responseType;
  showPhotographer(photographer);
};

function showPhotographer(jsonObj) {
  let photographer = jsonObj["photographers"];

  for (let i = 0; i < photographer.length; i++) {
    let ListArticle = document.createElement("article");
    let imgPhotographer = document("img");
    let cardH2 = document.createElement("h2");
    let detailsPara1 = document.createElement("p");
    let detailsPara2 = document.createElement("p");
    let detailsPara3 = document.createElement("p");
    let tagsList = document.createElement("ul");

    imgPhotographer.textContent = photographer[i].portrait;
    cardH2.textContent = photographer[i].name + photographer[i].portrait;
    detailsPara1.textContent =
      photographer[i].city + ", " + photographer.country;
    detailsPara2.textContent = photographer[i].tagline;
    detailsPara3.textContent = photographer[i].price;

    let listTags = photographer[i].tags;
    for (let j = 0; j < listTags.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = listItem[j];
      tagsList.appendChild(listItem);
    }

    ListArticle.appendChild(imgPhotographer);
    ListArticle.appendChild(cardH2);
    ListArticle.appendChild(detailsPara1);
    ListArticle.appendChild(detailsPara2);
    ListArticle.appendChild(detailsPara3);
    ListArticle.appendChild(tagsList);
    section.appendChild();
  }
}
