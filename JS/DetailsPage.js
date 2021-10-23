import { Photographer } from "./Photographer.js";
import { MediaFactory } from "./Media.js";

export class DetailsPage {
  constructor() {
    this.photographer = "";
    this.medias = [];
    this.header = document.querySelector(".photographer-header");
    this.banner = document.querySelector(".photographer-banner");
    this.photographerWork = document.querySelector(".photographer-work");
  }

  async fetchPhotographer(id) {
    const res = await fetch("data.json");
    const data = await res.json();

    for (let photographer of data.photographers) {
      if (photographer.id === id) {
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
      }
    }
    console.log(this.photographer);
    // this.modal = new Modal(this.photographer.name);
  }

  displayPhotographer() {
    this.banner.appendChild(this.photographer.displayDetails());
    // this.modal.launchModal();
    // this.modal.closeModal();
    // this.modal.submitModal();
  }

  async fetchMedia(id) {
    const res = await fetch("data.json");
    const data = await res.json();

    for (let media of data.media) {
      if (media.photographerId === id && media.video === undefined) {
        let image = new MediaFactory("image", {
          id: media.id,
          src: media.image,
          title: media.title,
          photographerId: media.photographerId,
          tags: media.tags,
          likes: media.likes,
          date: media.date,
          price: media.price,
        });
        this.medias.push(image);
      } else if (media.photographerId === id && media.image === undefined) {
        let video = new MediaFactory("video", {
          id: media.id,
          src: media.video,
          title: media.title,
          photographerId: media.photographerId,
          tags: media.tags,
          likes: media.likes,
          date: media.date,
          price: media.price,
        });
        this.medias.push(video);
      }
    }
  }

  displayMedias() {
    for (let media of this.medias) {
      this.photographerWork.appendChild(media.displayMedia());
    }
  }
}
