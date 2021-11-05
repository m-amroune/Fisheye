export class Lightbox {
  constructor() {
    this.lightboxBg = document.querySelector("#lightbox-background");
    this.btnClose = document.querySelector("#lightbox-close");
    this.btnPrevious = document.querySelector("#lightbox-previous");
    this.btnNext = document.querySelector("#lightbox-next");
    this.photographerWorkLink = document.querySelectorAll(
      ".photographer-work-link"
    );
  }

  launchLightbox() {
    this.photographerWorkLink.forEach((elt) =>
      elt.addEventListener("click", (e) => {
        this.lightboxBg.style.display = "flex";
      })
    );
  }

  closeLightbox() {
    this.btnClose.addEventListener("click", (e) => {
      this.lightboxBg.style.display = "none";
    });
  }
}
