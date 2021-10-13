import { DetailsPage } from "./DetailsPage.js";

async function createDetailsPage() {
  let detailsPage = new DetailsPage();
  const urlParams = new URLSearchParams(window.location.search);
  const photographerId = urlParams.get("id");
  console.log(photographerId);
  const idNumber = parseInt(photographerId, 10);
  await detailsPage.fetchPhotographer(idNumber);
  console.log(idNumber);
  console.log(detailsPage.photographer);
  detailsPage.displayPhotographer();
}
createDetailsPage();
