(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["easyUtil"] = factory();
	else
		root["easyUtil"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: throttle, debounce, padLeft, padLeftOneZero, composeParams, iterationObj, convertMapToArr, sortItemByKey, paramToStr, toHump, toLine, exchangeValueAndKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"padLeft\", function() { return padLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"padLeftOneZero\", function() { return padLeftOneZero; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"composeParams\", function() { return composeParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iterationObj\", function() { return iterationObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertMapToArr\", function() { return convertMapToArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortItemByKey\", function() { return sortItemByKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paramToStr\", function() { return paramToStr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toHump\", function() { return toHump; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toLine\", function() { return toLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exchangeValueAndKey\", function() { return exchangeValueAndKey; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n //节流\n\nvar throttle = function throttle(fn) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;\n  var ctx = arguments.length > 2 ? arguments[2] : undefined;\n  var timer = null;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    if (timer) return;\n    timer = setTimeout(function () {\n      clearTimeout(timer);\n      timer = null;\n      ctx ? fn.apply(ctx, args) : fn.apply(void 0, args);\n    }, duration);\n  };\n}; // 防抖\n\nvar debounce = function debounce(fn) {\n  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;\n  var ctx = arguments.length > 2 ? arguments[2] : undefined;\n  var timer = null;\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(function () {\n      clearTimeout(timer);\n      timer = null;\n      ctx ? fn.apply(ctx, args) : fn.apply(void 0, args);\n    }, delay);\n  };\n}; //给数字左边补零\n\nvar padLeft = function padLeft(num) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  if (typeof num !== 'number' || typeof n !== 'number') return new Error('[padLeft] 参数必须为数字类型');\n\n  while (n > 0) {\n    num = '0' + num;\n    n--;\n  }\n\n  return num;\n}; // 当数字小于10时补零\n\nvar padLeftOneZero = function padLeftOneZero(num) {\n  if (num < 10) return padLeft(num);\n  return num;\n};\nvar composeParams = function composeParams(settings, options) {\n  return Object.assign({}, settings, options);\n}; //自定义对象的属性和值，并返回新对象\n\nvar iterationObj = function iterationObj(o) {\n  var handleKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils__WEBPACK_IMPORTED_MODULE_0__[\"noop\"];\n  var handleVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils__WEBPACK_IMPORTED_MODULE_0__[\"noop\"];\n  var to = Object.create(null),\n      tk = '',\n      tv = '';\n  Object.keys(o).forEach(function (key, i) {\n    tk = handleKey(key);\n    tv = handleVal(o[key]);\n    to[tk] = tv;\n  });\n  return to;\n};\nvar convertMapToArr = function convertMapToArr(m) {\n  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var item,\n      //探测尽量放在循环外，避免多次无效判断\n  idName = option.id || 'id',\n      labelName = option.label || 'label',\n      valueName = option.value || 'value';\n  return Object.keys(m).map(function (key, i) {\n    item = m[key];\n    return {\n      id: item[idName] || i,\n      label: item[labelName] || item,\n      value: item[valueName] || key\n    };\n  });\n};\nvar sortItemByKey = function sortItemByKey(key) {\n  return function (a, b) {\n    var m = parseFloat(a[key]) - parseFloat(b[key]);\n    if (m < 0) return -1;else if (m > 0) return 1;else return 0;\n  };\n}; //把js对象安装其属性值拼接成字符串\n\nvar paramToStr = function paramToStr(o) {\n  if (_typeof(o) !== 'object' && typeof o !== 'function') {\n    return o.toString();\n  }\n\n  return Object.keys(o).map(function (key) {\n    return o[key].toString();\n  }).join('-');\n}; // 下划线转换驼峰\n\nvar toHump = function toHump(name) {\n  return name.replace(/\\_(\\w)/g, function (all, letter) {\n    return letter.toUpperCase();\n  });\n}; // 驼峰转换下划线\n\nvar toLine = function toLine(name) {\n  return name.replace(/([A-Z])/g, \"_$1\").toLowerCase();\n};\n/**\n * 把类似下面的map的key和value互换位置\n *  {\n        1: '完成'\n*   }\n    => \n    {\n        '完成': 1\n    }\n*/\n\nvar exchangeValueAndKey = function exchangeValueAndKey(m) {\n  if (_typeof(m) !== 'object') {\n    throw '[exchangeValueAndKey] param is object';\n  }\n\n  var o = Object.create(null);\n  Object.keys(m).forEach(function (key) {\n    o[m[key]] = key;\n  });\n  return o;\n};\n\n//# sourceURL=webpack://easyUtil/./src/core.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: memoryRequestData, warn, error, noop, isMail, isPhone, throttle, debounce, padLeft, padLeftOneZero, composeParams, iterationObj, convertMapToArr, sortItemByKey, paramToStr, toHump, toLine, exchangeValueAndKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./io */ \"./src/io.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoryRequestData\", function() { return _io__WEBPACK_IMPORTED_MODULE_0__[\"memoryRequestData\"]; });\n\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"warn\", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__[\"warn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__[\"error\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__[\"noop\"]; });\n\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate */ \"./src/validate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isMail\", function() { return _validate__WEBPACK_IMPORTED_MODULE_2__[\"isMail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPhone\", function() { return _validate__WEBPACK_IMPORTED_MODULE_2__[\"isPhone\"]; });\n\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ \"./src/core.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"debounce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"padLeft\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"padLeft\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"padLeftOneZero\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"padLeftOneZero\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeParams\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"composeParams\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"iterationObj\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"iterationObj\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"convertMapToArr\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"convertMapToArr\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sortItemByKey\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"sortItemByKey\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"paramToStr\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"paramToStr\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toHump\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"toHump\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toLine\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"toLine\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"exchangeValueAndKey\", function() { return _core__WEBPACK_IMPORTED_MODULE_3__[\"exchangeValueAndKey\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://easyUtil/./src/index.js?");

/***/ }),

/***/ "./src/io.js":
/*!*******************!*\
  !*** ./src/io.js ***!
  \*******************/
/*! exports provided: memoryRequestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"memoryRequestData\", function() { return memoryRequestData; });\nvar memoryRequestData = function memoryRequestData(fn) {\n  if (typeof fn !== 'function') {\n    throw '[memoryRequestData] first param must be func!';\n  }\n\n  var cache = Object.create(null);\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    var key = args.map(function (arg) {\n      return paramToStr(arg);\n    }).join('-');\n\n    if (cache[key]) {\n      return Promise.resolve(cache[key]);\n    }\n\n    return fn.apply(void 0, args).then(function (data) {\n      return cache[key] = data;\n    });\n  };\n};\n\n//# sourceURL=webpack://easyUtil/./src/io.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: warn, error, noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warn\", function() { return warn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return noop; });\nvar warn = function warn(msg) {\n  return console.warn(\"[minlamp-util]: \".concat(msg));\n};\nvar error = function error(msg) {\n  return console.error(\"[minlamp-util]: \".concat(msg));\n};\nvar noop = function noop(t) {\n  return t;\n};\n\n//# sourceURL=webpack://easyUtil/./src/utils.js?");

/***/ }),

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/*! exports provided: isMail, isPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMail\", function() { return isMail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPhone\", function() { return isPhone; });\nvar isMail = function isMail(mail) {\n  return /^([a-zA-Z]|[0-9])(\\w|-)+@[a-zA-Z0-9]+\\.([a-zA-Z]{2,4})$/.test(mail);\n};\nvar isPhone = function isPhone(phone) {\n  return /^1[3456789]\\d{9}$/.test(phone);\n};\n\n//# sourceURL=webpack://easyUtil/./src/validate.js?");

/***/ })

/******/ });
});