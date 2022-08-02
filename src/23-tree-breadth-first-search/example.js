// Import dependencies.
import { BinaryTreeNode } from '../06-binary-search-tree/BinaryTreeNode';
import { breadthFirstSearch } from './breadthFirstSearch';

// Create tree nodes.
const nodeA = new BinaryTreeNode('A');
const nodeB = new BinaryTreeNode('B');
const nodeC = new BinaryTreeNode('C');
const nodeD = new BinaryTreeNode('D');
const nodeE = new BinaryTreeNode('E');

// Form a binary tree out of created nodes.
nodeA
  .setLeft(nodeB)
  .setRight(nodeC);

nodeB
  .setLeft(nodeD)
  .setRight(nodeE);

// Init the array that will contain all traversed nodes of th tree.
const traversedNodes = [];

// Create visiting node callback.
const visitNodeCallback = (visitedNode) => {
  // Once we visit the node let's add it to the list of traversed nodes.
  traversedNodes.push(visitedNode);
};

// Perform breadth-first tree traversal.
breadthFirstSearch(nodeA, visitNodeCallback);

// Check that traversal happened in correct order.
expect(traversedNodes).toEqual([
  nodeA, nodeB, nodeC, nodeD, nodeE,
]);

// eslint-disable-next-line no-console
console.log(traversedNodes);
/*
  The output will be:
  [nodeA, nodeB, nodeC, nodeD, nodeE]
*/
