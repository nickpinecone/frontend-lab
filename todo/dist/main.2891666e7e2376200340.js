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
    margin: 24px;
    padding: 12px;
    font-size: 1.6rem;
    background-color: var(--theme-color);
    border: 2px solid var(--theme-color);
    color: white;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,+BAA+B;IAC/B,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,4BAA4B;IAC5B,UAAU;IACV,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA;IACI,OAAO;IACP,aAAa;IACb,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,wBAAwB;IACxB,SAAS;IACT,4BAA4B;IAC5B,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,8BAA8B;IAC9B,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;AAChB;;;AAGA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,OAAO;IACP,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,OAAO;IACP,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,gBAAgB;;IAEhB,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,OAAO;AACX;;AAEA;;;IAGI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;;;;;IAKI,6BAA6B;IAC7B,SAAS;IACT,kBAAkB;AACtB;;AAEA;;;;IAII,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,oCAAoC;IACpC,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,UAAU;AACd","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 16px;\n    --main-color: hsl(0, 0%, 75%);\n    --second-color: hsl(0, 0%, 80%);\n    --third-color: hsl(0, 0%, 90%);\n    --theme-color: hsl(205, 55%, 20%);\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-flow: column nowrap;\n}\n\nheader {\n    font-size: 2.2rem;\n    font-weight: bold;\n    padding: 24px;\n    text-align: center;\n    background-color: var(--main-color);\n    box-shadow: 0px 2px 6px gray;\n    z-index: 2;\n    color: var(--theme-color);\n    text-shadow: 1px 1px steelblue;\n}\n\n.main-content {\n    flex: 1;\n    display: flex;\n    flex-flow: row nowrap;\n    overflow: hidden;\n}\n\n.projects-sidebar {\n    background-color: var(--second-color);\n    padding: 24px 16px;\n    display: flex;\n    width: 28%;\n    flex-flow: column nowrap;\n    gap: 16px;\n    box-shadow: 2px 0px 6px gray;\n    z-index: 1;\n    overflow: scroll;\n    position: relative;\n    padding-bottom: 112px;\n}\n\n.project-container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 16px;\n}\n\n#sidebar-title {\n    color: var(--theme-color);\n    text-shadow: 1px 1px steelblue;\n    text-align: center;\n    font-size: 1.8rem;\n}\n\n.project {\n    background-color: white;\n    padding: 12px;\n    border-radius: 8px;\n    display: flex;\n    gap: 4px;\n    font-size: 1.6rem;\n}\n\n.project.active {\n    background-color: var(--theme-color);\n}\n\n.project.active input:read-only {\n    color: white;\n}\n\n\n.project,\n.todo {\n    box-shadow: 2px 2px 6px gray;\n}\n\n.project #title {\n    flex: 1;\n    font-size: inherit;\n    padding: 8px;\n}\n\n.project button {\n    padding: 8px;\n    font-size: inherit;\n}\n\n.todos-area {\n    flex: 1;\n    background-color: var(--third-color);\n    padding: 24px 16px;\n    display: flex;\n    flex-flow: column nowrap;\n    overflow: scroll;\n    position: relative;\n    padding-bottom: 112px;\n}\n\n.todo-container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n}\n\n.todo {\n    background-color: white;\n    padding: 0px 16px;\n    border-radius: 8px;\n    font-size: 1.4rem;\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    margin: 0px 16px;\n\n    border-left: 12px solid black;\n}\n\n.todo #done-check {\n    transform: scale(2);\n    margin: 0px 8px;\n}\n\n.todo #description {\n    flex: 1;\n}\n\n.todo input,\n.todo button,\n.todo label {\n    font-size: inherit;\n    padding: 12px;\n}\n\n.todo input:read-only {\n    color: black;\n    border: 0;\n}\n\n.project button,\n.todo button,\n.project input:read-only,\n.todo input:read-only,\n.project input:read-only {\n    background-color: transparent;\n    border: 0;\n    border-radius: 4px;\n}\n\n.project button:hover,\n.todo button:hover,\n.project input:read-only:hover,\n.todo input:read-only:hover {\n    background-color: var(--third-color);\n    color: black;\n}\n\nbutton.add {\n    position: fixed;\n    bottom: 0;\n    margin: 24px;\n    padding: 12px;\n    font-size: 1.6rem;\n    background-color: var(--theme-color);\n    border: 2px solid var(--theme-color);\n    color: white;\n}\n\nbutton.add:hover {\n    background-color: white;\n    color: var(--theme-color);\n}\n\ninput:read-only {\n    border: 0;\n    cursor: default;\n}\n\ninput:read-only:focus {\n    outline: 0;\n}"],"sourceRoot":""}]);
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


const makeTodo = function (_description, _dueDate, _priority, _id) {
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
};

const makeProject = function (_title, _id) {
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
        };
    }

    function changeInfo(newTitle) {
        title = newTitle;
    }

    // For local storage
    function getObject() {
        let array = [];
        for (let todo of todos) {
            array.push(todo.getInformation());
        }

        return {
            title,
            array,
            id,
        };
    }

    return {
        addTodo,
        getInformation,
        getTodo,
        changeInfo,
        removeTodo,
        getObject,
    };
};

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
        if (!window.localStorage.projects) {
            addProject("Default Project");
            activeProject.addTodo("Default Todo", "", 0);
        }
    }

    function getInformation() {
        return {
            projects,
            activeProject,
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
        };
    }

    return {
        addProject,
        getInformation,
        getProject,
        removeProject,
        getActiveProject,
        getObject,
        setActiveProject,
        saveToLocalStorage,
    };
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
                    app.getActiveProject().addTodo(
                        todo.description,
                        todo.dueDate,
                        todo.priority,
                        todo.done
                    );
                }
            }
        }
    }

    function focusItem(input, focusStart, focusEnd) {
        input.focus();
        focusStart = focusStart == -1 ? input.value.length : focusStart;
        focusEnd = focusEnd == -1 ? input.value.length : focusEnd;
        input.setSelectionRange(focusStart, focusEnd);
    }

    function editItem(element, inputQuery, editQuery, focusStart, focusEnd) {
        let input = element.querySelector(inputQuery);
        let editButton = element.querySelector(editQuery);
        editButton.click();
        focusItem(input, focusStart, focusEnd);
    }

    function bindButtons() {
        addProjectButton.addEventListener("click", () => {
            app.addProject("None");
            renderProjects();
            renderTodos(app.getActiveProject().getInformation().id);

            let lastChild =
                projectContainer.children[projectContainer.children.length - 1];

            editItem(lastChild, "input", "button.edit", 0, -1);

            app.saveToLocalStorage();
        });

        addTodoButton.addEventListener("click", () => {
            if (projectContainer.childElementCount > 0) {
                app.getActiveProject().addTodo("None", "", 0, false);
                renderTodos(app.getActiveProject().getInformation().id);

                let lastChild =
                    todoContainer.children[todoContainer.children.length - 1];

                editItem(lastChild, "input#description", "button.edit", 0, -1);

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

            if (
                project.classList.contains("active") &&
                projectContainer.childElementCount > 0
            ) {
                let firstId =
                    projectContainer.children[0].getAttribute("data-id");

                renderTodos(firstId);
                app.setActiveProject(firstId);
                showActiveProject(firstId);
            } else if (projectContainer.childElementCount <= 0) {
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
            } else {
                editButton.classList.add("active");
                editButton.textContent = "✅";
                titleInput.readOnly = false;
                focusItem(titleInput, -1, -1);
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
            let projectDiv = createProject(
                project.getInformation().title,
                project.getInformation().id
            );
            projectContainer.appendChild(projectDiv);

            if (
                project.getInformation().id ==
                app.getActiveProject().getInformation().id
            ) {
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
            <input type="checkbox" name="done-check" id="done-check" ${
                done ? "checked" : ""
            }>
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

                app.getActiveProject()
                    .getTodo(id)
                    .changeInfo(
                        descriptionInput.value,
                        dateInput.value,
                        priorityInput.value
                    );
                todo.style.borderLeftColor = getPriorityColor(
                    priorityInput.value
                );
            } else {
                editButton.classList.add("active");
                editButton.textContent = "✅";

                descriptionInput.readOnly = false;
                dateInput.readOnly = false;
                priorityInput.readOnly = false;

                focusItem(descriptionInput, -1, -1);
            }

            app.saveToLocalStorage();
        });

        return todo;
    }

    function getPriorityColor(priorityLevel) {
        return `hsl(0, 100%, ${100 - (priorityLevel / 9) * 50}%)`;
    }

    function renderTodos(projectId) {
        todoContainer.replaceChildren([]);

        var todos = app.getProject(projectId).getInformation().todos;

        for (let todo of todos) {
            let todoDiv = createTodo(
                todo.getInformation().description,
                todo.getInformation().dueDate,
                todo.getInformation().priority,
                todo.getInformation().id,
                todo.getInformation().done
            );
            todoContainer.appendChild(todoDiv);
            todoDiv.style.borderLeftColor = getPriorityColor(
                todo.getInformation().priority
            );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0VBQWdFLFlBQVk7QUFDNUU7QUFDQTtBQUNBLDBFQUEwRSxRQUFRO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxTQUFTO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtLW1haW4tY29sb3I6IGhzbCgwLCAwJSwgNzUlKTtcbiAgICAtLXNlY29uZC1jb2xvcjogaHNsKDAsIDAlLCA4MCUpO1xuICAgIC0tdGhpcmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcbiAgICAtLXRoZW1lLWNvbG9yOiBoc2woMjA1LCA1NSUsIDIwJSk7XG59XG5cbmJvZHkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IGdyYXk7XG4gICAgei1pbmRleDogMjtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHN0ZWVsYmx1ZTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvamVjdHMtc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMjglO1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBnYXA6IDE2cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDBweCA2cHggZ3JheTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMTJweDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBnYXA6IDE2cHg7XG59XG5cbiNzaWRlYmFyLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHN0ZWVsYmx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4ucHJvamVjdC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbn1cblxuLnByb2plY3QuYWN0aXZlIGlucHV0OnJlYWQtb25seSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi5wcm9qZWN0LFxuLnRvZG8ge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IGdyYXk7XG59XG5cbi5wcm9qZWN0ICN0aXRsZSB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4ucHJvamVjdCBidXR0b24ge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi50b2Rvcy1hcmVhIHtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDExMnB4O1xufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGdhcDogMjBweDtcbn1cblxuLnRvZG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHggMTZweDtcblxuICAgIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4udG9kbyAjZG9uZS1jaGVjayB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBtYXJnaW46IDBweCA4cHg7XG59XG5cbi50b2RvICNkZXNjcmlwdGlvbiB7XG4gICAgZmxleDogMTtcbn1cblxuLnRvZG8gaW5wdXQsXG4udG9kbyBidXR0b24sXG4udG9kbyBsYWJlbCB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDEycHg7XG59XG5cbi50b2RvIGlucHV0OnJlYWQtb25seSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLnByb2plY3QgYnV0dG9uLFxuLnRvZG8gYnV0dG9uLFxuLnByb2plY3QgaW5wdXQ6cmVhZC1vbmx5LFxuLnRvZG8gaW5wdXQ6cmVhZC1vbmx5LFxuLnByb2plY3QgaW5wdXQ6cmVhZC1vbmx5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucHJvamVjdCBidXR0b246aG92ZXIsXG4udG9kbyBidXR0b246aG92ZXIsXG4ucHJvamVjdCBpbnB1dDpyZWFkLW9ubHk6aG92ZXIsXG4udG9kbyBpbnB1dDpyZWFkLW9ubHk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbi5hZGQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiAyNHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbi5hZGQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG59XG5cbmlucHV0OnJlYWQtb25seSB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuaW5wdXQ6cmVhZC1vbmx5OmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsU0FBUztJQUNULDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBQ1IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0lBRWhCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7Ozs7O0lBS0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAtLW1haW4tY29sb3I6IGhzbCgwLCAwJSwgNzUlKTtcXG4gICAgLS1zZWNvbmQtY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXG4gICAgLS10aGlyZC1jb2xvcjogaHNsKDAsIDAlLCA5MCUpO1xcbiAgICAtLXRoZW1lLWNvbG9yOiBoc2woMjA1LCA1NSUsIDIwJSk7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCBncmF5O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBzdGVlbGJsdWU7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjglO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCA2cHggZ3JheTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEycHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHN0ZWVsYmx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5wcm9qZWN0LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QuYWN0aXZlIGlucHV0OnJlYWQtb25seSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLnByb2plY3QsXFxuLnRvZG8ge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCBncmF5O1xcbn1cXG5cXG4ucHJvamVjdCAjdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi50b2Rvcy1hcmVhIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEycHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDE2cHg7XFxuXFxuICAgIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG9kbyAjZG9uZS1jaGVjayB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICAgIG1hcmdpbjogMHB4IDhweDtcXG59XFxuXFxuLnRvZG8gI2Rlc2NyaXB0aW9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRvZG8gaW5wdXQsXFxuLnRvZG8gYnV0dG9uLFxcbi50b2RvIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udG9kbyBpbnB1dDpyZWFkLW9ubHkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uLFxcbi50b2RvIGJ1dHRvbixcXG4ucHJvamVjdCBpbnB1dDpyZWFkLW9ubHksXFxuLnRvZG8gaW5wdXQ6cmVhZC1vbmx5LFxcbi5wcm9qZWN0IGlucHV0OnJlYWQtb25seSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uOmhvdmVyLFxcbi50b2RvIGJ1dHRvbjpob3ZlcixcXG4ucHJvamVjdCBpbnB1dDpyZWFkLW9ubHk6aG92ZXIsXFxuLnRvZG8gaW5wdXQ6cmVhZC1vbmx5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5hZGQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uLmFkZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xcbn1cXG5cXG5pbnB1dDpyZWFkLW9ubHkge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaW5wdXQ6cmVhZC1vbmx5OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IG1ha2VUb2RvID0gZnVuY3Rpb24gKF9kZXNjcmlwdGlvbiwgX2R1ZURhdGUsIF9wcmlvcml0eSwgX2lkKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gX2Rlc2NyaXB0aW9uO1xuICAgIGxldCBkdWVEYXRlID0gX2R1ZURhdGU7XG4gICAgbGV0IHByaW9yaXR5ID0gX3ByaW9yaXR5O1xuICAgIGxldCBpZCA9IF9pZDtcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0SW5mb3JtYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VJbmZvKG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEb25lKHZhbHVlKSB7XG4gICAgICAgIGRvbmUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRJbmZvcm1hdGlvbiwgY2hhbmdlSW5mbywgY2hhbmdlRG9uZSB9O1xufTtcblxuY29uc3QgbWFrZVByb2plY3QgPSBmdW5jdGlvbiAoX3RpdGxlLCBfaWQpIHtcbiAgICBsZXQgdGl0bGUgPSBfdGl0bGU7XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgbGV0IGlkID0gX2lkO1xuXG4gICAgZnVuY3Rpb24gZ2V0TGFzdFRvZG8oKSB7XG4gICAgICAgIHJldHVybiB0b2Rvc1t0b2Rvcy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2RvKGlkKSB7XG4gICAgICAgIGZvciAobGV0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgICAgICAgIGlmICh0b2RvLmdldEluZm9ybWF0aW9uKCkuaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8oZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lKSB7XG4gICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgIGlmICh0b2Rvcy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgaWQgPSBnZXRMYXN0VG9kbygpLmdldEluZm9ybWF0aW9uKCkuaWQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvZG8gPSBtYWtlVG9kbyhkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkKTtcbiAgICAgICAgdG9kby5jaGFuZ2VEb25lKGRvbmUpO1xuXG4gICAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyhpZCkge1xuICAgICAgICBsZXQgdG9kbyA9IGdldFRvZG8oaWQpO1xuICAgICAgICBsZXQgaW5kZXggPSB0b2Rvcy5pbmRleE9mKHRvZG8pO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5mb3JtYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHRvZG9zLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlSW5mbyhuZXdUaXRsZSkge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIC8vIEZvciBsb2NhbCBzdG9yYWdlXG4gICAgZnVuY3Rpb24gZ2V0T2JqZWN0KCkge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiB0b2Rvcykge1xuICAgICAgICAgICAgYXJyYXkucHVzaCh0b2RvLmdldEluZm9ybWF0aW9uKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBnZXRJbmZvcm1hdGlvbixcbiAgICAgICAgZ2V0VG9kbyxcbiAgICAgICAgY2hhbmdlSW5mbyxcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICAgICAgZ2V0T2JqZWN0LFxuICAgIH07XG59O1xuXG5jb25zdCBhcHAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgIGxldCBhY3RpdmVQcm9qZWN0O1xuXG4gICAgaW5pdCgpO1xuXG4gICAgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkoZ2V0T2JqZWN0KCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExhc3RQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdChpZCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5nZXRJbmZvcm1hdGlvbigpLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgaWQgPSBnZXRMYXN0UHJvamVjdCgpLmdldEluZm9ybWF0aW9uKCkuaWQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2plY3QgPSBtYWtlUHJvamVjdCh0aXRsZSwgaWQpO1xuXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChpZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpZCkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGdldFByb2plY3QoaWQpO1xuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdC5hZGRUb2RvKFwiRGVmYXVsdCBUb2RvXCIsIFwiXCIsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5mb3JtYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0SW5mb3JtYXRpb24oKS5pZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZvciBsb2NhbCBzdG9yYWdlXG4gICAgZnVuY3Rpb24gZ2V0T2JqZWN0KCkge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHByb2plY3QuZ2V0T2JqZWN0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFycmF5LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGdldEluZm9ybWF0aW9uLFxuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgICAgICBnZXRPYmplY3QsXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QsXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgZG9tID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gICAgbGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xuICAgIGxldCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGQudG9kb1wiKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkLnByb2plY3RcIik7XG5cbiAgICBiaW5kQnV0dG9ucygpO1xuXG4gICAgZnVuY3Rpb24gcmVhZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5wcm9qZWN0cyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgZGF0YS5hcnJheSkge1xuICAgICAgICAgICAgICAgIGFwcC5hZGRQcm9qZWN0KHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC5hcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBhcHAuZ2V0QWN0aXZlUHJvamVjdCgpLmFkZFRvZG8oXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5kdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uZG9uZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvY3VzSXRlbShpbnB1dCwgZm9jdXNTdGFydCwgZm9jdXNFbmQpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgZm9jdXNTdGFydCA9IGZvY3VzU3RhcnQgPT0gLTEgPyBpbnB1dC52YWx1ZS5sZW5ndGggOiBmb2N1c1N0YXJ0O1xuICAgICAgICBmb2N1c0VuZCA9IGZvY3VzRW5kID09IC0xID8gaW5wdXQudmFsdWUubGVuZ3RoIDogZm9jdXNFbmQ7XG4gICAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKGZvY3VzU3RhcnQsIGZvY3VzRW5kKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0SXRlbShlbGVtZW50LCBpbnB1dFF1ZXJ5LCBlZGl0UXVlcnksIGZvY3VzU3RhcnQsIGZvY3VzRW5kKSB7XG4gICAgICAgIGxldCBpbnB1dCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dFF1ZXJ5KTtcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoZWRpdFF1ZXJ5KTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGljaygpO1xuICAgICAgICBmb2N1c0l0ZW0oaW5wdXQsIGZvY3VzU3RhcnQsIGZvY3VzRW5kKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kQnV0dG9ucygpIHtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgYXBwLmFkZFByb2plY3QoXCJOb25lXCIpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgICAgIHJlbmRlclRvZG9zKGFwcC5nZXRBY3RpdmVQcm9qZWN0KCkuZ2V0SW5mb3JtYXRpb24oKS5pZCk7XG5cbiAgICAgICAgICAgIGxldCBsYXN0Q2hpbGQgPVxuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2hpbGRyZW5bcHJvamVjdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgZWRpdEl0ZW0obGFzdENoaWxkLCBcImlucHV0XCIsIFwiYnV0dG9uLmVkaXRcIiwgMCwgLTEpO1xuXG4gICAgICAgICAgICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGFwcC5nZXRBY3RpdmVQcm9qZWN0KCkuYWRkVG9kbyhcIk5vbmVcIiwgXCJcIiwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRvZG9zKGFwcC5nZXRBY3RpdmVQcm9qZWN0KCkuZ2V0SW5mb3JtYXRpb24oKS5pZCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgbGFzdENoaWxkID1cbiAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5jaGlsZHJlblt0b2RvQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgZWRpdEl0ZW0obGFzdENoaWxkLCBcImlucHV0I2Rlc2NyaXB0aW9uXCIsIFwiYnV0dG9uLmVkaXRcIiwgMCwgLTEpO1xuXG4gICAgICAgICAgICAgICAgYXBwLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBpZCkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpZCk7XG5cbiAgICAgICAgcHJvamVjdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0aXRsZX1cIiBpZD1cInRpdGxlXCIgcmVhZG9ubHk+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPuKame+4jzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPvCfl5HvuI88L2J1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IHByb2plY3QucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJUb2RvcyhpZCk7XG4gICAgICAgICAgICBhcHAuc2V0QWN0aXZlUHJvamVjdChpZCk7XG4gICAgICAgICAgICBzaG93QWN0aXZlUHJvamVjdChpZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3QucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5yZW1vdmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5yZW1vdmVQcm9qZWN0KGlkKTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdCk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJlxuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPiAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3RJZCA9XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICAgICAgICAgIHJlbmRlclRvZG9zKGZpcnN0SWQpO1xuICAgICAgICAgICAgICAgIGFwcC5zZXRBY3RpdmVQcm9qZWN0KGZpcnN0SWQpO1xuICAgICAgICAgICAgICAgIHNob3dBY3RpdmVQcm9qZWN0KGZpcnN0SWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0Q29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihbXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFwcC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZWRpdFwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVkaXRCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIuKame+4j1wiO1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQucmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgYXBwLmdldFByb2plY3QoaWQpLmNoYW5nZUluZm8odGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCLinIVcIjtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9jdXNJdGVtKHRpdGxlSW5wdXQsIC0xLCAtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFwcC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0FjdGl2ZVByb2plY3QoaWQpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oW10pO1xuXG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgYXBwLmdldEluZm9ybWF0aW9uKCkucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RGl2ID0gY3JlYXRlUHJvamVjdChcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldEluZm9ybWF0aW9uKCkudGl0bGUsXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXRJbmZvcm1hdGlvbigpLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0SW5mb3JtYXRpb24oKS5pZCA9PVxuICAgICAgICAgICAgICAgIGFwcC5nZXRBY3RpdmVQcm9qZWN0KCkuZ2V0SW5mb3JtYXRpb24oKS5pZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kbyhkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkLCBkb25lKSB7XG4gICAgICAgIGxldCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGlkKTtcblxuICAgICAgICB0b2RvLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25lLWNoZWNrXCIgaWQ9XCJkb25lLWNoZWNrXCIgJHtcbiAgICAgICAgICAgICAgICBkb25lID8gXCJjaGVja2VkXCIgOiBcIlwiXG4gICAgICAgICAgICB9PlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT1cIiR7ZGVzY3JpcHRpb259XCIgbWF4bGVuZ3RoPVwiMTIwXCIgcmVhZG9ubHk+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAg8J+ThVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiB2YWx1ZT1cIiR7ZHVlRGF0ZX1cIiByZWFkb25seT5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAg4pqg77iPXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCIgdmFsdWU9XCIke3ByaW9yaXR5fVwiIG1pbj1cIjBcIiBtYXg9XCI5XCIgc2l6ZT1cIjRcIlxuICAgICAgICAgICAgICAgICAgICByZWFkb25seT5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPuKame+4jzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPvCfl5HvuI88L2J1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgKTtcblxuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoXCIjZG9uZS1jaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBhcHAuZ2V0QWN0aXZlUHJvamVjdCgpLmdldFRvZG8oaWQpLmNoYW5nZURvbmUoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICAgICAgICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5yZW1vdmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5nZXRBY3RpdmVQcm9qZWN0KCkucmVtb3ZlVG9kbyhpZCk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG8pO1xuXG4gICAgICAgICAgICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gdG9kby5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWUtZGF0ZVwiKTtcbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcmlvcml0eVwiKTtcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZWRpdFwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVkaXRCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIuKame+4j1wiO1xuXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5yZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGFwcC5nZXRBY3RpdmVQcm9qZWN0KClcbiAgICAgICAgICAgICAgICAgICAgLmdldFRvZG8oaWQpXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VJbmZvKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0b2RvLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGdldFByaW9yaXR5Q29sb3IoXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4pyFXCI7XG5cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5yZWFkT25seSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9jdXNJdGVtKGRlc2NyaXB0aW9uSW5wdXQsIC0xLCAtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFwcC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdHlDb2xvcihwcmlvcml0eUxldmVsKSB7XG4gICAgICAgIHJldHVybiBgaHNsKDAsIDEwMCUsICR7MTAwIC0gKHByaW9yaXR5TGV2ZWwgLyA5KSAqIDUwfSUpYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUb2Rvcyhwcm9qZWN0SWQpIHtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oW10pO1xuXG4gICAgICAgIHZhciB0b2RvcyA9IGFwcC5nZXRQcm9qZWN0KHByb2plY3RJZCkuZ2V0SW5mb3JtYXRpb24oKS50b2RvcztcblxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICAgICAgICBsZXQgdG9kb0RpdiA9IGNyZWF0ZVRvZG8oXG4gICAgICAgICAgICAgICAgdG9kby5nZXRJbmZvcm1hdGlvbigpLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHRvZG8uZ2V0SW5mb3JtYXRpb24oKS5kdWVEYXRlLFxuICAgICAgICAgICAgICAgIHRvZG8uZ2V0SW5mb3JtYXRpb24oKS5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICB0b2RvLmdldEluZm9ybWF0aW9uKCkuaWQsXG4gICAgICAgICAgICAgICAgdG9kby5nZXRJbmZvcm1hdGlvbigpLmRvbmVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICAgICAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBnZXRQcmlvcml0eUNvbG9yKFxuICAgICAgICAgICAgICAgIHRvZG8uZ2V0SW5mb3JtYXRpb24oKS5wcmlvcml0eVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlclByb2plY3RzLCByZW5kZXJUb2RvcywgcmVhZEZyb21Mb2NhbFN0b3JhZ2UgfTtcbn0pKCk7XG5cbmRvbS5yZWFkRnJvbUxvY2FsU3RvcmFnZSgpO1xuZG9tLnJlbmRlclByb2plY3RzKCk7XG5kb20ucmVuZGVyVG9kb3MoYXBwLmdldEFjdGl2ZVByb2plY3QoKS5nZXRJbmZvcm1hdGlvbigpLmlkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==