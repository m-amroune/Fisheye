import { DetailsPage } from "./DetailsPage.js";
import { Lightbox } from "./Lightbox.js";
import { Modal } from "./Modal.js";

async function createDetailsPage() {
  let detailsPage = new DetailsPage();
  let urlParams = new URLSearchParams(window.location.search);
  const photographerId = urlParams.get("id");
  const idNumber = parseInt(photographerId, 10);
  await detailsPage.fetchPhotographer(idNumber);
  detailsPage.displayPhotographer();
  await detailsPage.fetchMedia(idNumber);
  detailsPage.displayMedias();
  detailsPage.openDropdown();
  detailsPage.closeDropdown();
  detailsPage.sortBy();

  let lightbox = new Lightbox();
  lightbox.launchLightbox();
  lightbox.closeLightbox();

  let modal = new Modal();
  modal.launchModal();
  modal.closeModal();
  modal.submitModal();
}
createDetailsPage();
