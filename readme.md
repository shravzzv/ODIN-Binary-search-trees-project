# Implementing a Balanced Binary Search Tree in JavaScript

## Description

This project implements a balanced binary search tree in JavaScript. It provides various methods to manipulate the tree, such as inserting and deleting nodes, checking if the tree is balanced, finding the height and depth of a node, and rebalancing the tree.

This project was a part of The Odin Project. Here's the
[project source](https://www.theodinproject.com/lessons/javascript-binary-search-trees).

## Features

The class [`Tree`](src/Tree.js) contains the following methods:

```js
const tree = new Tree(arr)
```

- `buildTree(arr)`: Creates a binary search tree from an array.
- `insert(value)`: Adds a new node with the given value to the tree.
- `delete(value)`: Removes the node with the specified value from the tree.
- `find(value)`: Returns the node with the given value.
- `levelOrder(fn)`: Traverses the tree in breadth-first level order, providing each node as an argument to the callback function.
- `inOrder(fn)`: Traverses the tree in in-order (left-root-right) and executes the callback function on each node.
- `preOrder(fn)`: Traverses the tree in pre-order (root-left-right) and executes the callback function on each node.
- `postOrder(fn)`: Traverses the tree in post-order (left-right-root) and executes the callback function on each node.
- `getHeightOf(value)`: Returns the height of the node with the given value.
- `getDepthOf(value)`: Returns the depth of the node with the given value.
- `getMinHeight()`: Returns the level at which the lowest leaf node is present.
- `getMaxHeight()`: Returns the level at which the largest leaf node is present.
- `isBalanced()`: Checks if the tree is balanced.
- `rebalance()`: Rebalances an unbalanced tree.

## Technologies Used

![JavaScript](https://skillicons.dev/icons?i=js)
![Git](https://skillicons.dev/icons?i=git)
![Webpack](https://skillicons.dev/icons?i=webpack)
![Jest](https://skillicons.dev/icons?i=jest)
![Babel](https://skillicons.dev/icons?i=babel)

## Installation

To install the project, follow these steps:

```bash
git clone https://github.com/shravzzv/ODIN-Binary-search-trees-project
cd ODIN-Binary-search-trees-project
npm install
```

## Usage

There is a driver script `npm run start` to run the main project file.

## How to Contribute

If you'd like to contribute, follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork locally.

   ```bash
   git clone https://github.com/shravzzv/ODIN-Binary-search-trees-project
   cd ODIN-Binary-search-trees-project
   ```

3. Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b feature-or-bug-fix-name
   ```

4. Make your changes, commit them, and push them to your fork.

   ```bash
   git add .
   git commit -m "Your commit message here"
   git push origin feature-or-bug-fix-name
   ```

5. Open a Pull Request on GitHub, comparing your branch to the original repository's `main` branch.

## Issue Tracker

Find a bug or want to request a new feature? Please let us know by submitting an issue.

- [Issue Tracker](https://github.com/shravzzv/ODIN-Binary-search-trees-project/issues)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
