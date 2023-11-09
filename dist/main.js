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

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Node: () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\r\n  constructor(data = null, left = null, right = null) {\r\n    this.data = data\r\n    this.left = left\r\n    this.right = right\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./src/Node.js?");

/***/ }),

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tree: () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/Node.js\");\n\r\n\r\nclass Tree {\r\n  constructor(array) {\r\n    function buildTree(array) {\r\n      // remove empty values & duplicates and sort the array\r\n      const uniqueArr = [...new Set(array.filter((num) => num))]\r\n      const treatedArr = uniqueArr.sort((a, b) => a - b)\r\n\r\n      function getBalBSTFromSorArr(array, start = 0, end = array.length - 1) {\r\n        // base of recursion\r\n        if (start > end) return null\r\n\r\n        // find the middle element of the array and set it as the root\r\n        let mid = Math.floor((start + end) / 2)\r\n        let node = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(array[mid])\r\n\r\n        // generate the left subtree recursively\r\n        node.left = getBalBSTFromSorArr(array, start, mid - 1)\r\n\r\n        // generate the right subtree recursively\r\n        node.right = getBalBSTFromSorArr(array, mid + 1, end)\r\n\r\n        // return the level-0 root node\r\n        return node\r\n      }\r\n\r\n      return getBalBSTFromSorArr(treatedArr)\r\n    }\r\n\r\n    this.root = buildTree(array)\r\n  }\r\n\r\n  prettyPrint(node = this.root, prefix = '', isLeft = true) {\r\n    // visualize the binary tree. credit: The Odin Project\r\n    if (node === null) {\r\n      return\r\n    }\r\n    if (node.right !== null) {\r\n      this.prettyPrint(\r\n        node.right,\r\n        `${prefix}${isLeft ? '│   ' : '    '}`,\r\n        false\r\n      )\r\n    }\r\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)\r\n    if (node.left !== null) {\r\n      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)\r\n    }\r\n  }\r\n\r\n  insert(value) {\r\n    function insertNode(node, data) {\r\n      if (data === node.data) {\r\n        return\r\n        // don't add duplicates\r\n      } else if (data < node.data) {\r\n        node.left ? insertNode(node.left, data) : (node.left = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(data))\r\n      } else {\r\n        node.right\r\n          ? insertNode(node.right, data)\r\n          : (node.right = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(data))\r\n      }\r\n    }\r\n\r\n    this.root === null\r\n      ? (this.root = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(value))\r\n      : insertNode(this.root, value)\r\n  }\r\n\r\n  delete(value) {\r\n    function removeNode(node, data) {\r\n      if (node === null) return null\r\n\r\n      if (data === node.data) {\r\n        if (node.left === null && node.right === null) return null\r\n        if (node.left === null) return node.right\r\n        if (node.right === null) return node.left\r\n\r\n        // If node has two children, replace it with its successor. It's successor is the lowest leaf node in the right subtree.\r\n        let successor = node.right\r\n        while (successor.left) {\r\n          successor = successor.left\r\n        }\r\n        node.data = successor.data\r\n        node.right = removeNode(node.right, successor.data)\r\n\r\n        return node\r\n      } else if (data < node.data) {\r\n        node.left = removeNode(node.left, data)\r\n        return node\r\n      } else {\r\n        node.right = removeNode(node.right, data)\r\n        return node\r\n      }\r\n    }\r\n\r\n    this.root = removeNode(this.root, value)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./src/Tree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ \"./src/Tree.js\");\n\r\n\r\nconst arr = [5, 3, 7, 2, 4, 6, 8]\r\nconst tree = new _Tree__WEBPACK_IMPORTED_MODULE_0__.Tree(arr)\r\ntree.delete(7)\r\ntree.prettyPrint()\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./src/index.js?");

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