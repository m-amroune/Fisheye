import { Photographer } from "./Photographer.js";
import { MediaFactory } from "./Media.js";
import { Lightbox } from "./Lightbox.js";

export class DetailsPage {
  constructor() {
    this.photographer = "";
    this.medias = [];
    this.header = document.querySelector(".photographer-header");
    this.banner = document.querySelector(".photographer-banner");
    this.photographerWork = document.querySelector(".photographer-work");
    this.lightboxContent = document.querySelector("#lightbox-content");
    this.dropdownOptions = document.querySelector("#dropdown-options");
    this.popularity = document.querySelector("#optionPopularity");
    this.date = document.querySelector("#optionDate");
    this.title = document.querySelector("#optionTitle");
    this.btnDown = document.querySelector("#btn-down");
    this.btnUp = document.querySelector("#btn-up");

    this.date.addEventListener("click", (e) => {
      this.removeGallery();
      this.sortBy("Date");
      this.displayMedias();
    });
    this.popularity.addEventListener("click", (e) => {
      this.removeGallery();
      this.sortBy("Popularity");
      this.displayMedias();
    });
    this.title.addEventListener("click", (e) => {
      this.removeGallery();
      this.sortBy("Title");
      this.displayMedias();
    });

    this.likeCount = document.querySelector(".total-likes-number");
    this.priceCount = document.querySelector(".price-day");
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
  }
  displayPhotographer() {
    this.banner.appendChild(this.photographer.displayDetails());
  }

  async fetchMedia(id) {
    const res = await fetch("data.json");
    const data = await res.json();

    for (let media of data.media) {
      if (media.photographerId === id && media.video === undefined) {
        let image = new MediaFactory("image", {
          id: media.id,
          url: media.image,
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
          url: media.video,
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
    this.lightbox = new Lightbox(this.medias);
  }

  // SORT BY TITLE, DATE AND POPULARITY

  sortBy(type) {
    let sortingMedias = [];
    if (type === "Popularity") {
      sortingMedias = this.medias.sort(function (a, b) {
        return b.likes - a.likes;
      });
    } else if (type === "Date") {
      sortingMedias = this.medias.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
    } else if (type === "Title") {
      sortingMedias = this.medias.sort((a, b) => {
        return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
      });
    }
  }

  removeGallery() {
    const gallery = document.querySelectorAll(".photographer-work-article");
    for (let media of gallery) {
      this.photographerWork.removeChild(media);
    }
  }

  // OPEN AND CLOSE DROPDOWN

  openDropdown() {
    this.btnDown.addEventListener("click", () => {
      this.dropdownOptions.style.display = "flex";
    });
  }

  closeDropdown() {
    this.btnUp.addEventListener("click", () => {
      this.dropdownOptions.style.display = "none";
    });
  }

  // Counter total likes

  totalLikes() {
    let nbrLikes = 0;
    for (let i = 0; i < this.medias.length; i++) {
      nbrLikes += this.medias[i].likes;
    }
    this.likeCount.textContent = nbrLikes;
    this.priceCount.textContent = this.photographer.price + "€ / jour";
  }

  // DISPLAY MEDIAS

  displayMedias() {
    for (let i = 0; i < this.medias.length; i++) {
      let media = this.medias[i];
      let currentMedia = media.displayMedia();
      currentMedia.addEventListener("click", () => {
        this.lightbox.launchLightbox(i);
      });

      this.photographerWork.appendChild(currentMedia);
    }
  }
}
