import { HomePage } from "./homePage.js";

async function createHomePage() {
  let homePage = new HomePage();
  await homePage.fetchPhotographer();
  homePage.displayPhotographers();
  homePage.displayTags();
}
createHomePage();
