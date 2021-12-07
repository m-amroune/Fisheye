import { HomePage } from "./homepage.js";

async function createHomePage() {
  let homePage = new HomePage();
  await homePage.fetchPhotographers();
  homePage.displayPhotographers();
  homePage.displayTags();
}
createHomePage();
