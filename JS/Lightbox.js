import { ImageFactory, VideoFactory } from "./Media.js";

export class Lightbox {
  constructor(medias) {
    this.lightboxBg = document.querySelector("#lightbox-background");
    this.btnClose = document.querySelector("#lightbox-close");
    this.btnPrevious = document.querySelector("#lightbox-previous");
    this.btnNext = document.querySelector("#lightbox-next");
    this.photographerWorkLink = document.querySelectorAll(
      ".photographer-work-link"
    );
    this.lightboxContent = document.querySelector("#lightbox-content");
    this.position = 0;
    this.medias = medias;
    this.imgSlide = "";
    console.log(this.medias);
    this.btnPrevious.addEventListener("click", () => {
      this.previousSlide();
    });

    this.btnNext.addEventListener("click", () => {
      this.nextSlide();
    });

    this.btnClose.addEventListener("click", () => {
      this.closeLightbox();
    });
  }

  lightboxMedias() {
    // this.photographerWorkLink.forEach((elt, index) =>
    //   elt.addEventListener("click", (e) => {
    //     this.launchLightbox(index);
    //     this.currentSlide();
    //   })
    // );
  }

  createSlides() {
    console.log(this.medias[this.position] instanceof ImageFactory);
    console.log(this.medias[this.position] instanceof VideoFactory);
    if (this.medias[this.position] instanceof ImageFactory) {
      const imgSlide = document.createElement("img");
      const titleSlide = document.createElement("p");
      imgSlide.classList.add("media-work-slide");
      titleSlide.classList.add("title-work-slide");
      imgSlide.src = "./public/img/Media/" + this.medias[this.position].url;
      titleSlide.textContent = `${this.medias[this.position].title}`;
      this.lightboxContent.append(imgSlide, titleSlide);
    } else if (this.medias[this.position] instanceof VideoFactory) {
      const imgSlide = document.createElement("video");
      const titleSlide = document.createElement("p");
      imgSlide.classList.add("media-work-slide");
      titleSlide.classList.add("title-work-slide");
      imgSlide.src = "./public/img/Media/" + this.medias[this.position].url;
      titleSlide.textContent = `${this.medias[this.position].title}`;
      this.lightboxContent.append(imgSlide, titleSlide);
    }
  }

  displaySlides() {
    this.lightboxBg.style.display = "flex";
    this.removeMedia();
  }

  launchLightbox(index) {
    // console.log(index);
    // console.log(this.medias[index]);
    this.openModal();
    this.position = index;
    this.currentSlide(this.position);
    this.createSlides();
  }

  currentSlide() {
    this.displaySlides();
  }

  nextSlide() {
    if (this.position < this.medias.length - 1) {
      this.position++;
    } else {
      this.position = 0;
    }
    this.removeMedia();
    this.createSlides();
  }

  previousSlide() {
    if (this.position > 0) {
      this.position--;
    } else {
      this.position = this.medias.length - 1;
    }
    this.removeMedia();
    this.createSlides();
  }

  removeMedia() {
    while (this.lightboxContent.firstChild) {
      this.lightboxContent.removeChild(this.lightboxContent.firstChild);
    }
  }

  openModal() {
    this.lightboxBg.style.display = "flex";
    this.createSlides();
  }

  closeLightbox() {
    this.lightboxBg.style.display = "none";
  }
}
