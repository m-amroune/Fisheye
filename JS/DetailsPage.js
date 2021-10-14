import { Photographer } from "./photographer.js";
import { MediaFactory } from "./media.js";

export class DetailsPage {
  constructor() {
    this.photographer = "";
    this.medias = [];
    this.header = document.querySelector(".photographer-header");
    this.main = document.querySelector(".main-photographer");
  }

  async fetchPhotographer(id) {
    const res = await fetch("data.json");
    const data = await res.json();

    const photographersData = data.photographers;

    for (let photographer of photographersData) {
      if (photographer.id == id) {
        this.photographer = new Photographer(
          photographer.name,
          photographer.id,
          photographer.city,
          photographer.country,
          photographer.tags,
          photographer.tagline,
          photographer.price,
          photographer.portrait
        );
        break;
      }
    }
    console.log(this.photographer);
  }

  displayPhotographer() {
    this.main.appendChild(this.photographer.displayDetails());
  }
}
