import "../styles/style.scss"
import ImagePopup from "./imagePopUp";
import offFormSubmit from "./form";

const examplesBlock = document.getElementById('examplesBlock');
const formNode = document.getElementById("form");

new ImagePopup(examplesBlock);
offFormSubmit(formNode);
