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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/header */ \"./src/scripts/header.js\");\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/main */ \"./src/scripts/main.js\");\n/* harmony import */ var _scripts_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/project */ \"./src/scripts/project.js\");\n\n\n\n\nvar content = document.querySelector('#content');\ncontent.className = 'body ';\nvar mainPage = document.createElement('div');\ncontent.appendChild(mainPage);\n\nvar homePage = function homePage() {\n  mainPage.append((0,_scripts_header__WEBPACK_IMPORTED_MODULE_1__.default)());\n  mainPage.append((0,_scripts_main__WEBPACK_IMPORTED_MODULE_2__.default)());\n  mainPage.append((0,_scripts_project__WEBPACK_IMPORTED_MODULE_3__.default)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage());\n\n//# sourceURL=webpack:///./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ \"./src/scripts/setAttributes.js\");\n\n\nvar main = function main() {\n  var main = document.createElement('div');\n  main.className = 'd-flex justify-content-center col-12 flex-column';\n  var main1Wrapper = document.createElement('div');\n  main1Wrapper.className = 'collapse navbar-collapse d-flex  flex-column col-8 p-3 justify-content-center';\n  main1Wrapper.setAttribute('id', 'navbarSupportedContent');\n  var main1H2 = document.createElement('h2');\n  main1H2.className = 'd-flex text-center font-weight-bold text-capitalize';\n  main1H2.textContent = 'Hey There.';\n  var main1H3 = document.createElement('h3');\n  main1H3.className = 'd-flex text-center';\n  main1H3.textContent = \"I'm Railon\";\n  var main1H4 = document.createElement('h4');\n  main1H4.className = 'd-flex text-center';\n  main1H4.textContent = \"I'm a Software Developer\";\n  var main1P4 = document.createElement('p');\n  main1P4.className = 'd-flex text-center pt-3';\n  main1P4.textContent = \"I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need to be coded, don’t hesitate to contact me.\";\n  var letsConnectWrapper = document.createElement('div');\n  letsConnectWrapper.className = ' flex-xs-column d-sm-flex justify-content-center  d-sm-flex  col-xs-12 col-12 p-3 ';\n  var ConnectWrapper = document.createElement('div');\n  ConnectWrapper.className = 'd-flex justify-content-around col-xs-12 col-sm-6  ';\n  var textWrapper = document.createElement('h3');\n  textWrapper.className = 'd-flex justify-content-center  ';\n  textWrapper.textContent = \"Lets Connect\";\n  var facebookLink = document.createElement('i');\n  var instagramLink = document.createElement('i');\n  var twitterLink = document.createElement('i');\n  var linkedinLink = document.createElement('i');\n  var githubLink = document.createElement('i');\n  facebookLink.className = 'fab fa-facebook-f fa-lg d-flex align-items-center ';\n  instagramLink.className = 'fab fa-instagram fa-lg d-flex align-items-center';\n  twitterLink.className = 'fab fa-twitter fa-lg d-flex align-items-center';\n  linkedinLink.className = 'fab fa-linkedin-in fa-lg d-flex align-items-center';\n  githubLink.className = 'fab fa-github fa-lg d-flex align-items-center';\n  var frameworkWrapper = document.createElement('div');\n  frameworkWrapper.className = 'd-sm-flex  text-center  justify-content-center frameworkWrapper mb-5';\n  var languageDiv = document.createElement('div');\n  languageDiv.className = ' col-xs-12  col-sm-4 col-md-4 text-center justify-content-center m-3';\n  var title1H3 = document.createElement('h3');\n  title1H3.textContent = \"Language\";\n  var title1p1 = document.createElement('p');\n  title1p1.textContent = \"JavaScript\";\n  var title1p2 = document.createElement('p');\n  title1p2.textContent = \"Ruby\";\n  var title1p3 = document.createElement('p');\n  title1p3.textContent = \"Html\";\n  var title1p4 = document.createElement('p').textContent = \"Css\";\n  var frameworkDiv = document.createElement('div');\n  frameworkDiv.className = 'col-xs-12 col-sm-4 col-md-4 text-center justify-content-center m-3';\n  var title2H3 = document.createElement('h3');\n  title2H3.textContent = \"Framework\";\n  var title2p1 = document.createElement('p');\n  title2p1.textContent = \"Bootstrap\";\n  var title2p2 = document.createElement('p');\n  title2p2.textContent = \"Ruby on Rails\";\n  var title2p3 = document.createElement('p');\n  title2p3.textContent = \"Rspec\";\n  var title2p4 = document.createElement('p');\n  title2p4.textContent = \"CapyBara\";\n  var skillsDiv = document.createElement('div');\n  skillsDiv.className = ' col-xs-12  col-sm-4 col-md-4 text-center justify-content-center m-3';\n  var title3H3 = document.createElement('h3');\n  title3H3.textContent = \"Skills\";\n  var title3p1 = document.createElement('p');\n  title3p1.textContent = \"Codekit\";\n  var title3p2 = document.createElement('p');\n  title3p2.textContent = \"GitHub\";\n  var title3p3 = document.createElement('p');\n  title3p3.textContent = \"Codepen\";\n  var title3p4 = document.createElement('p');\n  title3p4.textContent = \"Gitlab\";\n  languageDiv.append(title1H3, title1p1, title1p2, title1p3, title1p4);\n  frameworkDiv.append(title2H3, title2p1, title2p2, title2p3, title2p4);\n  skillsDiv.append(title3H3, title3p1, title3p2, title3p3, title3p4);\n  frameworkWrapper.append(languageDiv, frameworkDiv, skillsDiv);\n  main1Wrapper.append(main1H2, main1H3, main1H4, main1P4);\n  ConnectWrapper.append(facebookLink, instagramLink, twitterLink, linkedinLink, githubLink);\n  letsConnectWrapper.append(textWrapper, ConnectWrapper);\n  main.append(main1Wrapper, letsConnectWrapper, frameworkWrapper);\n  return main;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ \"./src/scripts/setAttributes.js\");\n\n\nvar project = function project() {\n  var project = document.createElement('div');\n  project.className = 'flex-column project ';\n  var projectWrapper = document.createElement('div');\n  projectWrapper.className = 'flex-xs-column';\n  var projectSectionTitle = document.createElement('h2');\n  projectSectionTitle.className = 'd-flex justify-content-center p-5';\n  projectSectionTitle.textContent = 'My Recent Projects';\n  var project1n2Wrapper = document.createElement('div');\n  project1n2Wrapper.className = 'flex-xs-column  d-md-flex justify-content-center';\n  var project3n4Wrapper = document.createElement('div');\n  project3n4Wrapper.className = ' flex-xs-column d-md-flex justify-content-center';\n  var project1Wrapper = document.createElement('div');\n  project1Wrapper.className = 'project1Wrapper col-xs-12 col-sm-10 col-md-5 col-lg-5 p-5 flex-column align-items-center';\n  var project1Title = document.createElement('h3');\n  var img1 = document.createElement('img');\n  img1.className = 'img1 d-flex text-center';\n  img1.src = './assets/planeGame.png';\n  var button1 = document.createElement('button');\n  project1Title.textContent = 'Title: RPG Plane Game';\n  project1Title.className = 'm-3 col-12';\n  project1Title.addEventListener('click', function () {\n    window.location = 'https://github.com/RailonA/rpg-plane-game';\n  });\n  button1.textContent = 'Live Link';\n  button1.addEventListener('click', function () {\n    window.location = 'https://railona.github.io/rpg-plane-game/';\n  });\n  var project1Disc = document.createElement('p');\n  project1Disc.textContent = \"Discription:\";\n  var project1Discription = document.createElement('p');\n  project1Discription.textContent = \"This project is a capstone project required by Microverse, after completing the javascript curriculum. This project is a 2D Game built-in Javascript and Phaser 3.\";\n  project1Discription.className = 'text-center';\n  var project2Wrapper = document.createElement('div');\n  project2Wrapper.className = 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project2Wrapper';\n  var project2Title = document.createElement('h3');\n  var img2 = document.createElement('img');\n  img2.className = 'img2';\n  img2.src = \"./assets/weatherApp.png\";\n  project2Title.textContent = 'Title: Weather App';\n  project2Title.className = 'm-3 col-12';\n  project2Title.addEventListener('click', function () {\n    window.location = 'https://github.com/RailonA/weatherApp';\n  });\n  var button2 = document.createElement('button');\n  button2.textContent = 'Live Link';\n  button2.addEventListener('click', function () {\n    window.location = 'https://railona.github.io/weatherApp/';\n  });\n  var project2Disc = document.createElement('p');\n  project2Disc.textContent = \"Discription:\";\n  var project2Discription = document.createElement('p');\n  project2Discription.textContent = \"This project is part of Javascript Module with the aim of building an advanced Weather App that displays details about the weather of a typed city-town.\";\n  project2Discription.className = 'text-center';\n  var project3Wrapper = document.createElement('div');\n  project3Wrapper.className = 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project3Wrapper';\n  var project3Title = document.createElement('h3');\n  var img3 = document.createElement('img');\n  img3.className = 'img3';\n  img3.src = \"./assets/restaurentPage.png\";\n  project3Title.textContent = 'Title: Restaurent Page';\n  project3Title.className = 'm-3 col-12';\n  project3Title.addEventListener('click', function () {\n    window.location = 'https://github.com/RailonA/restaurentPage';\n  });\n  var button3 = document.createElement('button');\n  button3.textContent = 'Live Link';\n  button3.addEventListener('click', function () {\n    window.location = 'https://railona.github.io/restaurentPage/';\n  });\n  var project3Disc = document.createElement('p');\n  project3Disc.textContent = \"Discription:\";\n  var project3Discription = document.createElement('p');\n  project3Discription.textContent = \"A single-page app built with JavaScript that uses a restaurant page template.\";\n  project3Discription.className = 'text-center';\n  var project4Wrapper = document.createElement('div');\n  project4Wrapper.className = 'col-xs-12 col-sm-5 col-md-5 col-lg-5 p-5 project4Wrapper';\n  var project4Title = document.createElement('h3');\n  var img4 = document.createElement('img');\n  img4.className = 'img4';\n  img4.src = \"./assets/twitterRedesign.png\";\n  project4Title.textContent = 'Title: Twitter Redesign';\n  project4Title.className = 'm-3 col-12';\n  project4Title.addEventListener('click', function () {\n    window.location = 'https://github.com/RailonA/Twitter-redesign';\n  });\n  var button4 = document.createElement('button');\n  button4.textContent = 'Live Link';\n  button4.addEventListener('click', function () {\n    window.location = 'https://mytwitterdesign.herokuapp.com/login';\n  });\n  var project4Disc = document.createElement('p');\n  project4Disc.textContent = \"Discription:\";\n  var project4Discription = document.createElement('p');\n  project4Discription.textContent = \"You will be able to sign in, sign up at the home page, post thoughts/opinions, only the users who sign in can see and create an opinion, if you opt to sign out, then you won’t be able to see the opinions at all. You can upload your profile picture and cover photo. You can follow other users and see their opinions directly on your home page.\";\n  project4Discription.className = 'text-center';\n  project1Wrapper.append(img1, project1Title, button1, project1Disc, project1Discription);\n  project2Wrapper.append(img2, project2Title, button2, project2Disc, project2Discription);\n  project3Wrapper.append(img3, project3Title, button3, project3Disc, project3Discription);\n  project4Wrapper.append(img4, project4Title, button4, project4Disc, project4Discription);\n  project1n2Wrapper.append(project1Wrapper, project2Wrapper);\n  project3n4Wrapper.append(project3Wrapper, project4Wrapper);\n  projectWrapper.append(project1n2Wrapper, project3n4Wrapper);\n  project.append(projectSectionTitle, projectWrapper);\n  return project;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack:///./src/scripts/project.js?");

/***/ }),

/***/ "./src/scripts/setAttributes.js":
/*!**************************************!*\
  !*** ./src/scripts/setAttributes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar setAttributes = function setAttributes(elt, attrs) {\n  var props = Object.keys(attrs);\n  props.forEach(function (prop) {\n    elt.setAttribute(prop, attrs[prop]);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setAttributes);\n\n//# sourceURL=webpack:///./src/scripts/setAttributes.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  box-sizing: border-box; }\\n\\nhtml,\\nbody {\\n  height: 100%;\\n  padding: 0;\\n  margin: 0; }\\n\\nheader {\\n  padding: 0;\\n  margin: 0; }\\n\\ndiv .frameworkWrapper {\\n  margin: 10px;\\n  border-top: 3px solid black;\\n  border-bottom: 3px solid black; }\\n\\nheader a {\\n  color: white; }\\n\\nheader a:hover {\\n  color: white; }\\n\\n.project {\\n  background-color: #242424;\\n  color: white; }\\n\\n.img1,\\n.img2,\\n.img3,\\n.img4 {\\n  width: 80%; }\\n\\n.project1Wrapper,\\n.project2Wrapper,\\n.project3Wrapper,\\n.project4Wrapper {\\n  box-shadow: 0.2px 0.2px 20px white;\\n  background-size: 100% 100%;\\n  margin: 20px;\\n  border-radius: 10px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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