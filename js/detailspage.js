import { Photographer } from "./photographer.js";
import { MediaFactory } from "./media.js";
import { Lightbox } from "./lightbox.js";

export class DetailsPage {
  constructor() {
    this.photographer = "";
    this.medias = [];
    this.header = document.querySelector(".photographer-header");
    this.banner = document.querySelector(".photographer-banner");
    this.photographerWork = document.querySelector(".photographer-work");
    this.lightboxContent = document.querySelector("#lightbox-content");
    this.dropdownOptions = document.querySelector("#dropdown-options");
    this.btnClose = document.querySelector("#lightbox-close");
    this.popularity = document.querySelector("#optionPopularity");
    this.date = document.querySelector("#optionDate");
    this.title = document.querySelector("#optionTitle");
    this.btnDown = document.querySelector("#btn-down");
    this.btnUp = document.querySelector("#btn-up");
    this.popularityOption = "Popularité";
    this.dateOption = "Date";
    this.titleOption = "Titre";

    this.popularity.textContent = this.popularityOption;
    this.date.textContent = this.dateOption;
    this.title.textContent = this.titleOption;

    this.date.addEventListener("click", (e) => {
      this.date.style.order = "1";
      this.popularity.style.order = "2";
      this.title.style.order = "3";
      this.removeGallery();
      this.sortBy("Date");
      this.displayMedias();
    });
    // keyboard action
    this.date.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.date.style.order = "1";
        this.popularity.style.order = "2";
        this.title.style.order = "3";
        this.removeGallery();
        this.sortBy("Date");
        this.displayMedias();
      }
    });

    this.popularity.addEventListener("click", (e) => {
      this.removeGallery();
      this.sortBy("Popularity");
      this.displayMedias();
      this.popularity.style.order = "1";
      this.date.style.order = "2";
      this.title.style.order = "3";
    });
    // keyboard action
    this.popularity.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.removeGallery();
        this.sortBy("Popularity");
        this.displayMedias();
        this.popularity.style.order = "1";
        this.date.style.order = "2";
        this.title.style.order = "3";
      }
    });

    this.title.addEventListener("click", (e) => {
      this.removeGallery();
      this.sortBy("Title");
      this.displayMedias();
      this.title.style.order = "1";
      this.date.style.order = "2";
      this.popularity.style.order = "3";
    });

    // keyboard action
    this.title.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.removeGallery();
        this.sortBy("Title");
        this.displayMedias();
        this.title.style.order = "1";
        this.date.style.order = "2";
        this.popularity.style.order = "3";
      }
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
          alt: media.alt,
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
          alt: media.alt,
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
      this.btnDown.setAttribute("aria-expanded", "true");
    });
    this.btnDown.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.dropdownOptions.style.display = "flex";
        this.btnDown.setAttribute("aria-expanded", "true");
      }
    });
  }

  closeDropdown() {
    this.btnUp.addEventListener("click", () => {
      this.dropdownOptions.style.display = "none";
    });
    this.btnUp.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.dropdownOptions.style.display = "none";
      }
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

      currentMedia.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          this.lightbox.launchLightbox(i);
        }
      });

      this.photographerWork.appendChild(currentMedia);
    }
  }
}
