import { PhotographerCard } from "./photographer.js";
export class HomePage {
  constructor() {
    this.section = document.getElementById("photographersGallery");
    this.header = document.querySelector(".header");
    this.photographersData = [];
    this.headerTags = [];
  }

  async fetchPhotographer() {
    const res = await fetch("data.json");
    const data = await res.json();

    const photographersData = data.photographers;

    for (let photographer of photographersData) {
      const card = new PhotographerCard(
        photographer.name,
        photographer.id,
        photographer.city,
        photographer.country,
        photographer.tags,
        photographer.tagline,
        photographer.price,
        photographer.portrait
      );
      this.photographersData.push(card);
    }
  }

  displayPhotographers() {
    this.photographersData.forEach((photographer) => {
      this.section.appendChild(photographer.display());
    });
  }
  displayTags() {
    this.headerTags = new Set(this.headerTags);

    // creation elements tags navigation
    const navigation = document.createElement("nav");
    const tagsListNavigation = document.createElement("ul");

    // creation class tags navigation
    tagsListNavigation.classList.add("tagListNavigation");
    navigation.classList.add("navigation");

    const listHashtags = this.photographersData.map(
      (headerTags) => headerTags.tags
    ); // conversion in array
    console.log(listHashtags);
    const listHashtagsSingle = [].concat(...listHashtags); // single array
    console.log(listHashtagsSingle);
    let HashtagsWithoutDuplicate = Array.from(new Set(listHashtagsSingle)); // delete duplication
    console.log(HashtagsWithoutDuplicate);

    for (let j = 0; j < HashtagsWithoutDuplicate.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = listItem[j];
      listItem.innerHTML = "<a>" + "#" + HashtagsWithoutDuplicate[j] + "</a>";
      tagsListNavigation.appendChild(listItem);
      listItem.addEventListener("click", () => {
        let cards = document.querySelectorAll(".cardPhotographer");

        for (let card of cards) {
          card.style.display = "flex";

          if (!card.textContent.includes(HashtagsWithoutDuplicate[j])) {
            card.style.display = "none";
          }
        }
      });
      // appendChild in nav
      navigation.appendChild(tagsListNavigation);
      this.header.appendChild(navigation);
    }
  }
}
