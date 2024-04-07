// The 2 variables below gets an element of the HTML

// This one is for the checkbox
const darkModeCheckbox = document.getElementById("dark-mode");
// This one is for the image of the dark/light mode button
const darkModeImg = document.getElementById("dark-mode-icon");

// These 2 variables below are the image "src" to be switched when the user clicks on the button
const darkModeIcon = "./static/images/light.svg";
const lightModeIcon = "./static/images/dark.svg";

// This part of the code, JS will check if the users settings on their device is set to dark mode
// If it is, then it will "check" the checkbox, so the page will start with dark mode enabled to follow the users settings
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
)
  darkModeCheckbox.checked = true;

// This code below will track the darkModeCheckbox. If it changes (meaning the user clicked on it)
// then it will change the icon as well
darkModeCheckbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    darkModeImg.src = darkModeIcon;
  } else {
    darkModeImg.src = lightModeIcon;
  }
});
