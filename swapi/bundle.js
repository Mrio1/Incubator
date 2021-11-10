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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Sterilict-L3aen.ttf */ \"./src/fonts/Sterilict-L3aen.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/StarJediOutline-y0xm.ttf */ \"./src/fonts/StarJediOutline-y0xm.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/star-bg.jpg */ \"./src/images/star-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".nav {\\n  position: relative;\\n  padding: 1rem;\\n  background-color: var(--light-blue);\\n}\\n.nav__container {\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 1rem 0;\\n}\\n.nav__list {\\n  flex-grow: 1;\\n  display: flex;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n}\\n.nav__item {\\n  margin: 0.5rem;\\n  padding: 0.5rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 4rem;\\n  background-color: var(--light-grey);\\n  font-family: \\\"Jedi\\\";\\n  font-size: 1.8rem;\\n  border-radius: 0.5rem;\\n  text-transform: uppercase;\\n}\\n.nav__item--active, .nav__item:hover {\\n  cursor: pointer;\\n  background: var(--pink);\\n  box-shadow: 0.1rem 0.1rem 0.4rem var(--black);\\n}\\n.nav__burger {\\n  display: none;\\n}\\n\\n.burger {\\n  position: relative;\\n  height: 2rem;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.burger:hover {\\n  cursor: pointer;\\n  transform: scale(1.1);\\n}\\n.burger__item {\\n  position: relative;\\n  height: var(--burger-line-height);\\n  width: 2rem;\\n  background-color: var(--gold);\\n  border-radius: 0.5rem;\\n  transform: rotate(0);\\n  transition: transform 0.5s;\\n}\\n.burger.active .burger__item:nth-child(1) {\\n  top: 50%;\\n  transform: rotate(45deg);\\n}\\n.burger.active .burger__item:nth-child(3) {\\n  bottom: calc(50% - var(--burger-line-height));\\n  transform: rotate(-45deg);\\n}\\n.burger.active .burger__item:nth-child(2) {\\n  display: none;\\n}\\n\\n.nav.burger-active .burger .burger__item:nth-child(1) {\\n  top: 50%;\\n  transform: rotate(45deg);\\n}\\n.nav.burger-active .burger .burger__item:nth-child(3) {\\n  bottom: calc(50% - var(--burger-line-height));\\n  transform: rotate(-45deg);\\n}\\n.nav.burger-active .burger .burger__item:nth-child(2) {\\n  display: none;\\n}\\n\\n.form {\\n  display: flex;\\n  align-items: stretch;\\n  flex-grow: 1;\\n  height: 3rem;\\n  gap: 0 0.5rem;\\n}\\n.form__input {\\n  flex-grow: 3;\\n}\\n.form__button {\\n  flex-grow: 1;\\n}\\n\\n@media (max-width: 37.5em) {\\n  .nav__item {\\n    font-size: 1.2rem;\\n  }\\n}\\n@media (max-width: 30em) {\\n  .nav {\\n    flex-direction: column-reverse;\\n    align-items: flex-end;\\n  }\\n  .nav__container {\\n    position: absolute;\\n    top: 5rem;\\n    right: 0;\\n    padding: 1rem;\\n    background-color: var(--dark-blue);\\n    transform: translateX(150%);\\n    transition: transform 1s;\\n  }\\n  .nav__list {\\n    order: 2;\\n    justify-content: flex-start;\\n    flex-direction: column;\\n    width: 100%;\\n  }\\n  .nav__form {\\n    order: 1;\\n  }\\n  .nav__burger {\\n    display: flex;\\n  }\\n  .nav.burger-active .nav__container {\\n    transform: translateX(0%);\\n  }\\n}\\n:root {\\n  --light-blue: #638ecfa6;\\n  --dark-blue: #0c3674e7;\\n  --pink: #c41a1ab0;\\n  --gold: #ffd700;\\n  --light-grey: #746e6fbd;\\n  --traysparent-grey: #c394941f;\\n  --mint: #32cd78d5;\\n  --purple: #48215ed6;\\n  --black: #000000;\\n  --white: #ffffffe3;\\n  --burger-line-height: 0.3rem;\\n}\\n\\n@font-face {\\n  font-family: \\\"StarWars\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n  font-family: \\\"Jedi\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  padding: 1rem;\\n  font-family: \\\"StarWars\\\";\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-size: 100%;\\n  animation: 500s moveSpace linear infinite;\\n}\\n\\n@keyframes moveSpace {\\n  from {\\n    background-position: 0 0;\\n  }\\n  to {\\n    background-position: 5000% 5000%;\\n  }\\n}\\n.app {\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  max-width: 160rem;\\n}\\n.app__header {\\n  z-index: 100;\\n}\\n.app__main {\\n  padding-top: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  flex-grow: 1;\\n}\\n.app__cards {\\n  flex-grow: 1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://swapi/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/mainField.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/mainField.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".cards {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-content: center;\\n}\\n.cards__item {\\n  margin: 1remx;\\n  padding: 0.8rem;\\n  width: 20%;\\n}\\n\\n.card {\\n  margin: 1rem;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: center;\\n  align-self: flex-start;\\n  width: 20%;\\n  font-size: 1rem;\\n  letter-spacing: 0.1rem;\\n  text-shadow: 0.3rem 0.3rem 0.1rem var(--black);\\n  background-color: var(--traysparent-grey);\\n  transition: background-color 0.8s;\\n}\\n.card:hover {\\n  cursor: pointer;\\n  background-color: var(--purple);\\n}\\n.card__content-container {\\n  position: relative;\\n  display: none;\\n}\\n.card__title {\\n  margin-top: 0.8rem;\\n  margin-bottom: 1rem;\\n  position: relative;\\n  font-size: 1.6rem;\\n  line-height: 100%;\\n  color: var(--gold);\\n  text-transform: uppercase;\\n}\\n.card__text {\\n  position: relative;\\n  margin-top: 0.8rem;\\n  font-size: 1.2rem;\\n  line-height: 120%;\\n  color: var(--white);\\n  opacity: 0;\\n}\\n.card__text--capitalize {\\n  text-transform: capitalize;\\n  color: var(--light-blue);\\n}\\n.card--active .card__content-container {\\n  display: block;\\n}\\n.card--active .card__text--active {\\n  animation: cardText 0.5s ease-in;\\n  animation-fill-mode: forwards;\\n}\\n\\n@media (max-width: 130em) {\\n  .card {\\n    width: 30%;\\n  }\\n}\\n@media (max-width: 80em) {\\n  .card {\\n    width: 45%;\\n  }\\n}\\n@media (max-width: 55.9em) {\\n  .card {\\n    width: 90%;\\n  }\\n}\\n@keyframes cardText {\\n  from {\\n    opacity: 0;\\n    left: -100%;\\n  }\\n  to {\\n    opacity: 1;\\n    left: 0;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://swapi/./src/styles/mainField.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/pagination.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/pagination.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".pagination {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  background-color: var(--light-blue);\\n}\\n.pagination__item {\\n  margin: 0 1rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 3rem;\\n  width: 3rem;\\n  background-color: var(--mint);\\n}\\n.pagination__item:hover {\\n  cursor: pointer;\\n  transform: scale(1.1);\\n}\\n.pagination__item--active {\\n  background-color: var(--purple);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://swapi/./src/styles/pagination.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://swapi/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://swapi/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://swapi/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://swapi/./src/styles/main.scss?");

/***/ }),

/***/ "./src/styles/mainField.scss":
/*!***********************************!*\
  !*** ./src/styles/mainField.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainField_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./mainField.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/mainField.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainField_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainField_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainField_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainField_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://swapi/./src/styles/mainField.scss?");

/***/ }),

/***/ "./src/styles/pagination.scss":
/*!************************************!*\
  !*** ./src/styles/pagination.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./pagination.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/pagination.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://swapi/./src/styles/pagination.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://swapi/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://swapi/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://swapi/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://swapi/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://swapi/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://swapi/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/dataModel.js":
/*!**********************************!*\
  !*** ./src/scripts/dataModel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Model {\r\n  constructor() {\r\n    this.resultVolume = 5;\r\n    this.storage = localStorage.getItem('swapi');\r\n    this.localData = JSON.parse(this.storage);\r\n    if(!this.storage) {\r\n      this.localData = {};\r\n      this.updateLocalData();\r\n    }\r\n  }\r\n\r\n  updateLocalData() {\r\n    localStorage.setItem('swapi', JSON.stringify(this.localData));\r\n  }\r\n\r\n  async getApiData(addUrl) {\r\n    return await fetch(`https://swapi.dev/api/${addUrl}`)\r\n      .then((response) => response.json())\r\n      .catch((error) => {\r\n        console.error(error);\r\n      });\r\n  }\r\n\r\n  async getData(url, callback) {\r\n    let data = this.localData[url];\r\n    if (!data) {\r\n      data = await this.getApiData(url);\r\n      Object.assign(this.localData, {[url]: data});\r\n      this.updateLocalData();\r\n    }\r\n    const formatedData = this.formatData(data);\r\n    callback(formatedData);\r\n  }\r\n\r\n  formatData({results, count}) {\r\n    const data = results.map(dataItem => \r\n      Object.entries(dataItem).filter((item, index) => {\r\n        return index < this.resultVolume;\r\n      }\r\n    )).map(item => {\r\n      return Object.fromEntries([...item]);\r\n    });\r\n    return {\r\n      count,\r\n      results: data\r\n    };\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);\r\n\n\n//# sourceURL=webpack://swapi/./src/scripts/dataModel.js?");

/***/ }),

/***/ "./src/scripts/dictionary.js":
/*!***********************************!*\
  !*** ./src/scripts/dictionary.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navViewDict\": () => (/* binding */ navViewDict),\n/* harmony export */   \"paginationViewDict\": () => (/* binding */ paginationViewDict)\n/* harmony export */ });\nconst navViewDict = {\r\n    'formClassName': 'nav__form',\r\n    'formInput': 'form__input',\r\n    'navIdName': 'navigationPanel',\r\n    'navClassName': 'app__nav',\r\n    'categoryClassName': 'nav__item',\r\n    'activeCategoryClassName': 'nav__item--active',\r\n    'burgerActiveClassName': 'burger-active',\r\n    'burgerId': 'burgerButton'\r\n}\r\n\r\nconst paginationViewDict = {\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://swapi/./src/scripts/dictionary.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _navView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navView */ \"./src/scripts/navView.js\");\n/* harmony import */ var _dataModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataModel */ \"./src/scripts/dataModel.js\");\n/* harmony import */ var _mainFieldView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainFieldView */ \"./src/scripts/mainFieldView.js\");\n/* harmony import */ var _paginationView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginationView */ \"./src/scripts/paginationView.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Controller {\r\n  constructor() {\r\n    this.currentCategory = null;\r\n    this.currentPage = null;\r\n    this.isNewCategory = true;\r\n    this.navView = new _navView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.chooseNavCategoryHandler.bind(this));\r\n    this.paginationView = new _paginationView__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n      this.getPaginationCount.bind(this)\r\n    );\r\n    this.model = new _dataModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.mainFieldView = new _mainFieldView__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n  }\r\n\r\n  chooseNavCategoryHandler(category, searchWord) {\r\n    if (!category) {\r\n      if (this.currentCategory) {\r\n        this.searchWord = searchWord;\r\n        this.getCategoryData(this.currentCategory, 1);\r\n        this.currentPage = 1;\r\n      } else {\r\n        alert(\"Choose category!\")\r\n      }\r\n    } else if (this.currentCategory !== category) {\r\n      this.searchWord = null;\r\n      this.isNewCategory = true;\r\n      this.currentCategory = category;\r\n      this.getCategoryData(category, 1);\r\n    }\r\n  }\r\n\r\n  getCategoryData(category, pageNumber) {\r\n    let addUrl, pageUrl;\r\n    if (this.searchWord) {\r\n      addUrl = `${this.currentCategory}/?search=${this.searchWord}`\r\n      pageUrl = `&page=${pageNumber}`;\r\n    } else {\r\n      addUrl = category;\r\n      pageUrl = `/?page=${pageNumber}`;\r\n    }\r\n    this.model.getData(\r\n      `${addUrl}${pageUrl}`,\r\n      this.displayCategoryData.bind(this)\r\n    );\r\n  }\r\n\r\n  displayCategoryData(data) {\r\n    if (!data) { return }\r\n    const { count, results} = data;\r\n    this.mainFieldView.updateField(results);\r\n    if (this.isNewCategory || this.searchWord) {\r\n      this.paginationView.addPagination(count);\r\n    }\r\n    this.isNewCategory = false;\r\n  }\r\n\r\n  getPaginationCount(count) {\r\n    if (this.currentPage !== count) {\r\n      this.getCategoryData(this.currentCategory, count);\r\n      this.currentPage = count;\r\n    }\r\n  }\r\n}\r\n\r\nnew Controller();\r\n\n\n//# sourceURL=webpack://swapi/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/mainFieldView.js":
/*!**************************************!*\
  !*** ./src/scripts/mainFieldView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_mainField_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/mainField.scss */ \"./src/styles/mainField.scss\");\n\r\n\r\nclass MainFieldView {\r\n  constructor() {\r\n    this.currentActiveCard = null;\r\n    this.activateArr = [];\r\n    this.parentField = document.querySelector(\".cards\");\r\n    this.parentField.addEventListener(\"click\", this.clickHandler.bind(this));\r\n  }\r\n\r\n  updateField(data) {\r\n    this.parentField.innerHTML = \"\";\r\n    data.forEach((itemData) => {\r\n      this.addItem(itemData);\r\n    });\r\n  }\r\n\r\n  addItem(data) {\r\n    const item = document.createElement(\"li\");\r\n    item.className = \"cards__item card\";\r\n    const fieldNames = Object.keys(data).slice(0);\r\n    let titleHtml = `\r\n            <h3 class=\"card__title\">${data[fieldNames[0]]}</h3>            \r\n        `;\r\n    let contentHtml = \"\";\r\n    fieldNames.slice(1).forEach((name) => {\r\n      contentHtml += `<p class=\"card__text\"><span class=\"card__text--capitalize\">${name.replaceAll(\r\n        \"_\",\r\n        \" \"\r\n      )}</span>: ${data[name]}</p>`;\r\n    });\r\n    item.innerHTML = `\r\n            ${titleHtml}\r\n            <div class=\"card__content-container\">\r\n                ${contentHtml}\r\n            </div>\r\n        `;\r\n    this.parentField.append(item);\r\n  }\r\n\r\n  clickHandler({ target }) {\r\n    const card = target.closest(\".card\");\r\n    if (!card || card === this.currentActiveCard) {\r\n      return;\r\n    }\r\n    if (this.currentActiveCard) {\r\n      this.deactivateCard();\r\n    }\r\n    this.currentActiveCard = card;\r\n    this.activateCard();\r\n  }\r\n\r\n  activateCard() {\r\n    this.currentActiveCard.classList.add(\"card--active\");\r\n    const textList = this.currentActiveCard.querySelectorAll(\".card__text\");\r\n    let animationCounter = 0;\r\n    textList.forEach((textItem) => {\r\n      setTimeout(() => {\r\n        textItem.classList.add(\"card__text--active\");\r\n      }, 300 * animationCounter++);\r\n    });\r\n  }\r\n\r\n  deactivateCard() {\r\n    this.currentActiveCard.classList.remove(\"card--active\");\r\n    this.currentActiveCard\r\n      .querySelectorAll(\".card__text\")\r\n      .forEach((cardText) => {\r\n        cardText.classList.remove(\"card__text--active\");\r\n      });\r\n    this.isElementDeactivate = true;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainFieldView);\r\n\n\n//# sourceURL=webpack://swapi/./src/scripts/mainFieldView.js?");

/***/ }),

/***/ "./src/scripts/navView.js":
/*!********************************!*\
  !*** ./src/scripts/navView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary */ \"./src/scripts/dictionary.js\");\n\r\n\r\nclass NavigationView {\r\n  constructor(categoryClickCb) {\r\n    this.navBlock = document.getElementById(_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.navIdName);\r\n    this.categoryList = document.querySelectorAll(`.${_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.categoryClassName}`);\r\n    this.navBlock.addEventListener(\"click\", this.navClickHandler.bind(this));\r\n    this.categoryClickCb = categoryClickCb;\r\n    this.burgerButton = document.getElementById(_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.burgerId);\r\n    this.burgerActiveWidth = 480;\r\n    this.burgerButton.addEventListener('click', this.burgerButtonClickHandler.bind(this));\r\n    this.navForm = document.querySelector(`.${_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.formClassName}`);\r\n    this.navForm.addEventListener('submit', this.formSubmitHandler.bind(this));\r\n  }\r\n\r\n  navClickHandler({ target }) {\r\n    if (target.classList.contains(_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.categoryClassName)) {\r\n      this.activateCategory(target);\r\n      const category = target.dataset.category;\r\n      this.categoryClickCb(category.toLowerCase());\r\n    }\r\n  }\r\n\r\n  burgerButtonClickHandler() {\r\n    this.navBlock.classList.toggle(_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.burgerActiveClassName);\r\n  }\r\n\r\n  outNavClickHandler({target}) {\r\n    if (!target.closest(`.${_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.navClassName}`)) {\r\n      this.navBlock.classList.toggle(navView.burgerActiveClassName);\r\n    }\r\n  }\r\n\r\n  outNavClickHandler({target}) {\r\n    if (!target.closest(`.${navView.navClassName}`)) {\r\n      this.deactivateBurger();\r\n    }\r\n  }\r\n\r\n  windowResizeHandler() {\r\n    if(window.innerWidth > this.burgerActiveWidth) {\r\n      this.deactivateBurger();\r\n    }\r\n  }\r\n\r\n  deactivateBurger() {\r\n    this.navBlock.classList.remove(_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.burgerActiveClassName);\r\n  }\r\n\r\n  activateCategory(newActiveCategory) {\r\n    this.categoryList.forEach((category) => {\r\n      category.classList.remove(_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.activeCategoryClassName);\r\n    });\r\n    newActiveCategory.classList.add(_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.activeCategoryClassName);\r\n    this.deactivateBurger();\r\n  }\r\n\r\n  formSubmitHandler(e) {\r\n    e.preventDefault();\r\n    const inputValue = e.target.querySelector(`.${_dictionary__WEBPACK_IMPORTED_MODULE_0__.navViewDict.formInput}`).value;\r\n    this.categoryClickCb(null, inputValue);\r\n    this.navForm.reset();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationView);\r\n\n\n//# sourceURL=webpack://swapi/./src/scripts/navView.js?");

/***/ }),

/***/ "./src/scripts/paginationView.js":
/*!***************************************!*\
  !*** ./src/scripts/paginationView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/pagination.scss */ \"./src/styles/pagination.scss\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ \"./src/scripts/dictionary.js\");\n\r\n\r\n\r\nclass PaginationView {\r\n  constructor(clickCallback) {\r\n    this.clickCallback = clickCallback;\r\n    this.parentArea = document.querySelector(\".app__pagination\");\r\n    this.parentArea.addEventListener(\r\n      \"click\",\r\n      this.parentClickHandler.bind(this)\r\n    );\r\n    this.displayItemsNumber = 10;\r\n  }\r\n\r\n  addPagination(number) {\r\n    this.totalPagesCount = Math.ceil(number / this.displayItemsNumber);\r\n    this.parentArea.innerHTML = \"\";\r\n    for (let i = 1; i <= this.totalPagesCount; i++) {\r\n      this.parentArea.append(this.addItem(i));\r\n    }\r\n    this.paginationitemList = document.querySelectorAll(\".pagination__item\");\r\n    this.parentArea.addEventListener(\r\n      \"click\",\r\n      this.parentClickHandler.bind(this)\r\n    );\r\n    this.activateItem();\r\n  }\r\n\r\n  addItem(number) {\r\n    const item = document.createElement(\"li\");\r\n    item.className = \"pagination__item\";\r\n    item.dataset.count = number;\r\n    item.innerHTML = number;\r\n    return item;\r\n  }\r\n\r\n  parentClickHandler({ target }) {\r\n    if (target.classList.contains(\"pagination__item\")) {\r\n      this.activateItem(target);\r\n      const count = target.dataset.count;\r\n      this.clickCallback(count);\r\n    }\r\n  }\r\n\r\n  activateItem(target) {\r\n    this.paginationitemList.forEach((item) => {\r\n      item.classList.remove(\"pagination__item--active\");\r\n    });\r\n    if (!target) {\r\n      target = this.paginationitemList[0];\r\n    }\r\n    target.classList.add(\"pagination__item--active\");\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationView);\r\n\n\n//# sourceURL=webpack://swapi/./src/scripts/paginationView.js?");

/***/ }),

/***/ "./src/fonts/StarJediOutline-y0xm.ttf":
/*!********************************************!*\
  !*** ./src/fonts/StarJediOutline-y0xm.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11294b70897dd4a06aaa.ttf\";\n\n//# sourceURL=webpack://swapi/./src/fonts/StarJediOutline-y0xm.ttf?");

/***/ }),

/***/ "./src/fonts/Sterilict-L3aen.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Sterilict-L3aen.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7ad6970e27cf0418378.ttf\";\n\n//# sourceURL=webpack://swapi/./src/fonts/Sterilict-L3aen.ttf?");

/***/ }),

/***/ "./src/images/star-bg.jpg":
/*!********************************!*\
  !*** ./src/images/star-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d8d4e0d08debac17aae.jpg\";\n\n//# sourceURL=webpack://swapi/./src/images/star-bg.jpg?");

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