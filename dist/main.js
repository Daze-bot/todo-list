/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sidebar-bg-color: ;\n  --content-bg-color: ;\n  --header-bg-color: #1992d4;\n  --color-change-filter1: ;\n  --color-change-filter2: ;\n  --change-white-filter: brightness(4.12) saturate(100%) invert(100%) sepia(0%) saturate(7454%) hue-rotate(268deg) brightness(118%) contrast(101%);\n  --primary-text-color: ;\n  --secondary-text-color: ;\n  --shadow-color: ;\n  --dark-shadow-color: rgba(0, 0, 0, 0.6);\n  --header-text-color: white;\n  --li-hover-color: ;\n}\n\n* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  list-style: none;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template: 100px 1fr 30px / 280px 1fr;\n  position: relative;\n}\n\nheader {\n  grid-area: 1/1/2/3;\n  display: flex;\n  background-color: var(--header-bg-color);\n  box-shadow: 0 4px 8px var(--shadow-color);\n  z-index: 3;\n}\n\n.headerContent {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: min(1400px, 100vw);\n  margin: 0 auto;\n  padding: 0 20px;\n  color: var(--header-text-color);\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.logo h1 {\n  font-size: 3.5rem;\n}\n\n.logo img {\n  filter: var(--change-white-filter);\n  height: 4rem;\n}\n\n.themeBtns img {\n  cursor: pointer;\n  filter: var(--change-white-filter);\n  height: 2rem;\n}\n\n.sidebar {\n  grid-area: 2/1/3/2;\n  background-color: var(--sidebar-bg-color);\n  box-shadow: 2px 0 8px var(--shadow-color);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  color: var(--primary-text-color);\n  padding: 20px 20px;\n  overflow-y: auto;\n  max-height: calc(100vh - 130px);\n}\n\n.sidebar li {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 10px 0 10px 60px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.sidebar li:hover {\n  background-color: var(--li-hover-color);\n}\n\n.sidebar li img {\n  filter: var(--color-change-filter1);\n  position: absolute;\n  left: 20px\n}\n\n.default,\n.projectsList {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#projects {\n  display: flex;\n  align-items: center;\n  font-size: 1.8rem;\n  font-weight: 700;\n  padding-left: 10px;\n  gap: 50px;\n}\n\n#projects img {\n  cursor: pointer;\n  filter: var(--color-change-filter1);\n  height: 2.4rem;\n  width: 3rem;\n  transition: .3s;\n}\n\n#projects img:hover {\n  transform: rotate(90deg);\n  transition: .3s;\n}\n\n.content {\n  grid-area: 2/2/3/3;\n  background-color: var(--content-bg-color);\n  color: var(--primary-text-color);\n}\n\n.newProjectContainer {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.newProjectForm {\n  background-color: var(--sidebar-bg-color);\n  color: var(--primary-text-color);\n  padding: 40px 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 30px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.newProjectForm p {\n  font-weight: 700;\n  font-size: 1.7rem;\n}\n\n.entry input,\n.entry label {\n  display: block;\n  width: 100%;\n  font-size: 1.2rem;\n}\n\n.entry label {\n  margin-bottom: 4px;\n}\n\n.entry input {\n  outline: none;\n  padding: 4px 8px;\n  border: none;\n  border-radius: 4px;\n}\n\n.entry input:hover {\n  box-shadow: 0 0 8px var(--shadow-color);\n}\n\n.entry input:focus {\n  box-shadow: 0 0 8px var(--dark-shadow-color);\n}\n\n.submitNewProject {\n  padding: 10px 30px;\n  font-size: 1.3rem;\n  font-weight: 700;\n  background-color: var(--header-bg-color);\n  border: none;\n  border-radius: 12px;\n  color: var(--header-text-color);\n}\n\n.submitNewProject:hover {\n  box-shadow: 0 2px 10px var(--shadow-color);\n  cursor: pointer;\n}\n\n.submitNewProject:active {\n  box-shadow: none;\n  transform: translateY(2px);\n}\n\n.closeBtn {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  filter: var(--color-change-filter1);\n}\n\n.closeBtn:hover {\n  cursor: pointer;\n}\n\nfooter {\n  grid-area: 3/1/4/3;\n  text-align: center;\n  background-color: var(--header-bg-color);\n  color: var(--header-text-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter a:link,\nfooter a:visited,\nfooter a:active {\n  text-decoration: none;\n  color: var(--header-text-color);\n}\n\nfooter a:hover {\n  font-weight: 700;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --sidebar-bg-color: ;\n  --content-bg-color: ;\n  --header-bg-color: #1992d4;\n  --color-change-filter1: ;\n  --color-change-filter2: ;\n  --change-white-filter: brightness(4.12) saturate(100%) invert(100%) sepia(0%) saturate(7454%) hue-rotate(268deg) brightness(118%) contrast(101%);\n  --primary-text-color: ;\n  --secondary-text-color: ;\n  --shadow-color: ;\n  --dark-shadow-color: rgba(0, 0, 0, 0.6);\n  --header-text-color: white;\n  --li-hover-color: ;\n}\n\n* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  list-style: none;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template: 100px 1fr 30px / 280px 1fr;\n  position: relative;\n}\n\nheader {\n  grid-area: 1/1/2/3;\n  display: flex;\n  background-color: var(--header-bg-color);\n  box-shadow: 0 4px 8px var(--shadow-color);\n  z-index: 3;\n}\n\n.headerContent {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: min(1400px, 100vw);\n  margin: 0 auto;\n  padding: 0 20px;\n  color: var(--header-text-color);\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.logo h1 {\n  font-size: 3.5rem;\n}\n\n.logo img {\n  filter: var(--change-white-filter);\n  height: 4rem;\n}\n\n.themeBtns img {\n  cursor: pointer;\n  filter: var(--change-white-filter);\n  height: 2rem;\n}\n\n.sidebar {\n  grid-area: 2/1/3/2;\n  background-color: var(--sidebar-bg-color);\n  box-shadow: 2px 0 8px var(--shadow-color);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  color: var(--primary-text-color);\n  padding: 20px 20px;\n  overflow-y: auto;\n  max-height: calc(100vh - 130px);\n}\n\n.sidebar li {\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 10px 0 10px 60px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.sidebar li:hover {\n  background-color: var(--li-hover-color);\n}\n\n.sidebar li img {\n  filter: var(--color-change-filter1);\n  position: absolute;\n  left: 20px\n}\n\n.default,\n.projectsList {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#projects {\n  display: flex;\n  align-items: center;\n  font-size: 1.8rem;\n  font-weight: 700;\n  padding-left: 10px;\n  gap: 50px;\n}\n\n#projects img {\n  cursor: pointer;\n  filter: var(--color-change-filter1);\n  height: 2.4rem;\n  width: 3rem;\n  transition: .3s;\n}\n\n#projects img:hover {\n  transform: rotate(90deg);\n  transition: .3s;\n}\n\n.content {\n  grid-area: 2/2/3/3;\n  background-color: var(--content-bg-color);\n  color: var(--primary-text-color);\n}\n\n.newProjectContainer {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.newProjectForm {\n  background-color: var(--sidebar-bg-color);\n  color: var(--primary-text-color);\n  padding: 40px 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 30px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.newProjectForm p {\n  font-weight: 700;\n  font-size: 1.7rem;\n}\n\n.entry input,\n.entry label {\n  display: block;\n  width: 100%;\n  font-size: 1.2rem;\n}\n\n.entry label {\n  margin-bottom: 4px;\n}\n\n.entry input {\n  outline: none;\n  padding: 4px 8px;\n  border: none;\n  border-radius: 4px;\n}\n\n.entry input:hover {\n  box-shadow: 0 0 8px var(--shadow-color);\n}\n\n.entry input:focus {\n  box-shadow: 0 0 8px var(--dark-shadow-color);\n}\n\n.submitNewProject {\n  padding: 10px 30px;\n  font-size: 1.3rem;\n  font-weight: 700;\n  background-color: var(--header-bg-color);\n  border: none;\n  border-radius: 12px;\n  color: var(--header-text-color);\n}\n\n.submitNewProject:hover {\n  box-shadow: 0 2px 10px var(--shadow-color);\n  cursor: pointer;\n}\n\n.submitNewProject:active {\n  box-shadow: none;\n  transform: translateY(2px);\n}\n\n.closeBtn {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  filter: var(--color-change-filter1);\n}\n\n.closeBtn:hover {\n  cursor: pointer;\n}\n\nfooter {\n  grid-area: 3/1/4/3;\n  text-align: center;\n  background-color: var(--header-bg-color);\n  color: var(--header-text-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter a:link,\nfooter a:visited,\nfooter a:active {\n  text-decoration: none;\n  color: var(--header-text-color);\n}\n\nfooter a:hover {\n  font-weight: 700;\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/initLoad.js":
/*!*************************!*\
  !*** ./src/initLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContent": () => (/* binding */ createContent),
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createNewProjectForm": () => (/* binding */ createNewProjectForm),
/* harmony export */   "createSidebar": () => (/* binding */ createSidebar)
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/theme.js");
/* harmony import */ var _imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/logo.svg */ "./src/imgs/logo.svg");
/* harmony import */ var _imgs_add_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/add.svg */ "./src/imgs/add.svg");
/* harmony import */ var _imgs_home_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/home.svg */ "./src/imgs/home.svg");
/* harmony import */ var _imgs_today_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/today.svg */ "./src/imgs/today.svg");
/* harmony import */ var _imgs_week_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/week.svg */ "./src/imgs/week.svg");
/* harmony import */ var _imgs_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/close.svg */ "./src/imgs/close.svg");








function createHeader() {
  let header = document.createElement('header');

  let headerContent = document.createElement('div');
  headerContent.classList.add('headerContent');

  let logo = document.createElement('div');
  logo.classList.add('logo')

  let logoImg = document.createElement('img');
  logoImg.setAttribute('src', `${_imgs_logo_svg__WEBPACK_IMPORTED_MODULE_1__}`);
  logoImg.setAttribute('alt', "Logo");

  let logoText = document.createElement('h1');
  logoText.textContent = "To-do List";

  logo.appendChild(logoImg);
  logo.appendChild(logoText);

  headerContent.appendChild(logo);
  headerContent.appendChild((0,_theme__WEBPACK_IMPORTED_MODULE_0__.addThemeButtons)());

  header.appendChild(headerContent);

  return header;
}

function createSidebar() {
  let sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  let defaultTabs = document.createElement('ul');
  defaultTabs.classList.add('default');

  let homeLi = document.createElement('li');
  homeLi.textContent = "Home";
  let homeImg = document.createElement('img');
  homeImg.setAttribute('src', `${_imgs_home_svg__WEBPACK_IMPORTED_MODULE_3__}`);
  homeImg.setAttribute('alt', "Home");
  homeLi.appendChild(homeImg);

  let todayLi = document.createElement('li');
  todayLi.textContent = "Today";
  let todayImg = document.createElement('img');
  todayImg.setAttribute('src', `${_imgs_today_svg__WEBPACK_IMPORTED_MODULE_4__}`);
  todayImg.setAttribute('alt', "Today");
  todayLi.appendChild(todayImg);

  let weekLi = document.createElement('li');
  weekLi.textContent = "This Week";
  let weekImg = document.createElement('img');
  weekImg.setAttribute('src', `${_imgs_week_svg__WEBPACK_IMPORTED_MODULE_5__}`);
  weekImg.setAttribute('alt', "Week");
  weekLi.appendChild(weekImg);

  defaultTabs.appendChild(homeLi);
  defaultTabs.appendChild(todayLi);
  defaultTabs.appendChild(weekLi);
  
  let projects = document.createElement('div');
  projects.setAttribute('id', 'projects');

  let project = document.createTextNode('Projects');
  let add = document.createElement('img');
  add.setAttribute('src', `${_imgs_add_svg__WEBPACK_IMPORTED_MODULE_2__}`);
  add.setAttribute('alt', "Add Project");
  add.classList.add('newProject');

  projects.appendChild(project);
  projects.appendChild(add);

  let projectsTabs = document.createElement('ul');
  projectsTabs.classList.add('projectsList');

  sidebar.appendChild(defaultTabs);
  sidebar.appendChild(projects);
  sidebar.appendChild(projectsTabs);

  return sidebar;
}

function createContent() {
  let content = document.createElement('div');
  content.classList.add('content');

  return content;
}

function createFooter() {
  let footer = document.createElement('footer');

  let a = document.createElement('a');
  a.textContent = "Created by Code4Daze";
  a.setAttribute('href', 'https://github.com/Daze-bot');
  a.setAttribute('target', '_blank');

  footer.appendChild(a);

  return footer;
}

function createNewProjectForm() {
  let newProjectDiv = document.createElement('div');
  newProjectDiv.classList.add('newProjectContainer', 'hidden');

  let newProjectForm = document.createElement('form');
  newProjectForm.classList.add('newProjectForm');
  newProjectForm.setAttribute('action', "");
  newProjectForm.setAttribute('autocomplete', 'off');

  let closeImg = document.createElement('img');
  closeImg.classList.add('closeBtn', 'formClose');
  closeImg.setAttribute('src', `${_imgs_close_svg__WEBPACK_IMPORTED_MODULE_6__}`);
  closeImg.setAttribute('alt', 'Close');

  let formHeader = document.createElement('p');
  formHeader.textContent = "New Project";

  let inputDiv = document.createElement('div');
  inputDiv.classList.add('input', 'entry');

  let formLabel = document.createElement('label');
  formLabel.setAttribute('for', 'projectNameInput');
  formLabel.textContent = "Project Name:";

  let formInput = document.createElement('input');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('name', 'projectNameInput');
  formInput.setAttribute('id', 'projectNameInput');
  formInput.setAttribute('required', "");

  let submitBtn = document.createElement('button');
  submitBtn.classList.add('submitNewProject');
  submitBtn.textContent = "Add Project";
  submitBtn.setAttribute('type', 'button');

  let resetBtn = document.createElement('button');
  resetBtn.classList.add('resetForm', 'hidden');
  resetBtn.setAttribute('type', 'reset');

  newProjectDiv.appendChild(newProjectForm);

  newProjectForm.appendChild(closeImg);
  newProjectForm.appendChild(formHeader);
  newProjectForm.appendChild(inputDiv);
  newProjectForm.appendChild(submitBtn);
  newProjectForm.appendChild(resetBtn);

  inputDiv.appendChild(formLabel);
  inputDiv.appendChild(formInput);

  return newProjectDiv;
}



/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "showNewProjectForm": () => (/* binding */ showNewProjectForm)
/* harmony export */ });
/* harmony import */ var _imgs_folder_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/folder.svg */ "./src/imgs/folder.svg");


let projects = [];
let projectID = 0;

class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

function showNewProjectForm() {
  let projectContainer = document.querySelector('.newProjectContainer');
  let projectNameInput = document.querySelector('#projectNameInput');
  projectContainer.classList.remove('hidden');
  projectNameInput.focus();
  submitProjectForm();
}

function submitProjectForm() {
  let projectSubmitBtn = document.querySelector('.submitNewProject');
  projectSubmitBtn.addEventListener('click', createProject);

  let formCloseBtn = document.querySelector('.formClose');
  formCloseBtn.addEventListener('click', closeProjectForm);

  let projectNameInput = document.querySelector('#projectNameInput');
  projectNameInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      createProject();
    }
  })

  let projectForm = document.querySelector('.newProjectForm');
  let projectContainer = document.querySelector('.newProjectContainer');
  projectContainer.addEventListener('click', function(e) {
    if (projectForm.contains(e.target)) {
      return;
    } else {
      closeProjectForm();
    }
  });
}

function createProject() {
  let projectName = document.querySelector('#projectNameInput').value;

  if (projectName !== "") {
    projectID += 1;
    let newProject = new Project(projectName, projectID);
    addProject(newProject);
  } else {
    closeProjectForm();
  }
}

function addProject(project) {
  projects.push(project);
  displayProject(project.name, project.id);
  console.log(projects);
}

function displayProject(name, id) {
  let projectsList = document.querySelector('.projectsList');

  let newProject = document.createElement('li');
  newProject.dataset.id = `${id}`;
  newProject.textContent = `${name}`;
  let img = document.createElement('img');
  img.setAttribute('src', `${_imgs_folder_svg__WEBPACK_IMPORTED_MODULE_0__}`);
  img.setAttribute('alt', `${name}`);
  newProject.appendChild(img);

  projectsList.appendChild(newProject);

  closeProjectForm();
}

function closeProjectForm() {
  let projectContainer = document.querySelector('.newProjectContainer');
  let resetBtn = document.querySelector('.resetForm');
  projectContainer.classList.add('hidden');
  resetBtn.click();
}



/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addThemeButtons": () => (/* binding */ addThemeButtons)
/* harmony export */ });
/* harmony import */ var _imgs_dark_theme_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/dark-theme.svg */ "./src/imgs/dark-theme.svg");
/* harmony import */ var _imgs_light_theme_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/light-theme.svg */ "./src/imgs/light-theme.svg");



function darkTheme() {
  document.documentElement.style.setProperty('--sidebar-bg-color', '#707379');
  document.documentElement.style.setProperty('--content-bg-color', '#333333');
  document.documentElement.style.setProperty('--color-change-filter1', 'brightness(4.12) saturate(100%) invert(100%) sepia(0%) saturate(7454%) hue-rotate(268deg) brightness(118%) contrast(101%)');
  document.documentElement.style.setProperty('--color-change-filter2', 'none');
  document.documentElement.style.setProperty('--primary-text-color', 'white');
  document.documentElement.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.2)');
  document.documentElement.style.setProperty('--li-hover-color', '#8f9299');
}

function lightTheme() {
  document.documentElement.style.setProperty('--sidebar-bg-color', '#e2e8f0');
  document.documentElement.style.setProperty('--content-bg-color', 'white');
  document.documentElement.style.setProperty('--color-change-filter1', 'none');
  document.documentElement.style.setProperty('--color-change-filter2', 'brightness(4.12) saturate(100%) invert(100%) sepia(0%) saturate(7454%) hue-rotate(268deg) brightness(118%) contrast(101%)');
  document.documentElement.style.setProperty('--primary-text-color', 'black');
  document.documentElement.style.setProperty('--secondary-text-color', 'rgba(0, 0, 0, 0.7)');
  document.documentElement.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.2)');
  document.documentElement.style.setProperty('--li-hover-color', '#c6ccd4');
}

function addThemeButtons() {
  let btnDiv = document.createElement('div');
  btnDiv.classList.add('themeBtns');
  
  let darkBtn = document.createElement('img');
  darkBtn.setAttribute('src', `${_imgs_dark_theme_svg__WEBPACK_IMPORTED_MODULE_0__}`);
  darkBtn.setAttribute('alt', "Dark Theme");
  darkBtn.classList.add('hidden', 'darkBtn');

  let lightBtn = document.createElement('img');
  lightBtn.setAttribute('src', `${_imgs_light_theme_svg__WEBPACK_IMPORTED_MODULE_1__}`);
  lightBtn.setAttribute('alt', "Light Theme");
  lightBtn.classList.add('lightBtn');

  btnDiv.appendChild(darkBtn);
  btnDiv.appendChild(lightBtn);

  let currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme);

  darkBtn.addEventListener('click', () => setTheme('dark'));
  lightBtn.addEventListener('click', () => setTheme('light'));

  function setTheme(mode) {
    window.localStorage.setItem("theme", `${mode}`);
    if (mode === "dark") {
      darkBtn.classList.add('hidden');
      lightBtn.classList.remove('hidden');
      darkTheme();
    } else if (mode === "light") {
      darkBtn.classList.remove('hidden');
      lightBtn.classList.add('hidden');
      lightTheme()
    }
  }

  return btnDiv;
}



/***/ }),

/***/ "./src/imgs/add.svg":
/*!**************************!*\
  !*** ./src/imgs/add.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "376e9b6a44e5b3142f12.svg";

/***/ }),

/***/ "./src/imgs/close.svg":
/*!****************************!*\
  !*** ./src/imgs/close.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "244b66874c46718f7e06.svg";

/***/ }),

/***/ "./src/imgs/dark-theme.svg":
/*!*********************************!*\
  !*** ./src/imgs/dark-theme.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fdb51e7c4ec36ce7cfc7.svg";

/***/ }),

/***/ "./src/imgs/folder.svg":
/*!*****************************!*\
  !*** ./src/imgs/folder.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b21daad4ad4fb5447eb6.svg";

/***/ }),

/***/ "./src/imgs/home.svg":
/*!***************************!*\
  !*** ./src/imgs/home.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c1b0a7e81b8c3fa5b5.svg";

/***/ }),

/***/ "./src/imgs/light-theme.svg":
/*!**********************************!*\
  !*** ./src/imgs/light-theme.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "faa5054f62a3976d4e15.svg";

/***/ }),

/***/ "./src/imgs/logo.svg":
/*!***************************!*\
  !*** ./src/imgs/logo.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7f3c64ddee31c87683a.svg";

/***/ }),

/***/ "./src/imgs/today.svg":
/*!****************************!*\
  !*** ./src/imgs/today.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9e7ac7154d144c69e03.svg";

/***/ }),

/***/ "./src/imgs/week.svg":
/*!***************************!*\
  !*** ./src/imgs/week.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d6269833df4c1cfcb38.svg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/todo-list/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _initLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initLoad */ "./src/initLoad.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");




document.body.appendChild((0,_initLoad__WEBPACK_IMPORTED_MODULE_1__.createHeader)());
document.body.appendChild((0,_initLoad__WEBPACK_IMPORTED_MODULE_1__.createSidebar)());
document.body.appendChild((0,_initLoad__WEBPACK_IMPORTED_MODULE_1__.createContent)());
document.body.appendChild((0,_initLoad__WEBPACK_IMPORTED_MODULE_1__.createFooter)());
document.body.appendChild((0,_initLoad__WEBPACK_IMPORTED_MODULE_1__.createNewProjectForm)());

let addBtn = document.querySelector('.newProject');
addBtn.addEventListener('click', _newProject__WEBPACK_IMPORTED_MODULE_2__.showNewProjectForm);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDJDQUFJLENBQUM7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHVEQUFlOztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyQ0FBSSxDQUFDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRDQUFLLENBQUM7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkNBQUksQ0FBQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLDBDQUFHLENBQUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLDRDQUFLLENBQUM7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEt1Qzs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLEdBQUc7QUFDaEMsOEJBQThCLEtBQUs7QUFDbkM7QUFDQSw2QkFBNkIsNkNBQU0sQ0FBQztBQUNwQyw2QkFBNkIsS0FBSztBQUNsQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckY2QztBQUNFOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpREFBUSxDQUFDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0Msa0RBQVMsQ0FBQztBQUM1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDaUY7QUFDMUQ7O0FBRWhELDBCQUEwQix1REFBWTtBQUN0QywwQkFBMEIsd0RBQWE7QUFDdkMsMEJBQTBCLHdEQUFhO0FBQ3ZDLDBCQUEwQix1REFBWTtBQUN0QywwQkFBMEIsK0RBQW9COztBQUU5QztBQUNBLGlDQUFpQywyREFBa0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbml0TG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc2lkZWJhci1iZy1jb2xvcjogO1xcbiAgLS1jb250ZW50LWJnLWNvbG9yOiA7XFxuICAtLWhlYWRlci1iZy1jb2xvcjogIzE5OTJkNDtcXG4gIC0tY29sb3ItY2hhbmdlLWZpbHRlcjE6IDtcXG4gIC0tY29sb3ItY2hhbmdlLWZpbHRlcjI6IDtcXG4gIC0tY2hhbmdlLXdoaXRlLWZpbHRlcjogYnJpZ2h0bmVzcyg0LjEyKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDI2OGRlZykgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMDElKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yOiA7XFxuICAtLXNlY29uZGFyeS10ZXh0LWNvbG9yOiA7XFxuICAtLXNoYWRvdy1jb2xvcjogO1xcbiAgLS1kYXJrLXNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLS1oZWFkZXItdGV4dC1jb2xvcjogd2hpdGU7XFxuICAtLWxpLWhvdmVyLWNvbG9yOiA7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXG4gICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxMDBweCAxZnIgMzBweCAvIDI4MHB4IDFmcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uaGVhZGVyQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4oMTQwMHB4LCAxMDB2dyk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5sb2dvIGgxIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgZmlsdGVyOiB2YXIoLS1jaGFuZ2Utd2hpdGUtZmlsdGVyKTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLnRoZW1lQnRucyBpbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiB2YXIoLS1jaGFuZ2Utd2hpdGUtZmlsdGVyKTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAycHggMCA4cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA2MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uc2lkZWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5zaWRlYmFyIGxpIGltZyB7XFxuICBmaWx0ZXI6IHZhcigtLWNvbG9yLWNoYW5nZS1maWx0ZXIxKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDIwcHhcXG59XFxuXFxuLmRlZmF1bHQsXFxuLnByb2plY3RzTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbiNwcm9qZWN0cyBpbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiB2YXIoLS1jb2xvci1jaGFuZ2UtZmlsdGVyMSk7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG5cXG4jcHJvamVjdHMgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zaXRpb246IC4zcztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLm5ld1Byb2plY3RDb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ld1Byb2plY3RGb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XFxuICBwYWRkaW5nOiA0MHB4IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXdQcm9qZWN0Rm9ybSBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmVudHJ5IGlucHV0LFxcbi5lbnRyeSBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5lbnRyeSBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5lbnRyeSBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmVudHJ5IGlucHV0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLmVudHJ5IGlucHV0OmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggdmFyKC0tZGFyay1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uc3VibWl0TmV3UHJvamVjdCB7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxufVxcblxcbi5zdWJtaXROZXdQcm9qZWN0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Ym1pdE5ld1Byb2plY3Q6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXFxuLmNsb3NlQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA2cHg7XFxuICB0b3A6IDZweDtcXG4gIGZpbHRlcjogdmFyKC0tY29sb3ItY2hhbmdlLWZpbHRlcjEpO1xcbn1cXG5cXG4uY2xvc2VCdG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgYTpsaW5rLFxcbmZvb3RlciBhOnZpc2l0ZWQsXFxuZm9vdGVyIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGdKQUFnSjtFQUNoSixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLGtCQUFr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LHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zaWRlYmFyLWJnLWNvbG9yOiA7XFxuICAtLWNvbnRlbnQtYmctY29sb3I6IDtcXG4gIC0taGVhZGVyLWJnLWNvbG9yOiAjMTk5MmQ0O1xcbiAgLS1jb2xvci1jaGFuZ2UtZmlsdGVyMTogO1xcbiAgLS1jb2xvci1jaGFuZ2UtZmlsdGVyMjogO1xcbiAgLS1jaGFuZ2Utd2hpdGUtZmlsdGVyOiBicmlnaHRuZXNzKDQuMTIpIHNhdHVyYXRlKDEwMCUpIGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoMjY4ZGVnKSBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgLS1wcmltYXJ5LXRleHQtY29sb3I6IDtcXG4gIC0tc2Vjb25kYXJ5LXRleHQtY29sb3I6IDtcXG4gIC0tc2hhZG93LWNvbG9yOiA7XFxuICAtLWRhcmstc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAtLWhlYWRlci10ZXh0LWNvbG9yOiB3aGl0ZTtcXG4gIC0tbGktaG92ZXItY29sb3I6IDtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcbiAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDEwMHB4IDFmciAzMHB4IC8gMjgwcHggMWZyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5oZWFkZXJDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IG1pbigxNDAwcHgsIDEwMHZ3KTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmxvZ28gaDEge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICBmaWx0ZXI6IHZhcigtLWNoYW5nZS13aGl0ZS1maWx0ZXIpO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4udGhlbWVCdG5zIGltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IHZhcigtLWNoYW5nZS13aGl0ZS1maWx0ZXIpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDJweCAwIDhweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTMwcHgpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDYwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXIgbGkgaW1nIHtcXG4gIGZpbHRlcjogdmFyKC0tY29sb3ItY2hhbmdlLWZpbHRlcjEpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjBweFxcbn1cXG5cXG4uZGVmYXVsdCxcXG4ucHJvamVjdHNMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuI3Byb2plY3RzIGltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IHZhcigtLWNvbG9yLWNoYW5nZS1maWx0ZXIxKTtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcblxcbiNwcm9qZWN0cyBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubmV3UHJvamVjdENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3UHJvamVjdEZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDQwcHggODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5ld1Byb2plY3RGb3JtIHAge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZW50cnkgaW5wdXQsXFxuLmVudHJ5IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmVudHJ5IGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLmVudHJ5IGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uZW50cnkgaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4uZW50cnkgaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCB2YXIoLS1kYXJrLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5zdWJtaXROZXdQcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnN1Ym1pdE5ld1Byb2plY3Q6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VibWl0TmV3UHJvamVjdDphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG5cXG4uY2xvc2VCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDZweDtcXG4gIHRvcDogNnB4O1xcbiAgZmlsdGVyOiB2YXIoLS1jb2xvci1jaGFuZ2UtZmlsdGVyMSk7XFxufVxcblxcbi5jbG9zZUJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhOmxpbmssXFxuZm9vdGVyIGE6dmlzaXRlZCxcXG5mb290ZXIgYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7YWRkVGhlbWVCdXR0b25zfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1ncy9sb2dvLnN2Zyc7XG5pbXBvcnQgQWRkIGZyb20gJy4vaW1ncy9hZGQuc3ZnJztcbmltcG9ydCBIb21lIGZyb20gJy4vaW1ncy9ob21lLnN2Zyc7XG5pbXBvcnQgVG9kYXkgZnJvbSAnLi9pbWdzL3RvZGF5LnN2Zyc7XG5pbXBvcnQgV2VlayBmcm9tICcuL2ltZ3Mvd2Vlay5zdmcnO1xuaW1wb3J0IENsb3NlIGZyb20gJy4vaW1ncy9jbG9zZS5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBsZXQgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlckNvbnRlbnQnKTtcblxuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuXG4gIGxldCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtMb2dvfWApO1xuICBsb2dvSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJMb2dvXCIpO1xuXG4gIGxldCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxvZ29UZXh0LnRleHRDb250ZW50ID0gXCJUby1kbyBMaXN0XCI7XG5cbiAgbG9nby5hcHBlbmRDaGlsZChsb2dvSW1nKTtcbiAgbG9nby5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG5cbiAgaGVhZGVyQ29udGVudC5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaGVhZGVyQ29udGVudC5hcHBlbmRDaGlsZChhZGRUaGVtZUJ1dHRvbnMoKSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gIGxldCBkZWZhdWx0VGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGRlZmF1bHRUYWJzLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQnKTtcblxuICBsZXQgaG9tZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG9tZUxpLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGxldCBob21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGhvbWVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtIb21lfWApO1xuICBob21lSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJIb21lXCIpO1xuICBob21lTGkuYXBwZW5kQ2hpbGQoaG9tZUltZyk7XG5cbiAgbGV0IHRvZGF5TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0b2RheUxpLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICBsZXQgdG9kYXlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdG9kYXlJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtUb2RheX1gKTtcbiAgdG9kYXlJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBcIlRvZGF5XCIpO1xuICB0b2RheUxpLmFwcGVuZENoaWxkKHRvZGF5SW1nKTtcblxuICBsZXQgd2Vla0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgd2Vla0xpLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcbiAgbGV0IHdlZWtJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgd2Vla0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke1dlZWt9YCk7XG4gIHdlZWtJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBcIldlZWtcIik7XG4gIHdlZWtMaS5hcHBlbmRDaGlsZCh3ZWVrSW1nKTtcblxuICBkZWZhdWx0VGFicy5hcHBlbmRDaGlsZChob21lTGkpO1xuICBkZWZhdWx0VGFicy5hcHBlbmRDaGlsZCh0b2RheUxpKTtcbiAgZGVmYXVsdFRhYnMuYXBwZW5kQ2hpbGQod2Vla0xpKTtcbiAgXG4gIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzJyk7XG5cbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUHJvamVjdHMnKTtcbiAgbGV0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhZGQuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtBZGR9YCk7XG4gIGFkZC5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiQWRkIFByb2plY3RcIik7XG4gIGFkZC5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0Jyk7XG5cbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgbGV0IHByb2plY3RzVGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHByb2plY3RzVGFicy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0xpc3QnKTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGRlZmF1bHRUYWJzKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNUYWJzKTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IENvZGU0RGF6ZVwiO1xuICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vRGF6ZS1ib3QnKTtcbiAgYS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEZvcm0oKSB7XG4gIGxldCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdENvbnRhaW5lcicsICdoaWRkZW4nKTtcblxuICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3RGb3JtJyk7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgXCJcIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuXG4gIGxldCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjbG9zZUltZy5jbGFzc0xpc3QuYWRkKCdjbG9zZUJ0bicsICdmb3JtQ2xvc2UnKTtcbiAgY2xvc2VJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtDbG9zZX1gKTtcbiAgY2xvc2VJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnQ2xvc2UnKTtcblxuICBsZXQgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcblxuICBsZXQgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQnLCAnZW50cnknKTtcblxuICBsZXQgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZm9ybUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6XCI7XG5cbiAgbGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdE5hbWVJbnB1dCcpO1xuICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIFwiXCIpO1xuXG4gIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdE5ld1Byb2plY3QnKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXG4gIGxldCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNldEZvcm0nLCAnaGlkZGVuJyk7XG4gIHJlc2V0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpO1xuXG4gIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0RGl2KTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGZvcm1MYWJlbCk7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGZvcm1JbnB1dCk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3REaXY7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUhlYWRlcixcbiAgY3JlYXRlU2lkZWJhcixcbiAgY3JlYXRlQ29udGVudCxcbiAgY3JlYXRlRm9vdGVyLFxuICBjcmVhdGVOZXdQcm9qZWN0Rm9ybSxcbn0iLCJpbXBvcnQgRm9sZGVyIGZyb20gJy4vaW1ncy9mb2xkZXIuc3ZnJztcblxubGV0IHByb2plY3RzID0gW107XG5sZXQgcHJvamVjdElEID0gMDtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd05ld1Byb2plY3RGb3JtKCkge1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Q29udGFpbmVyJyk7XG4gIGxldCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5mb2N1cygpO1xuICBzdWJtaXRQcm9qZWN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0Rm9ybSgpIHtcbiAgbGV0IHByb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0TmV3UHJvamVjdCcpO1xuICBwcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdCk7XG5cbiAgbGV0IGZvcm1DbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ2xvc2UnKTtcbiAgZm9ybUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0Rm9ybSk7XG5cbiAgbGV0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWVJbnB1dCcpO1xuICBwcm9qZWN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjcmVhdGVQcm9qZWN0KCk7XG4gICAgfVxuICB9KVxuXG4gIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Rm9ybScpO1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Q29udGFpbmVyJyk7XG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHByb2plY3RGb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSW5wdXQnKS52YWx1ZTtcblxuICBpZiAocHJvamVjdE5hbWUgIT09IFwiXCIpIHtcbiAgICBwcm9qZWN0SUQgKz0gMTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0SUQpO1xuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIH0gZWxzZSB7XG4gICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBkaXNwbGF5UHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QuaWQpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KG5hbWUsIGlkKSB7XG4gIGxldCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNMaXN0Jyk7XG5cbiAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBuZXdQcm9qZWN0LmRhdGFzZXQuaWQgPSBgJHtpZH1gO1xuICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gYCR7bmFtZX1gO1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke0ZvbGRlcn1gKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYCR7bmFtZX1gKTtcbiAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICBjbG9zZVByb2plY3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RDb250YWluZXInKTtcbiAgbGV0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Rm9ybScpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICByZXNldEJ0bi5jbGljaygpO1xufVxuXG5leHBvcnQge1xuICBwcm9qZWN0cyxcbiAgc2hvd05ld1Byb2plY3RGb3JtLFxufTsiLCJpbXBvcnQgRGFya0ljb24gZnJvbSAnLi9pbWdzL2RhcmstdGhlbWUuc3ZnJztcbmltcG9ydCBMaWdodEljb24gZnJvbSAnLi9pbWdzL2xpZ2h0LXRoZW1lLnN2Zyc7XG5cbmZ1bmN0aW9uIGRhcmtUaGVtZSgpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNpZGViYXItYmctY29sb3InLCAnIzcwNzM3OScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29udGVudC1iZy1jb2xvcicsICcjMzMzMzMzJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2xvci1jaGFuZ2UtZmlsdGVyMScsICdicmlnaHRuZXNzKDQuMTIpIHNhdHVyYXRlKDEwMCUpIGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ1NCUpIGh1ZS1yb3RhdGUoMjY4ZGVnKSBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDEwMSUpJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2xvci1jaGFuZ2UtZmlsdGVyMicsICdub25lJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LXRleHQtY29sb3InLCAnd2hpdGUnKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNoYWRvdy1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIDAuMiknKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxpLWhvdmVyLWNvbG9yJywgJyM4ZjkyOTknKTtcbn1cblxuZnVuY3Rpb24gbGlnaHRUaGVtZSgpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNpZGViYXItYmctY29sb3InLCAnI2UyZThmMCcpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29udGVudC1iZy1jb2xvcicsICd3aGl0ZScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29sb3ItY2hhbmdlLWZpbHRlcjEnLCAnbm9uZScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29sb3ItY2hhbmdlLWZpbHRlcjInLCAnYnJpZ2h0bmVzcyg0LjEyKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NTQlKSBodWUtcm90YXRlKDI2OGRlZykgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMDElKScpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeS10ZXh0LWNvbG9yJywgJ2JsYWNrJyk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zZWNvbmRhcnktdGV4dC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIDAuNyknKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXNoYWRvdy1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIDAuMiknKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxpLWhvdmVyLWNvbG9yJywgJyNjNmNjZDQnKTtcbn1cblxuZnVuY3Rpb24gYWRkVGhlbWVCdXR0b25zKCkge1xuICBsZXQgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bkRpdi5jbGFzc0xpc3QuYWRkKCd0aGVtZUJ0bnMnKTtcbiAgXG4gIGxldCBkYXJrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRhcmtCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtEYXJrSWNvbn1gKTtcbiAgZGFya0J0bi5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiRGFyayBUaGVtZVwiKTtcbiAgZGFya0J0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAnZGFya0J0bicpO1xuXG4gIGxldCBsaWdodEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsaWdodEJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke0xpZ2h0SWNvbn1gKTtcbiAgbGlnaHRCdG4uc2V0QXR0cmlidXRlKCdhbHQnLCBcIkxpZ2h0IFRoZW1lXCIpO1xuICBsaWdodEJ0bi5jbGFzc0xpc3QuYWRkKCdsaWdodEJ0bicpO1xuXG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChkYXJrQnRuKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGxpZ2h0QnRuKTtcblxuICBsZXQgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XG4gIHNldFRoZW1lKGN1cnJlbnRUaGVtZSk7XG5cbiAgZGFya0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFRoZW1lKCdkYXJrJykpO1xuICBsaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFRoZW1lKCdsaWdodCcpKTtcblxuICBmdW5jdGlvbiBzZXRUaGVtZShtb2RlKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgYCR7bW9kZX1gKTtcbiAgICBpZiAobW9kZSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIGRhcmtCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBsaWdodEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRhcmtUaGVtZSgpO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJsaWdodFwiKSB7XG4gICAgICBkYXJrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgbGlnaHRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBsaWdodFRoZW1lKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnRuRGl2O1xufVxuXG5leHBvcnQge2FkZFRoZW1lQnV0dG9uc307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3RvZG8tbGlzdC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7Y3JlYXRlSGVhZGVyLCBjcmVhdGVTaWRlYmFyLCBjcmVhdGVGb290ZXIsIGNyZWF0ZUNvbnRlbnQsIGNyZWF0ZU5ld1Byb2plY3RGb3JtfSBmcm9tICcuL2luaXRMb2FkJztcbmltcG9ydCB7c2hvd05ld1Byb2plY3RGb3JtfSBmcm9tICcuL25ld1Byb2plY3QnO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudCgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0Rm9ybSgpKTtcblxubGV0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Jyk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV3UHJvamVjdEZvcm0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==