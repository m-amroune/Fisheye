import { DetailsPage } from "./detailspage.js";
import { Modal } from "./modal.js";

// function that allows display photographers page

async function createDetailsPage() {
  const detailsPage = new DetailsPage();
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = urlParams.get("id");
  const idNumber = parseInt(photographerId, 10);
  await detailsPage.fetchPhotographer(idNumber);
  detailsPage.displayPhotographer();
  await detailsPage.fetchMedia(idNumber);
  detailsPage.displayMedias();
  detailsPage.openDropdown();
  detailsPage.closeDropdown();
  detailsPage.sortBy();
  detailsPage.totalLikes();

  const modal = new Modal();
  modal.launchModal();
  modal.closeModal();
  modal.submitModal();
}
createDetailsPage();
