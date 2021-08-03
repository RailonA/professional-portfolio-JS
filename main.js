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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/header */ \"./src/scripts/header.js\");\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ \"./src/scripts/main.js\");\n\n // const content = document.querySelector('#content');\n// content.className = 'body container-fluid';\n\nvar mainPage = document.createElement('div');\nmainPage.className = 'container-fluid';\ncontent.appendChild(mainPage);\n\nvar homePage = function homePage() {\n  mainPage.append((0,_scripts_header__WEBPACK_IMPORTED_MODULE_0__.default)());\n  mainPage.append((0,_scripts_main__WEBPACK_IMPORTED_MODULE_1__.default)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ \"./src/scripts/setAttributes.js\");\n\n\nvar header = function header() {\n  var header = document.createElement('header');\n  header.className = 'd-flex justify-content-between p-3 mb-2 bg-dark text-white';\n  var navbarWrapper = document.createElement('div');\n  navbarWrapper.className = 'collapse navbar-collapse d-flex justify-content-between col-12 ';\n  navbarWrapper.setAttribute('id', 'navbarSupportedContent');\n  var homeLink = document.createElement('a');\n  homeLink.className = 'nav-link  col homeLink col-3 d-flex  ';\n  homeLink.textContent = 'Home';\n  var projectLink = document.createElement('a');\n  projectLink.className = 'nav-link  col projectLink col-3 d-flex';\n  projectLink.textContent = 'Project';\n  var contactMeLink = document.createElement('a');\n  contactMeLink.className = 'nav-link  col contactMeLink col-3 d-flex';\n  contactMeLink.textContent = 'Contact Me';\n  navbarWrapper.append(homeLink, projectLink, contactMeLink);\n  header.append(navbarWrapper);\n  return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack:///./src/scripts/header.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ \"./src/scripts/setAttributes.js\");\n\n\nvar main = function main() {\n  var main = document.createElement('main');\n  main.className = 'd-flex justify-content-center col-12 flex-column';\n  var main1Wrapper = document.createElement('div');\n  main1Wrapper.className = 'collapse navbar-collapse d-flex  flex-column ';\n  main1Wrapper.setAttribute('id', 'navbarSupportedContent');\n  var main1H2 = document.createElement('h2');\n  main1H2.className = 'd-flex text-center font-weight-bold text-capitalize';\n  main1H2.textContent = 'Hey There.';\n  var main1H3 = document.createElement('h3');\n  main1H3.className = 'd-flex text-center';\n  main1H3.textContent = \"I'm Railon\";\n  var main1H4 = document.createElement('h4');\n  main1H4.className = 'd-flex text-center';\n  main1H4.textContent = \"I'm a Software Developer\";\n  var main1P4 = document.createElement('p');\n  main1P4.className = 'd-flex text-center pt-3';\n  main1P4.textContent = \"I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need to be coded, don’t hesitate to contact me.\";\n  var letsConnectWrapper = document.createElement('div');\n  var ConnectWrapper = document.createElement('div');\n  ConnectWrapper.className = 'd-flex justify-content-around text-center col-6';\n  letsConnectWrapper.className = 'd-flex justify-content-around text-center col-12 ';\n  var textWrapper = document.createElement('h3');\n  textWrapper.className = 'd-flex text-center align-items-center ';\n  textWrapper.textContent = \"Lets Connect\";\n  var facebookLink = document.createElement('i');\n  var instagramLink = document.createElement('i');\n  var twitterLink = document.createElement('i');\n  var linkedinLink = document.createElement('i');\n  facebookLink.className = 'fab fa-facebook-f fa-lg d-flex align-items-center ';\n  instagramLink.className = 'fab fa-instagram fa-lg d-flex align-items-center';\n  twitterLink.className = 'fab fa-twitter fa-lg d-flex align-items-center';\n  linkedinLink.className = 'fab fa-linkedin-in fa-lg d-flex align-items-center';\n  main1Wrapper.append(main1H2, main1H3, main1H4, main1P4);\n  ConnectWrapper.append(textWrapper, facebookLink, instagramLink, twitterLink, linkedinLink);\n  letsConnectWrapper.append(ConnectWrapper);\n  main.append(main1Wrapper, letsConnectWrapper);\n  return main;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/setAttributes.js":
/*!**************************************!*\
  !*** ./src/scripts/setAttributes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar setAttributes = function setAttributes(elt, attrs) {\n  var props = Object.keys(attrs);\n  props.forEach(function (prop) {\n    elt.setAttribute(prop, attrs[prop]);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setAttributes);\n\n//# sourceURL=webpack:///./src/scripts/setAttributes.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;