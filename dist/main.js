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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tree: () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/Node.js\");\n\r\n\r\nclass Tree {\r\n  constructor(array) {\r\n    this.root = this.buildTree(array)\r\n  }\r\n\r\n  buildTree(array) {\r\n    // remove empty values & duplicates and sort the array\r\n    const uniqueArr = [...new Set(array.filter((num) => num))]\r\n    const treatedArr = uniqueArr.sort((a, b) => a - b)\r\n\r\n    function getBalBSTFromSorArr(array, start = 0, end = array.length - 1) {\r\n      // base of recursion\r\n      if (start > end) return null\r\n\r\n      // find the middle element of the array and set it as the root\r\n      let mid = Math.floor((start + end) / 2)\r\n      let node = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(array[mid])\r\n\r\n      // generate the left subtree recursively\r\n      node.left = getBalBSTFromSorArr(array, start, mid - 1)\r\n\r\n      // generate the right subtree recursively\r\n      node.right = getBalBSTFromSorArr(array, mid + 1, end)\r\n\r\n      // return the level-0 root node\r\n      return node\r\n    }\r\n\r\n    return getBalBSTFromSorArr(treatedArr)\r\n  }\r\n\r\n  prettyPrint(node = this.root, prefix = '', isLeft = true) {\r\n    // visualize the binary tree. credit: The Odin Project\r\n    if (node === null) {\r\n      return\r\n    }\r\n    if (node.right !== null) {\r\n      this.prettyPrint(\r\n        node.right,\r\n        `${prefix}${isLeft ? '│   ' : '    '}`,\r\n        false\r\n      )\r\n    }\r\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)\r\n    if (node.left !== null) {\r\n      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)\r\n    }\r\n  }\r\n\r\n  insert(value) {\r\n    function insertNode(node, data) {\r\n      if (data === node.data) {\r\n        return\r\n        // don't add duplicates\r\n      } else if (data < node.data) {\r\n        node.left ? insertNode(node.left, data) : (node.left = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(data))\r\n      } else {\r\n        node.right\r\n          ? insertNode(node.right, data)\r\n          : (node.right = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(data))\r\n      }\r\n    }\r\n\r\n    this.root === null\r\n      ? (this.root = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(value))\r\n      : insertNode(this.root, value)\r\n  }\r\n\r\n  delete(value) {\r\n    function removeNode(node, data) {\r\n      if (node === null) return null\r\n\r\n      if (data === node.data) {\r\n        if (node.left === null && node.right === null) return null\r\n        if (node.left === null) return node.right\r\n        if (node.right === null) return node.left\r\n\r\n        // If node has two children, replace it with its successor. It's successor is the lowest leaf node in the right subtree.\r\n        let successor = node.right\r\n        while (successor.left) {\r\n          successor = successor.left\r\n        }\r\n        node.data = successor.data\r\n        node.right = removeNode(node.right, successor.data)\r\n\r\n        return node\r\n      } else if (data < node.data) {\r\n        node.left = removeNode(node.left, data)\r\n        return node\r\n      } else {\r\n        node.right = removeNode(node.right, data)\r\n        return node\r\n      }\r\n    }\r\n\r\n    this.root = removeNode(this.root, value)\r\n  }\r\n\r\n  find(value) {\r\n    // returns the node with the given value\r\n    let currentNode = this.root\r\n    if (currentNode === null) return -1\r\n\r\n    while (currentNode) {\r\n      if (value === currentNode.data) {\r\n        return currentNode\r\n      } else if (value > currentNode.data) {\r\n        currentNode = currentNode.right\r\n      } else {\r\n        currentNode = currentNode.left\r\n      }\r\n    }\r\n\r\n    return -1\r\n  }\r\n\r\n  levelOrder(fn = null) {\r\n    // Traverses the tree in breadth-first level order and provide each node as an argument to the callback. If no callback is provided, returns an array of values in levelOrder\r\n    if (this.root === null) return null\r\n\r\n    const result = []\r\n    const Q = []\r\n    Q.push(this.root)\r\n    while (Q.length > 0) {\r\n      let node = Q.shift()\r\n      result.push(node.data)\r\n\r\n      if (fn) {\r\n        fn(node.data)\r\n      }\r\n\r\n      if (node.left) Q.push(node.left)\r\n      if (node.right) Q.push(node.right)\r\n    }\r\n\r\n    return result\r\n  }\r\n\r\n  inOrder(fn = null) {\r\n    // left -> root -> right\r\n    if (this.root === null) return null\r\n\r\n    const result = []\r\n    function traverseInOrder(node, result) {\r\n      if (node.left) traverseInOrder(node.left, result)\r\n      if (fn) fn(node.data)\r\n      result.push(node.data)\r\n      if (node.right) traverseInOrder(node.right, result)\r\n    }\r\n\r\n    traverseInOrder(this.root, result)\r\n    return result\r\n  }\r\n\r\n  preOrder(fn = null) {\r\n    // root -> left -> right\r\n    if (this.root === null) return null\r\n\r\n    const result = []\r\n    function traversePreOrder(node, result) {\r\n      if (fn) fn(node.data)\r\n      result.push(node.data)\r\n      if (node.left) traversePreOrder(node.left, result)\r\n      if (node.right) traversePreOrder(node.right, result)\r\n    }\r\n\r\n    traversePreOrder(this.root, result)\r\n    return result\r\n  }\r\n\r\n  postOrder(fn = null) {\r\n    // left -> right -> root\r\n    if (this.root === null) return null\r\n\r\n    const result = []\r\n    function traversePostOrder(node, result) {\r\n      if (node.left) traversePostOrder(node.left, result)\r\n      if (node.right) traversePostOrder(node.right, result)\r\n      if (fn) fn(node.data)\r\n      result.push(node.data)\r\n    }\r\n\r\n    traversePostOrder(this.root, result)\r\n    return result\r\n  }\r\n\r\n  getHeightOf(value) {\r\n    let height = -1\r\n\r\n    function findHeightOf(value, root) {\r\n      // Base Case\r\n      if (root === null) return -1\r\n\r\n      // Store the maximum height of the left and right subtree\r\n      var leftHeight = findHeightOf(value, root.left)\r\n      var rightHeight = findHeightOf(value, root.right)\r\n\r\n      // Update height of the current node\r\n      let ans = Math.max(leftHeight, rightHeight) + 1\r\n\r\n      // If current node is the required node\r\n      if (root.data === value) {\r\n        height = ans\r\n      }\r\n\r\n      return ans\r\n    }\r\n\r\n    findHeightOf(value, this.root)\r\n    return height\r\n  }\r\n\r\n  getDepthOf(value) {\r\n    function findDepthOf(value, root) {\r\n      if (root == null) return -1 // Base case\r\n\r\n      let dist = -1\r\n      if (\r\n        // Check if x is current node\r\n        value === root.data ||\r\n        // Otherwise, check if x is present in the left subtree\r\n        (dist = findDepthOf(value, root.left)) >= 0 ||\r\n        // Otherwise, check if x is present in the right subtree\r\n        (dist = findDepthOf(value, root.right)) >= 0\r\n      ) {\r\n        // Return depth of the node\r\n        return dist + 1\r\n      }\r\n\r\n      return dist\r\n    }\r\n\r\n    return findDepthOf(value, this.root)\r\n  }\r\n\r\n  getMinHeight(node = this.root) {\r\n    // returns the tree level at the which the lowest leaf node is present\r\n    if (node === null) return -1\r\n\r\n    let left = this.getMinHeight(node.left)\r\n    let right = this.getMinHeight(node.right)\r\n\r\n    return left < right ? left + 1 : right + 1\r\n  }\r\n\r\n  getMaxHeight(node = this.root) {\r\n    // returns the tree level at the which the largest leaf node is present\r\n    if (node === null) return -1\r\n\r\n    let left = this.getMaxHeight(node.left)\r\n    let right = this.getMaxHeight(node.right)\r\n\r\n    return left > right ? left + 1 : right + 1\r\n  }\r\n\r\n  isBalanced() {\r\n    return (\r\n      this.getMaxHeight() - this.getMinHeight() === 1 ||\r\n      this.getMaxHeight() - this.getMinHeight() === 0\r\n    )\r\n  }\r\n\r\n  rebalance() {\r\n    // rebalances an unbalanced tree\r\n    // use the inOrder traversal to provide a new sorted array of nodes to the buildTree method\r\n    this.root = this.buildTree(this.inOrder())\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./src/Tree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ \"./src/Tree.js\");\n\r\n\r\n// Write a simple driver script that does the following: (npm run start)\r\n/*\r\n// Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.\r\n\r\n// Confirm that the tree is balanced by calling isBalanced.\r\n\r\n// Print out all elements in level, pre, post, and in order.\r\n\r\n// Unbalance the tree by adding several numbers > 100.\r\n\r\n// Confirm that the tree is unbalanced by calling isBalanced.\r\n\r\n// Balance the tree by calling rebalance.\r\n\r\n// Confirm that the tree is balanced by calling isBalanced.\r\n\r\n// Print out all elements in level, pre, post, and in order.\r\n*/\r\n\r\nfunction getRandomIntInclusive(min, max) {\r\n  min = Math.ceil(min)\r\n  max = Math.floor(max)\r\n  return Math.floor(Math.random() * (max - min + 1) + min)\r\n}\r\n\r\nconst randomNums = new Set()\r\nfor (let i = 0; [...randomNums].length < 50; i++) {\r\n  randomNums.add(getRandomIntInclusive(0, 99))\r\n}\r\n\r\nconst tree = new _Tree__WEBPACK_IMPORTED_MODULE_0__.Tree([...randomNums])\r\n\r\nconsole.log(tree.isBalanced())\r\n\r\nconsole.log(tree.levelOrder())\r\nconsole.log(tree.preOrder())\r\nconsole.log(tree.postOrder())\r\nconsole.log(tree.inOrder())\r\n\r\nfor (let i = 0; i < 50; i++) {\r\n  tree.insert(getRandomIntInclusive(101, 200))\r\n}\r\n\r\nconsole.log(tree.isBalanced())\r\n\r\ntree.rebalance()\r\n\r\nconsole.log(tree.isBalanced())\r\n\r\nconsole.log(tree.levelOrder())\r\nconsole.log(tree.preOrder())\r\nconsole.log(tree.postOrder())\r\nconsole.log(tree.inOrder())\r\n\r\ntree.prettyPrint()\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./src/index.js?");

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