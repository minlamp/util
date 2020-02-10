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

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! exports provided: warn, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warn\", function() { return warn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\nvar warn = function warn(msg) {\n  return console.warn(\"[minlamp-util]: \".concat(msg));\n};\nvar error = function error(msg) {\n  return console.error(\"[minlamp-util]: \".concat(msg));\n};\n\n//# sourceURL=webpack://easyUtil/./src/common.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: noop, throttle, debounce, padLeft, padLeftOneZero, isMail, isPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return noop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"padLeft\", function() { return padLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"padLeftOneZero\", function() { return padLeftOneZero; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMail\", function() { return isMail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPhone\", function() { return isPhone; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n\nvar noop = function noop() {}; //节流\n\nvar throttle = function throttle(fn) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;\n  var ctx = arguments.length > 2 ? arguments[2] : undefined;\n  var timer = null;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    if (timer) return;\n    timer = setTimeout(function () {\n      clearTimeout(timer);\n      timer = null;\n      ctx ? fn.apply(ctx, args) : fn.apply(void 0, args);\n    }, duration);\n  };\n}; // 防抖\n\nvar debounce = function debounce(fn) {\n  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;\n  var ctx = arguments.length > 2 ? arguments[2] : undefined;\n  var timer = null;\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(function () {\n      clearTimeout(timer);\n      timer = null;\n      ctx ? fn.apply(ctx, args) : fn.apply(void 0, args);\n    }, delay);\n  };\n}; //给数字左边补零\n\nvar padLeft = function padLeft(num) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  if (typeof num !== 'number' || typeof n !== 'number') return new Error('[padLeft] 参数必须为数字类型');\n\n  while (n > 0) {\n    num = '0' + num;\n    n--;\n  }\n\n  return num;\n}; // 当数字小于10时补零\n\nvar padLeftOneZero = function padLeftOneZero(num) {\n  if (num < 10) return padLeft(num);\n  return num;\n};\nvar isMail = function isMail(mail) {\n  return /^([a-zA-Z]|[0-9])(\\w|-)+@[a-zA-Z0-9]+\\.([a-zA-Z]{2,4})$/.test(mail);\n};\nvar isPhone = function isPhone(phone) {\n  return /^1[3456789]\\d{9}$/.test(phone);\n};\n\n//# sourceURL=webpack://easyUtil/./src/index.js?");

/***/ })

/******/ });
});