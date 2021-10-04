import "../styles/style.scss"
import WorkPopup from "./popUp";
import ofFormSubmit from "./form";

const examplesBlock = document.getElementById('examplesBlock');
const formNode = document.getElementById("form");

new WorkPopup(examplesBlock);
ofFormSubmit(formNode);
