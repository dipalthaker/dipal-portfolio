/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.slide {
  min-width: 100%;
  padding: 3rem 2rem;
  background: linear-gradient(180deg, rgba(124, 58, 237, 0.14), rgba(86, 182, 194, 0.12));
}

.slide h3 {
  margin: 0 0 0.5rem;
}

.slide p {
  margin: 0;
  color: #94a3b8;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.35);
  border: 0;
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.carousel-control.prev {
  left: 0.75rem;
}

.carousel-control.next {
  right: 0.75rem;
}

.parallax {
  background-image: url("https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.parallax .parallax-inner {
  background: rgba(0, 0, 0, 0.35);
  min-height: 60vh;
}

.parallax .overlay {
  font-size: clamp(1.75rem, 3vw + 1rem, 3rem);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 16px;
}

.card h3 {
  margin-top: 0;
}

.card p {
  color: #94a3b8;
}

.video video {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.social {
  display: flex;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
}

.social a {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #e9eef5;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-to-top {
  color: #e9eef5;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.06);
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal[aria-hidden=false] {
  display: flex;
}

.modal-dialog {
  width: min(560px, 96vw);
  background: #0e141b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1rem;
  position: relative;
}

.modal-close {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: none;
  border: 0;
  color: #e9eef5;
  font-size: 1.25rem;
  cursor: pointer;
}

@media (max-width: 1280px) {
  .about .columns {
    -moz-column-count: 2;
         column-count: 2;
  }
}
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .navbar {
    height: 56px;
  }

  .nav-toggle {
    display: inline-grid;
  }

  .nav-links {
    position: absolute;
    right: 1rem;
    top: calc(100% + .5rem);
    background: #0e141b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    padding: 0.5rem;
    display: none;
    flex-direction: column;
  }

  .nav-links.open {
    display: flex;
  }

  .about .columns {
    -moz-column-count: 1;
         column-count: 1;
  }

  .cards {
    grid-template-columns: 1fr;
  }
}
:focus {
  outline: 3px solid #56b6c2;
  outline-offset: 2px;
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"AAYA;EAAS,eAAA;EAAiB,kBAAA;EAAoB,uFAAA;AAR9C;;AASA;EAAY,kBAAA;AALZ;;AAMA;EAAW,SAAA;EAAW,cAXd;AAUR;;AAEA;EAAoB,kBAAA;EAAoB,QAAA;EAAU,2BAAA;EAA6B,+BAAA;EAA6B,SAAA;EAAW,YAAA;EAAc,WAAA;EAAa,YAAA;EAAc,oBAAA;EAAsB,aAAA;EAAe,mBAAA;EAAqB,eAAA;AAa1N;;AAZA;EAAyB,aAAA;AAgBzB;;AAfA;EAAyB,cAAA;AAmBzB;;AAfA;EAAY,sHAAA;EAAwH,sBAAA;EAAwB,2BAAA;EAA6B,4BAAA;EAA8B,kBAAA;AAuBvN;;AAtBA;EAA4B,+BAAA;EAA6B,gBAAA;AA2BzD;;AA1BA;EAAqB,2CAAA;AA8BrB;;AA1BA;EAAS,aAAA;EAAe,qCAAA;EAAuC,SAAA;AAgC/D;;AA/BA;EAAQ,yFAAA;EAAmF,2CAAA;EAAyC,aAAA;EAAe,mBAAA;AAsCnJ;;AArCA;EAAW,aAAA;AAyCX;;AAxCA;EAAU,cA3BF;AAuER;;AAxCA;EAAe,mBAAA;EAAqB,2CAAA;AA6CpC;;AAzCA;EAAU,aAAA;EAAe,YAAA;EAAa,gBAAA;EAAkB,UAAA;AAgDxD;;AA/CA;EAAY,oBAAA;EAAsB,mBAAA;EAAqB,WAAA;EAAa,YAAA;EAAc,oBAAA;EAAsB,qCAAA;EAAmC,cArCrI;EAqCkJ,qBAAA;EAAuB,0CAAA;AA2D/K;;AAvDA;EAAU,+CAAA;AA2DV;;AA1DA;EAAqB,aAAA;EAAe,mBAAA;EAAqB,8BAAA;AAgEzD;;AA/DA;EAAe,cA3CT;EA2CsB,qBAAA;EAAuB,qCAAA;EAAmC,eAAA;EAAgB,qBAAA;AAuEtG;;AAnEA;EAAS,eAAA;EAAiB,QAAA;EAAU,+BAAA;EAA6B,aAAA;EAAe,mBAAA;EAAqB,uBAAA;EAAyB,aAAA;AA6E9H;;AA5EA;EAA8B,aAAA;AAgF9B;;AA/EA;EAAgB,uBAAA;EAAyB,mBAAA;EAAqB,2CAAA;EAAyC,mBAAA;EAAqB,6BAAA;EAA+B,kBAAA;AAwF3J;;AAvFA;EAAe,kBAAA;EAAoB,aAAA;EAAc,WAAA;EAAY,gBAAA;EAAkB,SAAA;EAAW,cAlDpF;EAkDiG,kBAAA;EAAoB,eAAA;AAkG3H;;AA9FA;EACA;IAAkB,oBAAA;SAAA,eAAA;EAkGhB;AACF;AAjGA;EACA;IAAS,8BAAA;EAoGP;AACF;AAnGA;EACA;IAAU,YAvDA;EA6JR;;EArGF;IAAc,oBAAA;EAyGZ;;EAxGF;IAAa,kBAAA;IAAoB,WAAA;IAAa,uBAAA;IAAyB,mBAAA;IAAqB,2CAAA;IAAyC,sBAAA;IAAuB,eAAA;IAAgB,aAAA;IAAe,sBAAA;EAoHzL;;EAnHF;IAAkB,aAAA;EAuHhB;;EAtHF;IAAkB,oBAAA;SAAA,eAAA;EA0HhB;;EAzHF;IAAS,0BAAA;EA6HP;AACF;AAzHA;EAAS,0BAAA;EAA4B,mBAAA;AA6HrC","sourcesContent":["// Variables\n$bg: #0b0f14;\n$ink: #e9eef5;\n$muted: #94a3b8;\n$accent: #56b6c2;\n$accent-2: #7c3aed;\n$maxw: 1100px;\n$navH-lg: 84px;\n$navH-sm: 56px;\n\n\n// SCSS features: variables, mixins, nesting, functions\n.slide { min-width: 100%; padding: 3rem 2rem; background: linear-gradient(180deg, rgba(124,58,237,.14), rgba(86,182,194,.12)); }\n.slide h3 { margin: 0 0 .5rem; }\n.slide p { margin: 0; color: $muted; }\n.carousel-control { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,.35); border: 0; color: white; width: 44px; height: 44px; border-radius: 999px; display: grid; place-items: center; cursor: pointer; }\n.carousel-control.prev { left: .75rem; }\n.carousel-control.next { right: .75rem; }\n\n\n// PARALLAX – fixed background (requirement #10)\n.parallax { background-image: url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop'); background-size: cover; background-position: center; background-attachment: fixed; position: relative; }\n.parallax .parallax-inner { background: rgba(0,0,0,.35); min-height: 60vh; }\n.parallax .overlay { font-size: clamp(1.75rem, 3vw + 1rem, 3rem); }\n\n\n// EXPERIENCE – cards\n.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }\n.card { background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02)); border: 1px solid rgba(255,255,255,.08); padding: 1rem; border-radius: 16px; }\n.card h3 { margin-top: 0; }\n.card p { color: $muted; }\n\n\n// VIDEO stripe (simple)\n.video video { border-radius: 16px; border: 1px solid rgba(255,255,255,.08); }\n\n\n// CONTACT – social icons (requirements #14, #15)\n.social { display: flex; gap: .75rem; list-style: none; padding: 0; }\n.social a { display: inline-grid; place-items: center; width: 44px; height: 44px; border-radius: 999px; background: rgba(255,255,255,.06); color: $ink; text-decoration: none; border: 1px solid rgba(255,255,255,.1); }\n\n\n// FOOTER\n.footer { border-top: 1px solid rgba(255,255,255,.08); }\n.footer .container { display: flex; align-items: center; justify-content: space-between; }\n.back-to-top { color: $ink; text-decoration: none; background: rgba(255,255,255,.06); padding: .5rem; border-radius: .5rem; }\n\n\n// MODAL (requirement #11)\n.modal { position: fixed; inset: 0; background: rgba(0,0,0,.55); display: none; align-items: center; justify-content: center; padding: 1rem; }\n.modal[aria-hidden=\"false\"] { display: flex; }\n.modal-dialog { width: min(560px, 96vw); background: #0e141b; border: 1px solid rgba(255,255,255,.08); border-radius: 16px; padding: 1.25rem 1.25rem 1rem; position: relative; }\n.modal-close { position: absolute; right: .5rem; top: .5rem; background: none; border: 0; color: $ink; font-size: 1.25rem; cursor: pointer; }\n\n\n// RESPONSIVE breakpoints (requirement #9)\n@media (max-width: 1280px) {\n.about .columns { column-count: 2; }\n}\n@media (max-width: 1024px) {\n.cards { grid-template-columns: 1fr 1fr; }\n}\n@media (max-width: 768px) {\n.navbar { height: $navH-sm; }\n.nav-toggle { display: inline-grid; }\n.nav-links { position: absolute; right: 1rem; top: calc(100% + .5rem); background: #0e141b; border: 1px solid rgba(255,255,255,.08); border-radius: .75rem; padding: .5rem; display: none; flex-direction: column; }\n.nav-links.open { display: flex; }\n.about .columns { column-count: 1; }\n.cards { grid-template-columns: 1fr; }\n}\n\n\n// Accessibility focus styles\n:focus { outline: 3px solid $accent; outline-offset: 2px; }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

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

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<div class=\"cards\">\n<article class=\"card\">\n<h3>Deloitte USI — Analyst</h3>\n<p>Data analysis, test planning, and backend investigations for the State of Wyoming project.\n</p>\n<button class=\"btn-sm\" data-open-modal=\"#expModal\">More</button>\n</article>\n<article class=\"card\">\n<h3>Reliance Jio — Quality Analyst</h3>\n<p>Automation testing and QA for consumer‑facing products at scale.</p>\n</article>\n<article class=\"card\">\n<h3>Levyne Tech — SWE Intern</h3>\n<p>Built features across the stack; strengthened JS/Java and CI habits.</p>\n</article>\n</div>\n</div>\n</section>\n\n\n<!-- VIDEO (requirement #12) -->\n<section id=\"video\" class=\"stripe video\" aria-label=\"Video\">\n<div class=\"container\">\n<h2>Showreel</h2>\n<video controls preload=\"metadata\" poster=\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\" width=\"100%\">\n<source src=\"https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4\" type=\"video/mp4\">\nYour browser does not support the HTML5 video tag.\n</video>\n</div>\n</section>\n\n\n<!-- CONTACT + SOCIAL (requirements #14 and #15) -->\n<section id=\"contact\" class=\"stripe contact\" aria-label=\"Contact\">\n<div class=\"container\">\n<h2>Contact</h2>\n<p>Let’s connect!</p>\n<ul class=\"social\">\n<li><a href=\"mailto:dthaker2@illinois.edu\" aria-label=\"Email\"><i class=\"fa-solid fa-envelope\"></i></a></li>\n<li><a href=\"https://github.com/dipalthaker\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub\"><i class=\"fa-brands fa-github\"></i></a></li>\n<li><a href=\"https://www.linkedin.com/in/dipalthaker\" target=\"_blank\" rel=\"noopener\" aria-label=\"LinkedIn\"><i class=\"fa-brands fa-linkedin\"></i></a></li>\n<li><a href=\"#\" aria-label=\"Twitter\"><i class=\"fa-brands fa-x-twitter\"></i></a></li>\n</ul>\n</div>\n</section>\n\n\n<!-- FOOTER -->\n<footer class=\"stripe footer\" aria-label=\"Footer\">\n<div class=\"container\">\n<p>© <span id=\"year\"></span> Dipal Thaker • Built for MP1</p>\n<a href=\"#top\" class=\"back-to-top\" aria-label=\"Back to top\"><i class=\"fa-solid fa-arrow-up\"></i></a>\n</div>\n</footer>\n\n\n<!-- MODALS (requirement #11) -->\n<div id=\"introModal\" class=\"modal\" aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"introTitle\">\n<div class=\"modal-dialog\" role=\"document\">\n<button class=\"modal-close\" data-close-modal aria-label=\"Close modal\"><i class=\"fa-solid fa-xmark\"></i></button>\n<h3 id=\"introTitle\">Quick Intro</h3>\n<p>Thanks for visiting! This site demonstrates the required MP1 features with accessible, library‑free\nHTML, SCSS, and vanilla JS.</p>\n</div>\n</div>\n\n\n<div id=\"expModal\" class=\"modal\" aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"expTitle\">\n<div class=\"modal-dialog\" role=\"document\">\n<button class=\"modal-close\" data-close-modal aria-label=\"Close modal\"><i class=\"fa-solid fa-xmark\"></i></button>\n<h3 id=\"expTitle\">Deloitte Analyst – Details</h3>\n<ul>\n<li>Income checkbox analysis; test case design</li>\n<li>Database/code analysis; issue triage</li>\n<li>Cross‑functional collaboration and documentation</li>\n</ul>\n</div>\n</div>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ===========================
// Footer year
// ===========================
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear(); // ===========================
// Mobile nav toggle
// ===========================

var navToggle = document.querySelector('.nav-toggle');
var navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    var expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
} // ===========================
// Navbar resize + scroll progress bar
// ===========================


var navbar = document.querySelector('.navbar');
var progressBar = document.querySelector('.scroll-indicator .bar');
var shrinkThreshold = 24;
window.addEventListener('scroll', function () {
  if (!navbar) return;
  var y = window.scrollY || window.pageYOffset; // Shrink navbar

  navbar.classList.toggle('shrink', y > shrinkThreshold); // Progress bar

  if (progressBar) {
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var pct = scrollable > 0 ? y / scrollable * 100 : 0;
    progressBar.style.width = "".concat(pct, "%");
  }
}); // ===========================
// Section nav highlight
// ===========================

var sections = _toConsumableArray(document.querySelectorAll('section[id]'));

var navAnchors = new Map(_toConsumableArray(document.querySelectorAll('a[data-nav]')).map(function (a) {
  return [a.getAttribute('href').slice(1), a];
}));
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    var id = entry.target.getAttribute('id');
    var link = navAnchors.get(id);
    if (!link) return;

    if (entry.isIntersecting) {
      navAnchors.forEach(function (a) {
        return a.removeAttribute('aria-current');
      });
      link.setAttribute('aria-current', 'true');
    }
  });
}, {
  rootMargin: "-70px 0px -70% 0px",
  threshold: 0.1
});
sections.forEach(function (sec) {
  return observer.observe(sec);
}); // Highlight last nav item at bottom of page

window.addEventListener('scroll', function () {
  var atBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

  if (atBottom) {
    navAnchors.forEach(function (a) {
      return a.removeAttribute('aria-current');
    });
    var last = document.querySelector('a[href="#contact"][data-nav]');
    if (last) last.setAttribute('aria-current', 'true');
  }
}); // ===========================
// Carousel
// ===========================

(function () {
  var root = document.querySelector('[data-carousel]');
  if (!root) return;
  var track = root.querySelector('[data-carousel-track]');

  var slides = _toConsumableArray(root.querySelectorAll('.slide'));

  var prev = root.querySelector('[data-carousel-prev]');
  var next = root.querySelector('[data-carousel-next]');
  var index = 0;

  function update() {
    track.style.transform = "translateX(-".concat(index * 100, "%)");
  }

  prev === null || prev === void 0 ? void 0 : prev.addEventListener('click', function () {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
  next === null || next === void 0 ? void 0 : next.addEventListener('click', function () {
    index = (index + 1) % slides.length;
    update();
  }); // Optional swipe support

  var startX = 0;
  var dx = 0;
  track.addEventListener('pointerdown', function (e) {
    startX = e.clientX;
    dx = 0;
    track.setPointerCapture(e.pointerId);
  });
  track.addEventListener('pointermove', function (e) {
    if (startX) dx = e.clientX - startX;
  });
  track.addEventListener('pointerup', function () {
    if (Math.abs(dx) > 60) {
      index = dx < 0 ? (index + 1) % slides.length : (index - 1 + slides.length) % slides.length;
    }

    update();
    startX = 0;
    dx = 0;
  });
})(); // ===========================
// Modals
// ===========================


function openModal(sel) {
  var m = document.querySelector(sel);
  if (!m) return;
  m.setAttribute('aria-hidden', 'false');
  var dialog = m.querySelector('.modal-dialog');
  dialog === null || dialog === void 0 ? void 0 : dialog.setAttribute('tabindex', '-1');
  dialog === null || dialog === void 0 ? void 0 : dialog.focus();
}

function closeModal(modal) {
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    return openModal(btn.getAttribute('data-open-modal'));
  });
});
document.querySelectorAll('[data-close-modal]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    return closeModal(btn.closest('.modal'));
  });
});
document.querySelectorAll('.modal').forEach(function (m) {
  m.addEventListener('click', function (e) {
    if (e.target === m) closeModal(m);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && m.getAttribute('aria-hidden') === 'false') closeModal(m);
  });
}); // ===========================
// Smooth hash navigation + close mobile menu
// ===========================

var _iterator = _createForOfIteratorHelper(document.querySelectorAll('a[href^="#"]')),
    _step;

try {
  var _loop = function _loop() {
    var a = _step.value;
    a.addEventListener('click', function () {
      var id = a.getAttribute('href').substring(1);
      var target = document.getElementById(id); // Close mobile menu

      navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.remove('open');
      navToggle === null || navToggle === void 0 ? void 0 : navToggle.setAttribute('aria-expanded', 'false'); // Focus target for accessibility

      if (target) {
        setTimeout(function () {
          return target.focus({
            preventScroll: true
          });
        }, 350);
      }
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map