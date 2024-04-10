// The 2 variables below gets an element of the HTML

// This one is for the checkbox
const darkModeCheckbox = document.getElementById("dark-mode");
// This one is for the image of portfolio card
const darkModePortfolioImage = document.getElementById(
  "portfolio-project-image"
);

// These 2 variables below are the image "src" to be switched when the user clicks on the button
const darkModeImage = "./static/images/portfolio-light.PNG";
const lightModeImage = "./static/images/portfolio-dark.PNG";

// This part of the code, JS will check if the users settings on their device is set to dark mode
// If it is, then it will "check" the checkbox, so the page will start with dark mode enabled to follow the users settings
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  darkModeCheckbox.checked = true;
  darkModePortfolioImage.src = darkModeImage;
}

// This part is for switch the portfolio card image when the user clicks on the button
darkModeCheckbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    darkModePortfolioImage.src = darkModeImage;
  } else {
    darkModePortfolioImage.src = lightModeImage;
  }
});
