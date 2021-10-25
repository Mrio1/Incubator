/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/MyriadPro/MyriadPro-Regular.woff */ \"./src/fonts/MyriadPro/MyriadPro-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/load-icon.gif */ \"./src/images/load-icon.gif\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../images/contact/contact-bg.webp */ \"./src/images/contact/contact-bg.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n:root {\\n  --color-brown: #686608a1;\\n  --color-white: #efeff1;\\n  --text-light-blue: #77efe5;\\n  --text-dark-brown: #505050;\\n  --text-light-brown: #767070;\\n  --text-black: #000000b3;\\n  --text-white: #ffffff99;\\n  --shadow-black: #0000003d;\\n  --bg-light-blue: #71f5eb80;\\n  --bg-light-green: #20db6eea;\\n  --bg-white: #f8f9fa;\\n  --bg-light-grey: #ffffffb6;\\n  --bg-black: #021523b5;\\n  --bg-light-brown: #8a8a8a66;\\n  --bg-blue: #71f5eb;\\n}\\n\\n@font-face {\\n  font-family: \\\"MyriadPro\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff\\\");\\n}\\n.popup {\\n  position: fixed;\\n  z-index: 100;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  display: none;\\n  width: 100vw;\\n  height: 100vh;\\n  background: var(--color-brown);\\n}\\n.popup--active {\\n  display: flex;\\n}\\n\\n@media (orientation: landscape) {\\n  .popup img {\\n    height: 90%;\\n  }\\n}\\n@media (orientation: portrait) {\\n  .popup img {\\n    width: 90%;\\n  }\\n}\\n.scroll-off {\\n  overflow: hidden;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\n@media (max-width: 51.2em) {\\n  html {\\n    font-size: 55%;\\n  }\\n}\\n@media (max-width: 87.5em) {\\n  html {\\n    font-size: 50%;\\n  }\\n}\\na {\\n  text-decoration: none;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: none;\\n  font: inherit;\\n  color: inherit;\\n  background-color: transparent;\\n}\\n\\ninput, textarea {\\n  background: transparent;\\n  border: none;\\n  outline: none;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.wrapper {\\n  max-width: 144rem;\\n  min-width: 32rem;\\n  margin: 0 auto;\\n}\\n\\n.container {\\n  margin: 0 auto;\\n  max-width: 114rem;\\n  min-width: 32rem;\\n}\\n\\n.title {\\n  font-size: 3.8rem;\\n  line-height: initial;\\n  letter-spacing: 0.15rem;\\n  font-family: \\\"Montserrat\\\";\\n  color: #000000;\\n  style: normal;\\n  text-transform: uppercase;\\n}\\n\\n@media (max-width: 51.2em) {\\n  .title {\\n    font-size: 2.5rem;\\n  }\\n}\\n.title-addition {\\n  margin-top: 0.3rem;\\n  text-align: center;\\n  font-size: 1.7rem;\\n  line-height: initial;\\n  letter-spacing: 0.12rem;\\n  font-family: \\\"Merriweather\\\";\\n  color: #000000;\\n  style: normal;\\n  text-transform: uppercase;\\n}\\n\\n.header {\\n  background-color: #efeff1;\\n}\\n.header__container {\\n  padding: 6.4rem 1.5rem 12.5rem 1.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.header__logo {\\n  align-self: flex-start;\\n  font-size: 1.7rem;\\n  line-height: initial;\\n  letter-spacing: initial;\\n  font-family: \\\"Montserrat\\\";\\n  color: #000000;\\n  style: normal;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n}\\n.header__title {\\n  margin-top: 19.5rem;\\n}\\n.header__button {\\n  margin-top: 14.3rem;\\n  display: block;\\n}\\n.header__icon {\\n  margin-top: -3.7rem;\\n  margin-right: 8.7rem;\\n  align-self: flex-end;\\n}\\n\\n@media (max-width: 51.2em) {\\n  .header__container {\\n    padding: 3vw 1.5rem;\\n  }\\n  .header__title {\\n    margin-top: 10vw;\\n  }\\n  .header__button {\\n    margin-top: 10vw;\\n  }\\n  .header__icon {\\n    margin-top: 1rem;\\n    margin-right: 0;\\n    align-self: auto;\\n  }\\n}\\n@media (max-width: 43em) {\\n  .header__container {\\n    padding: 2vw 1rem;\\n  }\\n  .header__title {\\n    margin-top: 10vw;\\n  }\\n  .header__button {\\n    margin-top: 10vw;\\n  }\\n  .header__icon {\\n    margin-top: 1rem;\\n    margin-right: 0;\\n    align-self: auto;\\n  }\\n}\\n.logo {\\n  padding: 0.6rem 1rem;\\n  font-size: 1.7rem;\\n  line-height: initial;\\n  letter-spacing: initial;\\n  font-family: \\\"Montserrat\\\";\\n  color: #000000;\\n  style: normal;\\n  border: 0.5rem solid #000000;\\n}\\n.logo__accent {\\n  font-size: 2.1rem;\\n  color: var(--text-light-blue);\\n}\\n\\n.header-title {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-size: 4.5rem;\\n  line-height: initial;\\n  letter-spacing: 0.2rem;\\n  font-family: \\\"Montserrat\\\";\\n  color: var(--text-dark-brown);\\n  style: normal;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  text-shadow: 0.9rem 0.9rem 1rem var(--sadow-black);\\n}\\n.header-title__row {\\n  text-align: center;\\n}\\n.header-title__accent {\\n  background-color: var(--text-light-blue);\\n}\\n\\n@media (max-width: 51.2em) {\\n  .header-title {\\n    font-size: 2.8rem;\\n  }\\n}\\n.button {\\n  padding: 1.3rem 5.5rem;\\n  font-size: 1.8rem;\\n  line-height: initial;\\n  letter-spacing: initial;\\n  font-family: \\\"Montserrat\\\";\\n  color: var(--text-black);\\n  style: normal;\\n  text-transform: uppercase;\\n  border: 0.2rem solid #00000080;\\n  border-radius: 0.2rem;\\n  background-color: var(--bg-light-blue);\\n  transition: background-color 0.8s;\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background-color: var(--bg-light-green);\\n}\\n\\n.about {\\n  padding: 0 1rem;\\n  background: var(--bg-white);\\n}\\n.about__container {\\n  padding: 12.1rem 0 16.5rem 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.about__block {\\n  margin-top: 14.5rem;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n.about__image-block {\\n  flex-basis: 48.5%;\\n  text-align: center;\\n}\\n.about__image {\\n  height: auto;\\n}\\n.about__content-block {\\n  flex-basis: 45%;\\n}\\n.about__content-block-title {\\n  font-size: 2rem;\\n  line-height: 140%;\\n  letter-spacing: initial;\\n  font-family: \\\"Merriweather\\\";\\n  color: #000000;\\n  style: normal;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n}\\n.about__content-block-title:not(:first-child) {\\n  margin-top: 3.4rem;\\n  font-size: 1.7rem;\\n  letter-spacing: 0.1rem;\\n}\\n.about__content-block-text {\\n  margin-top: 2rem;\\n  font-size: 1.6rem;\\n  line-height: 175%;\\n  letter-spacing: 0.07rem;\\n  font-family: \\\"Raleway\\\";\\n  color: var(--text-black);\\n  style: normal;\\n}\\n\\n@media (max-width: 51.2em) {\\n  .about__container {\\n    padding: 10vw 1.5rem 10vw 1.5rem;\\n  }\\n}\\n@media (max-width: 21.5em) {\\n  .about__block {\\n    margin-top: 4rem;\\n  }\\n}\\n@media (max-width: 43em) {\\n  .about__image-block {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-basis: 40%;\\n  }\\n}\\n@media (max-width: 32em) {\\n  .about__image-block {\\n    flex-basis: 90%;\\n  }\\n}\\n@media (max-width: 43em) {\\n  .about__image {\\n    vertical-align: middle;\\n    width: 95%;\\n  }\\n}\\n@media (max-width: 32em) {\\n  .about__image {\\n    flex-basis: 90%;\\n    max-width: 40rem;\\n  }\\n}\\n@media (max-width: 56.3em) {\\n  .about__content-block {\\n    margin-top: 4vw;\\n    flex-basis: 80%;\\n  }\\n}\\n.works {\\n  padding: 0 1rem;\\n  background: var(--bg-white);\\n}\\n.works__container {\\n  padding: 11.8rem 0 12.8rem 0;\\n  text-align: center;\\n}\\n.works__examples {\\n  margin-top: 11.8rem;\\n}\\n\\n@media (max-width: 102.4em) {\\n  .works__container {\\n    padding: 10vw 0 10vw 0;\\n  }\\n}\\n@media (max-width: 51.2em) {\\n  .works__examples {\\n    margin-top: 4vw;\\n  }\\n}\\n.examples {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 1rem 1.5rem;\\n}\\n.examples__item {\\n  width: 32.4%;\\n  transition: box-shadow 0.7s;\\n}\\n.examples__item:hover {\\n  cursor: pointer;\\n  box-shadow: 0.3rem 0.3rem 0.5rem var(--shadow-black);\\n}\\n.examples__picture {\\n  position: relative;\\n  display: block;\\n  width: 100%;\\n  height: 0;\\n  padding-top: 97.2972972973%;\\n}\\n.examples__picture::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 85%;\\n  height: 85%;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat;\\n  background-position: center;\\n  background-size: contain;\\n  z-index: 0;\\n}\\n.examples__image {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: auto;\\n  z-index: 3;\\n}\\n\\n@media (max-width: 51.2em) {\\n  .examples__item {\\n    width: 45%;\\n  }\\n}\\n@media (max-width: 21.3em) {\\n  .examples__item {\\n    width: 80%;\\n  }\\n}\\n.team {\\n  padding: 0 1rem;\\n  background: var(--bg-white);\\n}\\n.team__container {\\n  padding: 9rem 0 7.5rem 0;\\n  text-align: center;\\n}\\n@media (max-width: 51.2em) {\\n  .team__container {\\n    padding: 10vw 0 10vw 0;\\n  }\\n}\\n.team__list {\\n  margin-top: 12rem;\\n}\\n@media (max-width: 51.2em) {\\n  .team__list {\\n    margin-top: 5vw;\\n  }\\n}\\n\\n.team-list {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  gap: 1.5rem 0;\\n}\\n.team-list__item {\\n  position: relative;\\n  overflow: hidden;\\n  flex-basis: calc(33% - 0.8em);\\n  height: auto;\\n  font-size: 0;\\n  cursor: pointer;\\n}\\n.team-list__item:hover .team-list__info {\\n  display: block;\\n  left: 50%;\\n}\\n.team-list__image {\\n  width: 100%;\\n  height: 100%;\\n}\\n.team-list__info {\\n  position: absolute;\\n  bottom: 0rem;\\n  left: -50%;\\n  padding: 4rem 11%;\\n  text-align: left;\\n  transform: translateX(-50%);\\n  margin-bottom: 1.5rem;\\n  width: 90.5%;\\n  background-color: var(--bg-light-blue);\\n  transition: all 1s;\\n}\\n.team-list__info::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: -1.9rem;\\n  left: 2.1rem;\\n  display: block;\\n  height: 0;\\n  width: 0;\\n  border-width: 0rem 1.1rem 1.9rem 1.1rem;\\n  border-style: solid;\\n  border-color: transparent;\\n  border-bottom-color: var(--bg-light-blue);\\n}\\n.team-list__title {\\n  font-size: 2rem;\\n  line-height: initial;\\n  letter-spacing: 0.05rem;\\n  font-family: \\\"Merriweather\\\";\\n  color: var(--text-black);\\n  style: normal;\\n}\\n.team-list__title-addition {\\n  font-size: 1.5rem;\\n  line-height: initial;\\n  letter-spacing: initial;\\n  font-family: initial;\\n  color: var(--text-light-brown);\\n  style: italic;\\n}\\n.team-list__text {\\n  margin-top: 1.5rem;\\n  text-align: left;\\n  font-size: 1.6rem;\\n  line-height: 160%;\\n  letter-spacing: 0.015rem;\\n  font-family: \\\"Raleway\\\";\\n  color: var(--text-black);\\n  style: normal;\\n}\\n.team-list__social {\\n  margin-top: 3.2rem;\\n}\\n\\n@media (max-width: 51.2em) {\\n  .team-list {\\n    justify-content: space-evenly;\\n  }\\n  .team-list__item {\\n    flex-basis: 40%;\\n  }\\n}\\n@media (max-width: 38.4em) {\\n  .team-list__item {\\n    flex-basis: 60%;\\n  }\\n}\\n.social-list {\\n  display: flex;\\n  gap: 0 1.2rem;\\n}\\n.social-list__icon {\\n  transition: transform 0.8s;\\n}\\n.social-list__icon:hover {\\n  transform: scale(1.4);\\n}\\n\\n.contact {\\n  padding: 0 1rem;\\n  position: relative;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat center;\\n  background-size: cover;\\n}\\n.contact::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: var(--bg-light-grey);\\n}\\n.contact__container {\\n  padding: 23rem 0 12.5rem 0;\\n  position: relative;\\n  z-index: 1;\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  gap: 0 10px;\\n}\\n.contact__block {\\n  background: var(--bg-black);\\n}\\n.contact__form {\\n  padding: 4.5rem 3.3rem 3.5rem 3.1rem;\\n  flex-basis: 53.95%;\\n}\\n.contact__block2 {\\n  flex-basis: 43.9%;\\n}\\n.contact__text {\\n  font-size: 1.5rem;\\n  line-height: initial;\\n  letter-spacing: initial;\\n  font-family: \\\"Raleway\\\";\\n  color: var(--text-light-brown);\\n  style: normal;\\n}\\n\\n@media (max-width: 43.8em) {\\n  .contact {\\n    padding: 0;\\n  }\\n}\\n@media (max-width: 65em) {\\n  .contact__container {\\n    padding: 10vw 0 10vw 0;\\n    justify-content: center;\\n  }\\n}\\n@media (max-width: 51.2em) {\\n  .contact__form {\\n    flex-basis: 85%;\\n  }\\n}\\n@media (max-width: 51.2em) {\\n  .contact__block2 {\\n    margin-top: 2rem;\\n    flex-basis: 85%;\\n  }\\n}\\n.contact-block2 {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 3rem 2.3rem 1.7rem 2.2rem;\\n}\\n.contact-block2__text-wrap {\\n  padding: 0 1rem;\\n}\\n.contact-block2__text {\\n  line-height: 170%;\\n}\\n.contact-block2__map {\\n  margin-top: 2rem;\\n  align-self: center;\\n  width: calc(100% - 1rem);\\n}\\n\\n@media (max-width: 43.8em) {\\n  .contact-block2 {\\n    padding: 4vw 1vw;\\n  }\\n}\\n.contact-form {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.contact-form__input {\\n  padding-bottom: 1.5rem;\\n  border-bottom: 0.1rem solid var(--text-light-brown);\\n  overflow: hidden;\\n}\\n.contact-form__input--big {\\n  padding-bottom: 7rem;\\n  resize: none;\\n  overflow: auto;\\n}\\n.contact-form__input:not(:first-child) {\\n  margin-top: 2.6rem;\\n}\\n.contact-form__button {\\n  margin-top: 4rem;\\n  align-self: flex-start;\\n  padding: 1.5rem 3.6rem;\\n  font-size: 1.8rem;\\n  line-height: initial;\\n  letter-spacing: 0.2rem \\\"Montserrat\\\";\\n  font-family: var(--text-black);\\n  color: #000000;\\n  style: normal;\\n  text-transform: uppercase;\\n  background: var(--bg-light-blue);\\n  transition: transform 0.8s;\\n}\\n.contact-form__button:hover {\\n  cursor: pointer;\\n  transform: scale(1.1);\\n}\\n\\n@media (max-width: 43.8em) {\\n  .contact-form__button {\\n    align-self: center;\\n    padding: 2rem;\\n  }\\n}\\n.footer {\\n  padding: 9rem 0 15rem 0;\\n  background: #262a2e;\\n}\\n.footer__title {\\n  text-align: center;\\n  font-size: 1.6rem;\\n  line-height: initial;\\n  letter-spacing: 0.1rem;\\n  font-family: \\\"Raleway\\\";\\n  color: var(--text-white);\\n  style: normal;\\n  text-transform: uppercase;\\n}\\n\\n@media (max-width: 51.2em) {\\n  .footer {\\n    padding: 4rem 1rem;\\n  }\\n}\\n.social {\\n  margin-top: 1.5rem;\\n  display: flex;\\n  justify-content: center;\\n  gap: 0.8rem;\\n}\\n.social__item {\\n  width: 4.5rem;\\n  height: 4rem;\\n}\\n.social__link {\\n  display: flex;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  background-color: var(--bg-light-brown);\\n  box-shadow: 0rem 0.1rem 0.2rem var(--bg-light-brown);\\n  overflow: hidden;\\n  transition: all 1s;\\n}\\n.social__link:hover {\\n  background-color: МФК(--bg-blue);\\n  box-shadow: 0rem 0.1rem 0.2rem var(--bg-blue);\\n}\\n.social__link:hover .social__icon g {\\n  fill: var(--text-black);\\n}\\n.social__icon {\\n  height: 2.2rem;\\n}\\n.social__icon g {\\n  fill: var(--text-white);\\n  transition: fill 1s;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shopno/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://shopno/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://shopno/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shopno/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shopno/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shopno/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shopno/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shopno/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shopno/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shopno/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shopno/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction offFormSubmit (formNode) {\r\n    formNode.onsubmit = (e) => {\r\n       e.preventDefault();\r\n       formNode.reset();\r\n       alert('Success')\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (offFormSubmit);\r\n\r\n\n\n//# sourceURL=webpack://shopno/./src/scripts/form.js?");

/***/ }),

/***/ "./src/scripts/imagePopUp.js":
/*!***********************************!*\
  !*** ./src/scripts/imagePopUp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ImagePopup {\r\n    constructor(parentNode) {\r\n        this.parentNode = parentNode;\r\n        this.addPopup();\r\n        this.parentNode.addEventListener('click', (e) => {\r\n            this.clickHandler(event);\r\n        })\r\n    }\r\n\r\n    clickHandler({target}){\r\n        if (target.tagName === 'IMG' && target.classList.contains('examples__image')) {\r\n            this.activatePopup(target)\r\n        }\r\n    }\r\n\r\n    addPopup() {\r\n        this.popupNode = this.createPopupNode();\r\n        document.body.appendChild(this.popupNode);\r\n        this.popupImage = document.getElementById('examplesImage');\r\n    }\r\n\r\n    createPopupNode() {\r\n        const node = document.createElement('div');\r\n        node.setAttribute('id', 'examplesPopup');\r\n        node.className = 'popup';\r\n        node.innerHTML = `<img id=\"examplesImage\" src=\"\" alt=\"\"></img>`\r\n        return node;\r\n    }\r\n\r\n    activatePopup(target) {\r\n        this.popupNode.classList.add('popup--active');\r\n        this.popupImage.setAttribute('src', target.getAttribute('src'));\r\n        this.popupClickHandler = this.deactivatePopup.bind(this);\r\n        this.popupNode.addEventListener('click', this.popupClickHandler);\r\n        this.scrollOf();\r\n    }\r\n\r\n    deactivatePopup() {\r\n        this.popupNode.classList.remove('popup--active');\r\n        this.popupImage.removeAttribute('src');\r\n        this.popupNode.removeEventListener('click', this.popupClickHandler);\r\n        this.scrollOn();\r\n    }\r\n\r\n    scrollOf() {\r\n        document.body.classList.add(\"scroll-off\");\r\n    }\r\n\r\n    scrollOn() {\r\n        document.body.classList.remove(\"scroll-off\");\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePopup);\r\n\n\n//# sourceURL=webpack://shopno/./src/scripts/imagePopUp.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _imagePopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagePopUp */ \"./src/scripts/imagePopUp.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/scripts/form.js\");\n\r\n\r\n\r\n\r\nconst examplesBlock = document.getElementById('examplesBlock');\r\nconst formNode = document.getElementById(\"form\");\r\n\r\nnew _imagePopUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"](examplesBlock);\r\n(0,_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(formNode);\r\n\n\n//# sourceURL=webpack://shopno/./src/scripts/main.js?");

/***/ }),

/***/ "./src/fonts/MyriadPro/MyriadPro-Regular.woff":
/*!****************************************************!*\
  !*** ./src/fonts/MyriadPro/MyriadPro-Regular.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c0973a02f40392384ac.woff\";\n\n//# sourceURL=webpack://shopno/./src/fonts/MyriadPro/MyriadPro-Regular.woff?");

/***/ }),

/***/ "./src/images/contact/contact-bg.webp":
/*!********************************************!*\
  !*** ./src/images/contact/contact-bg.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f510b00f173b3bde6597.webp\";\n\n//# sourceURL=webpack://shopno/./src/images/contact/contact-bg.webp?");

/***/ }),

/***/ "./src/images/load-icon.gif":
/*!**********************************!*\
  !*** ./src/images/load-icon.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39446c5bb53c5881b92d.gif\";\n\n//# sourceURL=webpack://shopno/./src/images/load-icon.gif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;