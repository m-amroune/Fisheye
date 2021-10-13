import { HomePage } from "./HomePage.js";

async function createHomePage() {
  let homePage = new HomePage();
  await homePage.fetchPhotographers();
  homePage.displayPhotographers();
  homePage.displayTags();
  homePage.displayPassContent();
}
createHomePage();
