import { HomePage } from "./homepage.js";

// function that allows display homePage
async function createHomePage() {
  let homePage = new HomePage();
  await homePage.fetchPhotographers();
  homePage.displayPhotographers();
  homePage.displayTags();
}
createHomePage();
