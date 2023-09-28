/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 16px;
    --main-color: hsl(0, 0%, 75%);
    --second-color: hsl(0, 0%, 80%);
    --third-color: hsl(0, 0%, 90%);
    --theme-color: hsl(205, 55%, 20%);
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
}

header {
    font-size: 2.2rem;
    font-weight: bold;
    padding: 24px;
    text-align: center;
    background-color: var(--main-color);
    box-shadow: 0px 2px 6px gray;
    z-index: 2;
    color: var(--theme-color);
    text-shadow: 1px 1px steelblue;
}

.main-content {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
}

.projects-sidebar {
    background-color: var(--second-color);
    padding: 24px 16px;
    display: flex;
    width: 28%;
    flex-flow: column nowrap;
    gap: 16px;
    box-shadow: 2px 0px 6px gray;
    z-index: 1;
    overflow: scroll;
    position: relative;
    padding-bottom: 112px;
}

.project-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
}

#sidebar-title {
    color: var(--theme-color);
    text-shadow: 1px 1px steelblue;
    text-align: center;
    font-size: 1.8rem;
}

.project {
    background-color: white;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    gap: 4px;
    font-size: 1.6rem;
}

.project.active {
    background-color: var(--theme-color);
}

.project.active input:read-only {
    color: white;
}


.project,
.todo {
    box-shadow: 2px 2px 6px gray;
}

.project #title {
    flex: 1;
    font-size: inherit;
    padding: 8px;
}

.project button {
    padding: 8px;
    font-size: inherit;
}

.todos-area {
    flex: 1;
    background-color: var(--third-color);
    padding: 24px 16px;
    display: flex;
    flex-flow: column nowrap;
    overflow: scroll;
    position: relative;
    padding-bottom: 112px;
}

.todo-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}

.todo {
    background-color: white;
    padding: 0px 16px;
    border-radius: 8px;
    font-size: 1.4rem;
    display: flex;
    gap: 8px;
    align-items: center;
    margin: 0px 16px;

    border-left: 12px solid black;
}

.todo #done-check {
    transform: scale(2);
    margin: 0px 8px;
}

.todo #description {
    flex: 1;
}

.todo input,
.todo button,
.todo label {
    font-size: inherit;
    padding: 12px;
}

.todo input:read-only {
    color: black;
    border: 0;
}

.project button,
.todo button,
.project input:read-only,
.todo input:read-only,
.project input:read-only {
    background-color: transparent;
    border: 0;
    border-radius: 4px;
}

.project button:hover,
.todo button:hover,
.project input:read-only:hover,
.todo input:read-only:hover {
    background-color: var(--third-color);
    color: black;
}

button.add {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 24px;
    padding: 12px;
    font-size: 1.6rem;
    background-color: var(--theme-color);
    border: 2px solid var(--theme-color);
    color: white;
}

.project.add {
    left: 16%;
}

button.add:hover {
    background-color: white;
    color: var(--theme-color);
}

input:read-only {
    border: 0;
    cursor: default;
}

input:read-only:focus {
    outline: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,+BAA+B;IAC/B,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,4BAA4B;IAC5B,UAAU;IACV,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA;IACI,OAAO;IACP,aAAa;IACb,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,wBAAwB;IACxB,SAAS;IACT,4BAA4B;IAC5B,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,8BAA8B;IAC9B,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;AAChB;;;AAGA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,OAAO;IACP,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,OAAO;IACP,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,gBAAgB;;IAEhB,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,OAAO;AACX;;AAEA;;;IAGI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;;;;;IAKI,6BAA6B;IAC7B,SAAS;IACT,kBAAkB;AACtB;;AAEA;;;;IAII,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,oCAAoC;IACpC,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,UAAU;AACd","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 16px;\n    --main-color: hsl(0, 0%, 75%);\n    --second-color: hsl(0, 0%, 80%);\n    --third-color: hsl(0, 0%, 90%);\n    --theme-color: hsl(205, 55%, 20%);\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-flow: column nowrap;\n}\n\nheader {\n    font-size: 2.2rem;\n    font-weight: bold;\n    padding: 24px;\n    text-align: center;\n    background-color: var(--main-color);\n    box-shadow: 0px 2px 6px gray;\n    z-index: 2;\n    color: var(--theme-color);\n    text-shadow: 1px 1px steelblue;\n}\n\n.main-content {\n    flex: 1;\n    display: flex;\n    flex-flow: row nowrap;\n    overflow: hidden;\n}\n\n.projects-sidebar {\n    background-color: var(--second-color);\n    padding: 24px 16px;\n    display: flex;\n    width: 28%;\n    flex-flow: column nowrap;\n    gap: 16px;\n    box-shadow: 2px 0px 6px gray;\n    z-index: 1;\n    overflow: scroll;\n    position: relative;\n    padding-bottom: 112px;\n}\n\n.project-container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 16px;\n}\n\n#sidebar-title {\n    color: var(--theme-color);\n    text-shadow: 1px 1px steelblue;\n    text-align: center;\n    font-size: 1.8rem;\n}\n\n.project {\n    background-color: white;\n    padding: 12px;\n    border-radius: 8px;\n    display: flex;\n    gap: 4px;\n    font-size: 1.6rem;\n}\n\n.project.active {\n    background-color: var(--theme-color);\n}\n\n.project.active input:read-only {\n    color: white;\n}\n\n\n.project,\n.todo {\n    box-shadow: 2px 2px 6px gray;\n}\n\n.project #title {\n    flex: 1;\n    font-size: inherit;\n    padding: 8px;\n}\n\n.project button {\n    padding: 8px;\n    font-size: inherit;\n}\n\n.todos-area {\n    flex: 1;\n    background-color: var(--third-color);\n    padding: 24px 16px;\n    display: flex;\n    flex-flow: column nowrap;\n    overflow: scroll;\n    position: relative;\n    padding-bottom: 112px;\n}\n\n.todo-container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n}\n\n.todo {\n    background-color: white;\n    padding: 0px 16px;\n    border-radius: 8px;\n    font-size: 1.4rem;\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    margin: 0px 16px;\n\n    border-left: 12px solid black;\n}\n\n.todo #done-check {\n    transform: scale(2);\n    margin: 0px 8px;\n}\n\n.todo #description {\n    flex: 1;\n}\n\n.todo input,\n.todo button,\n.todo label {\n    font-size: inherit;\n    padding: 12px;\n}\n\n.todo input:read-only {\n    color: black;\n    border: 0;\n}\n\n.project button,\n.todo button,\n.project input:read-only,\n.todo input:read-only,\n.project input:read-only {\n    background-color: transparent;\n    border: 0;\n    border-radius: 4px;\n}\n\n.project button:hover,\n.todo button:hover,\n.project input:read-only:hover,\n.todo input:read-only:hover {\n    background-color: var(--third-color);\n    color: black;\n}\n\nbutton.add {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    margin: 24px;\n    padding: 12px;\n    font-size: 1.6rem;\n    background-color: var(--theme-color);\n    border: 2px solid var(--theme-color);\n    color: white;\n}\n\n.project.add {\n    left: 16%;\n}\n\nbutton.add:hover {\n    background-color: white;\n    color: var(--theme-color);\n}\n\ninput:read-only {\n    border: 0;\n    cursor: default;\n}\n\ninput:read-only:focus {\n    outline: 0;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const makeTodo = (function (_description, _dueDate, _priority, _id) {
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;
    let id = _id;
    let done = false;


    function getInformation() {
        return {
            description,
            dueDate,
            priority,
            id,
            done,
        };
    }

    function changeInfo(newDescription, newDueDate, newPriority) {
        description = newDescription;
        dueDate = newDueDate;
        priority = newPriority;
    }

    function changeDone(value) {
        done = value;
    }

    return { getInformation, changeInfo, changeDone };
});


const makeProject = (function (_title, _id) {
    let title = _title;
    let todos = [];
    let id = _id;

    function getLastTodo() {
        return todos[todos.length - 1];
    }

    function getTodo(id) {
        for (let todo of todos) {
            if (todo.getInformation().id == id) {
                return todo;
            }
        }

        return null;
    }

    function addTodo(description, dueDate, priority, done) {
        let id = 0;
        if (todos.length != 0) {
            id = getLastTodo().getInformation().id + 1;
        }

        let todo = makeTodo(description, dueDate, priority, id);
        todo.changeDone(done);

        todos.push(todo);
    }

    function removeTodo(id) {
        let todo = getTodo(id);
        let index = todos.indexOf(todo);

        if (index > -1) {
            todos.splice(index, 1);
        }
    }

    function getInformation() {
        return {
            title,
            todos,
            id,
        }
    }

    function changeInfo(newTitle) {
        title = newTitle;
    }

    // For local storage
    function getObject() {
        let array = []
        for (let todo of todos) {
            array.push(todo.getInformation());
        }

        return {
            title,
            array,
            id,
        }
    }


    return { addTodo, getInformation, getTodo, changeInfo, removeTodo, getObject };
});

const app = (function () {
    let projects = [];
    let activeProject;

    init();

    function saveToLocalStorage() {
        window.localStorage.projects = JSON.stringify(getObject());
    }

    function getLastProject() {
        return projects[projects.length - 1];
    }

    function getProject(id) {
        for (let project of projects) {
            if (project.getInformation().id == id) {
                return project;
            }
        }

        return null;
    }

    function addProject(title) {
        let id = 0;
        if (projects.length != 0) {
            id = getLastProject().getInformation().id + 1;
        }

        let project = makeProject(title, id);

        projects.push(project);

        setActiveProject(id);
    }

    function removeProject(id) {
        let project = getProject(id);
        let index = projects.indexOf(project);

        if (index > -1) {
            projects.splice(index, 1);
        }
    }

    function init() {
        if (!(window.localStorage.projects)) {
            addProject("Default Project");
            activeProject.addTodo("Default Todo", "", 0);
        }
    }

    function getInformation() {
        return {
            projects,
            activeProject
        };
    }

    function getActiveProject() {
        return activeProject;
    }

    function setActiveProject(projectId) {
        for (let project of projects) {
            if (project.getInformation().id == projectId) {
                activeProject = project;
                break;
            }
        }
    }

    // For local storage
    function getObject() {
        let array = [];

        for (let project of projects) {
            array.push(project.getObject());
        }

        return {
            array,
        }
    }

    return { addProject, getInformation, getProject, removeProject, getActiveProject, getObject, setActiveProject, saveToLocalStorage };
})();

const dom = (function () {
    let projectContainer = document.querySelector(".project-container");
    let todoContainer = document.querySelector(".todo-container");
    let addTodoButton = document.querySelector("button.add.todo");
    let addProjectButton = document.querySelector("button.add.project");

    bindButtons();

    function readFromLocalStorage() {
        if (window.localStorage.projects) {
            let data = JSON.parse(window.localStorage.projects);

            for (let project of data.array) {
                app.addProject(project.title);
                for (let todo of project.array) {
                    app.getActiveProject().addTodo(todo.description, todo.dueDate, todo.priority, todo.done);
                }
            }
        }
    }

    function bindButtons() {
        addProjectButton.addEventListener("click", () => {
            app.addProject("None");
            renderProjects();
            renderTodos(app.getActiveProject().getInformation().id);

            let lastChild = projectContainer.children[projectContainer.children.length - 1];

            let titleInput = lastChild.querySelector("input");
            let editButton = lastChild.querySelector("button.edit");
            editButton.click();
            titleInput.focus();
            titleInput.setSelectionRange(0, titleInput.value.length);

            app.saveToLocalStorage();
        });

        addTodoButton.addEventListener("click", () => {
            if (projectContainer.childElementCount > 0) {
                app.getActiveProject().addTodo("None", "", 0, false);
                renderTodos(app.getActiveProject().getInformation().id);

                let lastChild = todoContainer.children[todoContainer.children.length - 1];

                let descriptionInput = lastChild.querySelector("input#description");
                let editButton = lastChild.querySelector("button.edit");
                editButton.click();
                descriptionInput.focus();
                descriptionInput.setSelectionRange(0, descriptionInput.value.length);

                app.saveToLocalStorage();
            }
        });
    }

    function createProject(title, id) {
        let project = document.createElement("div");
        project.classList.add("project");
        project.setAttribute("data-id", id);

        project.insertAdjacentHTML(
            "afterbegin",
            `
            <input type="text" value="${title}" id="title" readonly>
            <button class="edit">⚙️</button>
            <button class="remove">🗑️</button>
            `
        );

        let titleInput = project.querySelector("input");
        titleInput.addEventListener("click", () => {
            renderTodos(id);
            app.setActiveProject(id);
            showActiveProject(id);
        });

        project.querySelector("button.remove").addEventListener("click", () => {
            app.removeProject(id);
            projectContainer.removeChild(project);

            if (project.classList.contains("active") && projectContainer.childElementCount > 0) {
                let firstId = projectContainer.children[0].getAttribute("data-id");

                renderTodos(firstId);
                app.setActiveProject(firstId);
                showActiveProject(firstId);
            }
            else if (projectContainer.childElementCount <= 0) {
                todoContainer.replaceChildren([]);
            }

            app.saveToLocalStorage();
        });

        let editButton = project.querySelector("button.edit");
        editButton.addEventListener("click", () => {
            if (editButton.classList.contains("active")) {
                editButton.classList.remove("active");
                editButton.textContent = "⚙️";
                titleInput.readOnly = true;

                app.getProject(id).changeInfo(titleInput.value);
            }
            else {
                editButton.classList.add("active");
                editButton.textContent = "✅";
                titleInput.readOnly = false;
                titleInput.focus();
                titleInput.setSelectionRange(titleInput.value.length, titleInput.value.length);
            }

            app.saveToLocalStorage();
        });

        return project;
    }

    function showActiveProject(id) {
        for (let project of projectContainer.children) {
            project.classList.remove("active");

            if (project.getAttribute("data-id") == id) {
                project.classList.add("active");
            }
        }

    }

    function renderProjects() {
        projectContainer.replaceChildren([]);

        for (let project of app.getInformation().projects) {
            let projectDiv = createProject(project.getInformation().title, project.getInformation().id);
            projectContainer.appendChild(projectDiv);

            if (project.getInformation().id == app.getActiveProject().getInformation().id) {
                projectDiv.classList.add("active");
            }
        }
    }

    function createTodo(description, dueDate, priority, id, done) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.setAttribute("data-id", id);

        todo.insertAdjacentHTML(
            "afterbegin",
            `
            <input type="checkbox" name="done-check" id="done-check" ${done ? "checked" : ""}>
            <input name="description" id="description" value="${description}" maxlength="120" readonly>
            <label>
                📅
                <input type="date" name="due-date" id="due-date" value="${dueDate}" readonly>
            </label>
            <label>
                ⚠️
                <input type="number" name="priority" id="priority" value="${priority}" min="0" max="9" size="4"
                    readonly>
            </label>
            <button class="edit">⚙️</button>
            <button class="remove">🗑️</button>
            `
        );

        todo.querySelector("#done-check").addEventListener("click", (event) => {
            app.getActiveProject().getTodo(id).changeDone(event.target.checked);

            app.saveToLocalStorage();
        });

        todo.querySelector("button.remove").addEventListener("click", () => {
            app.getActiveProject().removeTodo(id);
            todoContainer.removeChild(todo);

            app.saveToLocalStorage();
        });

        let descriptionInput = todo.querySelector("input#description");
        let dateInput = todo.querySelector("input#due-date");
        let priorityInput = todo.querySelector("input#priority");
        let editButton = todo.querySelector("button.edit");
        editButton.addEventListener("click", () => {
            if (editButton.classList.contains("active")) {
                editButton.classList.remove("active");
                editButton.textContent = "⚙️";

                descriptionInput.readOnly = true;
                dateInput.readOnly = true;
                priorityInput.readOnly = true;

                app.getActiveProject().getTodo(id).changeInfo(descriptionInput.value, dateInput.value, priorityInput.value);
                todo.style.borderLeftColor = `hsl(0, 100%, ${100 - ((priorityInput.value) / 9 * 50)}%)`;
            }
            else {
                editButton.classList.add("active");
                editButton.textContent = "✅";

                descriptionInput.readOnly = false;
                dateInput.readOnly = false;
                priorityInput.readOnly = false;

                descriptionInput.focus();
                descriptionInput.setSelectionRange(descriptionInput.value.length, descriptionInput.value.length);
            }

            app.saveToLocalStorage();
        });

        return todo;

    }

    function renderTodos(projectId) {
        todoContainer.replaceChildren([]);

        var todos = app.getProject(projectId).getInformation().todos;

        for (let todo of todos) {
            let todoDiv = createTodo(todo.getInformation().description, todo.getInformation().dueDate, todo.getInformation().priority, todo.getInformation().id, todo.getInformation().done);
            todoContainer.appendChild(todoDiv);
            todoDiv.style.borderLeftColor = `hsl(0, 100%, ${100 - ((todo.getInformation().priority) / 9 * 50)}%)`;
        }
    }

    return { renderProjects, renderTodos, readFromLocalStorage };
})();

dom.readFromLocalStorage();
dom.renderProjects();
dom.renderTodos(app.getActiveProject().getInformation().id);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41N2Q0MThkNDc1NDNlN2NjNjU3My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFNBQVMsWUFBWSxXQUFXLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFB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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQ3FCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsc0JBQXNCO0FBQzdGLGdFQUFnRSxZQUFZO0FBQzVFO0FBQ0E7QUFDQSwwRUFBMEUsUUFBUTtBQUNsRjtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsU0FBUztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RCx1Q0FBdUM7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsa0RBQWtEO0FBQzlHO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLS1tYWluLWNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XG4gICAgLS1zZWNvbmQtY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcbiAgICAtLXRoaXJkLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XG4gICAgLS10aGVtZS1jb2xvcjogaHNsKDIwNSwgNTUlLCAyMCUpO1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCBncmF5O1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBzdGVlbGJsdWU7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2plY3RzLXNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDI4JTtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAwcHggNnB4IGdyYXk7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEycHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4jc2lkZWJhci10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBzdGVlbGJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4ucHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDRweDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLnByb2plY3QuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbi5wcm9qZWN0LmFjdGl2ZSBpbnB1dDpyZWFkLW9ubHkge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4ucHJvamVjdCxcbi50b2RvIHtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCBncmF5O1xufVxuXG4ucHJvamVjdCAjdGl0bGUge1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLnByb2plY3QgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4udG9kb3MtYXJlYSB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMTJweDtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi50b2RvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4IDE2cHg7XG5cbiAgICBib3JkZXItbGVmdDogMTJweCBzb2xpZCBibGFjaztcbn1cblxuLnRvZG8gI2RvbmUtY2hlY2sge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgbWFyZ2luOiAwcHggOHB4O1xufVxuXG4udG9kbyAjZGVzY3JpcHRpb24ge1xuICAgIGZsZXg6IDE7XG59XG5cbi50b2RvIGlucHV0LFxuLnRvZG8gYnV0dG9uLFxuLnRvZG8gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuXG4udG9kbyBpbnB1dDpyZWFkLW9ubHkge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDA7XG59XG5cbi5wcm9qZWN0IGJ1dHRvbixcbi50b2RvIGJ1dHRvbixcbi5wcm9qZWN0IGlucHV0OnJlYWQtb25seSxcbi50b2RvIGlucHV0OnJlYWQtb25seSxcbi5wcm9qZWN0IGlucHV0OnJlYWQtb25seSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnByb2plY3QgYnV0dG9uOmhvdmVyLFxuLnRvZG8gYnV0dG9uOmhvdmVyLFxuLnByb2plY3QgaW5wdXQ6cmVhZC1vbmx5OmhvdmVyLFxuLnRvZG8gaW5wdXQ6cmVhZC1vbmx5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b24uYWRkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMjRweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdC5hZGQge1xuICAgIGxlZnQ6IDE2JTtcbn1cblxuYnV0dG9uLmFkZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuaW5wdXQ6cmVhZC1vbmx5IHtcbiAgICBib3JkZXI6IDA7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5pbnB1dDpyZWFkLW9ubHk6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztJQUNQLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGdCQUFnQjs7SUFFaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTs7Ozs7SUFLSSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztJQUlJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAtLW1haW4tY29sb3I6IGhzbCgwLCAwJSwgNzUlKTtcXG4gICAgLS1zZWNvbmQtY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXG4gICAgLS10aGlyZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICAtLXRoZW1lLWNvbG9yOiBoc2woMjA1LCA1NSUsIDIwJSk7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCBncmF5O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBzdGVlbGJsdWU7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjglO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCA2cHggZ3JheTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEycHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHN0ZWVsYmx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5wcm9qZWN0LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QuYWN0aXZlIGlucHV0OnJlYWQtb25seSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnByb2plY3QsXFxuLnRvZG8ge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCBncmF5O1xcbn1cXG5cXG4ucHJvamVjdCAjdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi50b2Rvcy1hcmVhIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEycHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDE2cHg7XFxuXFxuICAgIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kbyAjZG9uZS1jaGVjayB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICAgIG1hcmdpbjogMHB4IDhweDtcXG59XFxuXFxuLnRvZG8gI2Rlc2NyaXB0aW9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRvZG8gaW5wdXQsXFxuLnRvZG8gYnV0dG9uLFxcbi50b2RvIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udG9kbyBpbnB1dDpyZWFkLW9ubHkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uLFxcbi50b2RvIGJ1dHRvbixcXG4ucHJvamVjdCBpbnB1dDpyZWFkLW9ubHksXFxuLnRvZG8gaW5wdXQ6cmVhZC1vbmx5LFxcbi5wcm9qZWN0IGlucHV0OnJlYWQtb25seSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uOmhvdmVyLFxcbi50b2RvIGJ1dHRvbjpob3ZlcixcXG4ucHJvamVjdCBpbnB1dDpyZWFkLW9ubHk6aG92ZXIsXFxuLnRvZG8gaW5wdXQ6cmVhZC1vbmx5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5hZGQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMjRweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LmFkZCB7XFxuICAgIGxlZnQ6IDE2JTtcXG59XFxuXFxuYnV0dG9uLmFkZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbn1cXG5cXG5pbnB1dDpyZWFkLW9ubHkge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaW5wdXQ6cmVhZC1vbmx5OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuY29uc3QgbWFrZVRvZG8gPSAoZnVuY3Rpb24gKF9kZXNjcmlwdGlvbiwgX2R1ZURhdGUsIF9wcmlvcml0eSwgX2lkKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gX2Rlc2NyaXB0aW9uO1xuICAgIGxldCBkdWVEYXRlID0gX2R1ZURhdGU7XG4gICAgbGV0IHByaW9yaXR5ID0gX3ByaW9yaXR5O1xuICAgIGxldCBpZCA9IF9pZDtcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG5cbiAgICBmdW5jdGlvbiBnZXRJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBkb25lLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUluZm8obmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZURvbmUodmFsdWUpIHtcbiAgICAgICAgZG9uZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldEluZm9ybWF0aW9uLCBjaGFuZ2VJbmZvLCBjaGFuZ2VEb25lIH07XG59KTtcblxuXG5jb25zdCBtYWtlUHJvamVjdCA9IChmdW5jdGlvbiAoX3RpdGxlLCBfaWQpIHtcbiAgICBsZXQgdGl0bGUgPSBfdGl0bGU7XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgbGV0IGlkID0gX2lkO1xuXG4gICAgZnVuY3Rpb24gZ2V0TGFzdFRvZG8oKSB7XG4gICAgICAgIHJldHVybiB0b2Rvc1t0b2Rvcy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2RvKGlkKSB7XG4gICAgICAgIGZvciAobGV0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgICAgICAgIGlmICh0b2RvLmdldEluZm9ybWF0aW9uKCkuaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8oZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lKSB7XG4gICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgIGlmICh0b2Rvcy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgaWQgPSBnZXRMYXN0VG9kbygpLmdldEluZm9ybWF0aW9uKCkuaWQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvZG8gPSBtYWtlVG9kbyhkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkKTtcbiAgICAgICAgdG9kby5jaGFuZ2VEb25lKGRvbmUpO1xuXG4gICAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyhpZCkge1xuICAgICAgICBsZXQgdG9kbyA9IGdldFRvZG8oaWQpO1xuICAgICAgICBsZXQgaW5kZXggPSB0b2Rvcy5pbmRleE9mKHRvZG8pO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5mb3JtYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHRvZG9zLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VJbmZvKG5ld1RpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgLy8gRm9yIGxvY2FsIHN0b3JhZ2VcbiAgICBmdW5jdGlvbiBnZXRPYmplY3QoKSB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdXG4gICAgICAgIGZvciAobGV0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2godG9kby5nZXRJbmZvcm1hdGlvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgaWQsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7IGFkZFRvZG8sIGdldEluZm9ybWF0aW9uLCBnZXRUb2RvLCBjaGFuZ2VJbmZvLCByZW1vdmVUb2RvLCBnZXRPYmplY3QgfTtcbn0pO1xuXG5jb25zdCBhcHAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgIGxldCBhY3RpdmVQcm9qZWN0O1xuXG4gICAgaW5pdCgpO1xuXG4gICAgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkoZ2V0T2JqZWN0KCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExhc3RQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdChpZCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5nZXRJbmZvcm1hdGlvbigpLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgaWQgPSBnZXRMYXN0UHJvamVjdCgpLmdldEluZm9ybWF0aW9uKCkuaWQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2plY3QgPSBtYWtlUHJvamVjdCh0aXRsZSwgaWQpO1xuXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChpZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpZCkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGdldFByb2plY3QoaWQpO1xuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKCEod2luZG93LmxvY2FsU3RvcmFnZS5wcm9qZWN0cykpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0LmFkZFRvZG8oXCJEZWZhdWx0IFRvZG9cIiwgXCJcIiwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3RzLFxuICAgICAgICAgICAgYWN0aXZlUHJvamVjdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldEluZm9ybWF0aW9uKCkuaWQgPT0gcHJvamVjdElkKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb3IgbG9jYWwgc3RvcmFnZVxuICAgIGZ1bmN0aW9uIGdldE9iamVjdCgpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgYXJyYXkucHVzaChwcm9qZWN0LmdldE9iamVjdCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcnJheSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIGdldEluZm9ybWF0aW9uLCBnZXRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRBY3RpdmVQcm9qZWN0LCBnZXRPYmplY3QsIHNldEFjdGl2ZVByb2plY3QsIHNhdmVUb0xvY2FsU3RvcmFnZSB9O1xufSkoKTtcblxuY29uc3QgZG9tID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gICAgbGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xuICAgIGxldCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQudG9kb1wiKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkLnByb2plY3RcIik7XG5cbiAgICBiaW5kQnV0dG9ucygpO1xuXG4gICAgZnVuY3Rpb24gcmVhZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5wcm9qZWN0cyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgZGF0YS5hcnJheSkge1xuICAgICAgICAgICAgICAgIGFwcC5hZGRQcm9qZWN0KHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC5hcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBhcHAuZ2V0QWN0aXZlUHJvamVjdCgpLmFkZFRvZG8odG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLmRvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRCdXR0b25zKCkge1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBhcHAuYWRkUHJvamVjdChcIk5vbmVcIik7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgcmVuZGVyVG9kb3MoYXBwLmdldEFjdGl2ZVByb2plY3QoKS5nZXRJbmZvcm1hdGlvbigpLmlkKTtcblxuICAgICAgICAgICAgbGV0IGxhc3RDaGlsZCA9IHByb2plY3RDb250YWluZXIuY2hpbGRyZW5bcHJvamVjdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBsYXN0Q2hpbGQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBsYXN0Q2hpbGQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5lZGl0XCIpO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB0aXRsZUlucHV0LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGFwcC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3RDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgYXBwLmdldEFjdGl2ZVByb2plY3QoKS5hZGRUb2RvKFwiTm9uZVwiLCBcIlwiLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb3MoYXBwLmdldEFjdGl2ZVByb2plY3QoKS5nZXRJbmZvcm1hdGlvbigpLmlkKTtcblxuICAgICAgICAgICAgICAgIGxldCBsYXN0Q2hpbGQgPSB0b2RvQ29udGFpbmVyLmNoaWxkcmVuW3RvZG9Db250YWluZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGxhc3RDaGlsZC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBsYXN0Q2hpbGQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5lZGl0XCIpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGlkKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGlkKTtcblxuICAgICAgICBwcm9qZWN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RpdGxlfVwiIGlkPVwidGl0bGVcIiByZWFkb25seT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+4pqZ77iPPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlXCI+8J+Xke+4jzwvYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclRvZG9zKGlkKTtcbiAgICAgICAgICAgIGFwcC5zZXRBY3RpdmVQcm9qZWN0KGlkKTtcbiAgICAgICAgICAgIHNob3dBY3RpdmVQcm9qZWN0KGlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnJlbW92ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgYXBwLnJlbW92ZVByb2plY3QoaWQpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0KTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIHByb2plY3RDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0SWQgPSBwcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvcyhmaXJzdElkKTtcbiAgICAgICAgICAgICAgICBhcHAuc2V0QWN0aXZlUHJvamVjdChmaXJzdElkKTtcbiAgICAgICAgICAgICAgICBzaG93QWN0aXZlUHJvamVjdChmaXJzdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRvZG9Db250YWluZXIucmVwbGFjZUNoaWxkcmVuKFtdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXBwLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IHByb2plY3QucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5lZGl0XCIpO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWRpdEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4pqZ77iPXCI7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5yZWFkT25seSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBhcHAuZ2V0UHJvamVjdChpZCkuY2hhbmdlSW5mbyh0aXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCLinIVcIjtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UodGl0bGVJbnB1dC52YWx1ZS5sZW5ndGgsIHRpdGxlSW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXBwLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93QWN0aXZlUHJvamVjdChpZCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RDb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKFtdKTtcblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGFwcC5nZXRJbmZvcm1hdGlvbigpLnByb2plY3RzKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdERpdiA9IGNyZWF0ZVByb2plY3QocHJvamVjdC5nZXRJbmZvcm1hdGlvbigpLnRpdGxlLCBwcm9qZWN0LmdldEluZm9ybWF0aW9uKCkuaWQpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0SW5mb3JtYXRpb24oKS5pZCA9PSBhcHAuZ2V0QWN0aXZlUHJvamVjdCgpLmdldEluZm9ybWF0aW9uKCkuaWQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQsIGRvbmUpIHtcbiAgICAgICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgaWQpO1xuXG4gICAgICAgIHRvZG8uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRvbmUtY2hlY2tcIiBpZD1cImRvbmUtY2hlY2tcIiAke2RvbmUgPyBcImNoZWNrZWRcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT1cIiR7ZGVzY3JpcHRpb259XCIgbWF4bGVuZ3RoPVwiMTIwXCIgcmVhZG9ubHk+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAg8J+ThVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiB2YWx1ZT1cIiR7ZHVlRGF0ZX1cIiByZWFkb25seT5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAg4pqg77iPXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCIgdmFsdWU9XCIke3ByaW9yaXR5fVwiIG1pbj1cIjBcIiBtYXg9XCI5XCIgc2l6ZT1cIjRcIlxuICAgICAgICAgICAgICAgICAgICByZWFkb25seT5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPuKame+4jzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPvCfl5HvuI88L2J1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgKTtcblxuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoXCIjZG9uZS1jaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBhcHAuZ2V0QWN0aXZlUHJvamVjdCgpLmdldFRvZG8oaWQpLmNoYW5nZURvbmUoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICAgICAgICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5yZW1vdmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5nZXRBY3RpdmVQcm9qZWN0KCkucmVtb3ZlVG9kbyhpZCk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG8pO1xuXG4gICAgICAgICAgICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gdG9kby5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWUtZGF0ZVwiKTtcbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcmlvcml0eVwiKTtcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZWRpdFwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVkaXRCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIuKame+4j1wiO1xuXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5yZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGFwcC5nZXRBY3RpdmVQcm9qZWN0KCkuZ2V0VG9kbyhpZCkuY2hhbmdlSW5mbyhkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gYGhzbCgwLCAxMDAlLCAkezEwMCAtICgocHJpb3JpdHlJbnB1dC52YWx1ZSkgLyA5ICogNTApfSUpYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCLinIVcIjtcblxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShkZXNjcmlwdGlvbklucHV0LnZhbHVlLmxlbmd0aCwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0b2RvO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVG9kb3MocHJvamVjdElkKSB7XG4gICAgICAgIHRvZG9Db250YWluZXIucmVwbGFjZUNoaWxkcmVuKFtdKTtcblxuICAgICAgICB2YXIgdG9kb3MgPSBhcHAuZ2V0UHJvamVjdChwcm9qZWN0SWQpLmdldEluZm9ybWF0aW9uKCkudG9kb3M7XG5cbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiB0b2Rvcykge1xuICAgICAgICAgICAgbGV0IHRvZG9EaXYgPSBjcmVhdGVUb2RvKHRvZG8uZ2V0SW5mb3JtYXRpb24oKS5kZXNjcmlwdGlvbiwgdG9kby5nZXRJbmZvcm1hdGlvbigpLmR1ZURhdGUsIHRvZG8uZ2V0SW5mb3JtYXRpb24oKS5wcmlvcml0eSwgdG9kby5nZXRJbmZvcm1hdGlvbigpLmlkLCB0b2RvLmdldEluZm9ybWF0aW9uKCkuZG9uZSk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICAgICAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBgaHNsKDAsIDEwMCUsICR7MTAwIC0gKCh0b2RvLmdldEluZm9ybWF0aW9uKCkucHJpb3JpdHkpIC8gOSAqIDUwKX0lKWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb3MsIHJlYWRGcm9tTG9jYWxTdG9yYWdlIH07XG59KSgpO1xuXG5kb20ucmVhZEZyb21Mb2NhbFN0b3JhZ2UoKTtcbmRvbS5yZW5kZXJQcm9qZWN0cygpO1xuZG9tLnJlbmRlclRvZG9zKGFwcC5nZXRBY3RpdmVQcm9qZWN0KCkuZ2V0SW5mb3JtYXRpb24oKS5pZCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9