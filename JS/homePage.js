import { Photographer } from "./photographer.js";
export class HomePage {
  constructor() {
    this.section = document.getElementById("photographersGallery");
    this.header = document.querySelector(".header");
    this.photographersData = [];
    this.headerTags = [];
  }

  displayPassContent() {
    const passContentDiv = document.createElement("div");
    const passContentLink = document.createElement("a");

    passContentLink.classList.add("passContent");
    const body = document.querySelector("body");
    passContentLink.href = "#";
    passContentLink.textContent = "Passer au contenu";
    passContentDiv.append(passContentLink);
    body.append(passContentDiv);
    const passContent = document.querySelector(".passContent");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        passContent.style.display = "flex";
      } else if (window.scrollY < 50) {
        passContent.style.display = "none";
      } else {
        passContent.addEventListener("click", () => {
          passContent.style.display = "none";
        });
      }
    });
  }

  async fetchPhotographers() {
    const res = await fetch("data.json");
    const data = await res.json();

    const photographersData = data.photographers;
    for (let photographer of photographersData) {
      const card = new Photographer(
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
      this.section.appendChild(photographer.displayCard());
    });
  }

  // function for Header hashtags

  displayTags() {
    this.headerTags = new Set(this.headerTags);

    const navigation = document.createElement("nav");
    const tagsListNavigation = document.createElement("ul");

    tagsListNavigation.classList.add("tagListNavigation");
    navigation.classList.add("navigation");

    const listHashtags = this.photographersData.map(
      (headerTags) => headerTags.tags
    ); // conversion in array
    console.log(listHashtags);

    const listHashtagsSingle = [].concat(...listHashtags); // single array
    console.log(listHashtagsSingle);
    let HashtagsNotDuplicate = Array.from(new Set(listHashtagsSingle)); // delete duplication
    console.log(HashtagsNotDuplicate);

    for (let j = 0; j < HashtagsNotDuplicate.length; j++) {
      let listItem = document.createElement("li");
      listItem.textContent = listItem[j];
      listItem.innerHTML =
        "<a>" +
        "#" +
        HashtagsNotDuplicate[j].charAt(0).toUpperCase() +
        HashtagsNotDuplicate[j].slice(1);
      +"</a>";
      tagsListNavigation.appendChild(listItem);
      listItem.addEventListener("click", () => {
        let cards = document.querySelectorAll(".cardPhotographer");

        for (let card of cards) {
          card.style.display = "flex";

          if (!card.textContent.includes(HashtagsNotDuplicate[j])) {
            card.style.display = "none";
          }
        }
      });

      // appendChild in nav
      navigation.append(tagsListNavigation);
      this.header.appendChild(navigation);
    }
  }
}
