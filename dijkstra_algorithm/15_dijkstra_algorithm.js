/*
Strongly recommend to attempt this in pairs or groups.

Consider the graph stored as 'problem'. Write a method (and helper
methods) that will show the distance and shortest path between
two nodes in the graph.

If there is no path, the distance returned should be Infinity, 
and the path should be an empty array.

If the start and end node are the same, the distance should be 0 and
the path should only contain the start/end node. 

Dijkstra’s algorithm:
Note the initial cost to get to all nodes from the start node as
Infinity, except for the start node itself, for which the cost is 0.

In each round:
A. Pick the unvisited node with the smallest current cost noted
B. From that node, update the cost to every child node of that node, 
   indicating the parent node for the cost.
C. Mark that node as done

You are done when all nodes have been visited. The cost is the
final one noted on the finish node, and the path can be taken
from the parents recorded.

Test your solution: mocha 15_dijkstra_algorithm.js

Hints:
If you are having trouble making a start try drawing
a layout of the diagram and thinking about how you could move around
the object.

Using Google will also help a lot for coming up with ideas.
*/

const problem = {
  A: {
    B: 2,
    C: 7
  },
  B: {
    D: 1,
    E: 8
  },
  C: {
    B: 3,
    E: 12
  },
  D: {
    E: 4,
    F: 9
  },
  E: {
    F: 4
  },
  F: {}
};

// Set initial costs to Inifinity for all nodes except
// the start node (set start node to 0)
function setInitialCosts(nodes, start) {
  let costs = []
  // set all costs to Infinity from the start node
  for (let node of nodes) {
    costs[node] = {
      cost: Infinity,
      parent: start
    }

  }
  // set start node cost to 0 for itself
  costs[start]['cost'] = 0

  return costs
}


// Update the stored costs for each set of children nodes passed in
// then remove the parent node from the list of unvisited nodes
function updateCosts(children, costs, parent, unvisitedNodes) {
  // If the cost from the parent to any of the children is less than
  // what is currently recorded, replace it
  for (let child of Object.keys(children)) {
    if (children[child] < costs[child]['cost'])
      costs[child] = {
        cost: children[child],
        parent: parent
      }
  }
  // when we're done, remove this node from the list of unvisited nodes
  unvisitedNodes.splice(unvisitedNodes.indexOf(parent), 1)
}

// Returns the least code node that is remaining, or null
// if all remaining ndoes are more expensive than those already visited
function findLeastCostNode(costs, unvisitedNodes) {
  let leastNode = null
  let cheapest = Infinity
  for (let node of unvisitedNodes) {
    if (costs[node]['cost'] < cheapest)
      leastNode = node
  }
  return leastNode
}

// Returns the shortest distance and path
function getDistanceAndPath(costs, start, end) {
  let result = []
  let distance = 0
  let node = end
  result.push(end)
  while (node != start) {
    distance += costs[node]['cost']
    node = costs[node]['parent']
    result.unshift(node)
  }
  // record distance for start node to rest of path
  distance += costs[node]['cost']

  return {
    distance: distance,
    path: distance == Infinity ? [] : result // If distance is Infinity, there is no path
  }
}

const dijkstra = (graph, start, end) => {
  // If start and end are the same, return the single node path 
  // and cost of 0
  if (start == end) {
    return {
      distance: 0,
      path: [start]
    }
  }

  // Store an array of all nodes so we can check each
  let unvisitedNodes = Object.keys(graph)
  // Start with start node. Set costs to all children and non-children(set to Infinity)
  let costs = setInitialCosts(unvisitedNodes, start)
  updateCosts(graph[start], costs, start, unvisitedNodes)

  // for each unvisited node, find the least costly and update costs for its children
  while (unvisitedNodes.length > 0) {
    let node = findLeastCostNode(costs, unvisitedNodes)
    if (node != null)
      updateCosts(graph[node], costs, node, unvisitedNodes)
    else
      // If the remaining nodes are more expensive than the ones already visited, we're done
      unvisitedNodes = []
  }

  // return the distance and path
  return getDistanceAndPath(costs, start, end)
}

var assert = require('assert');

describe('Find shortest path', () => {
  it('Should return the total length of the shortest distance', () => {
    assert.deepEqual({
      distance: 11,
      path: ['A', 'B', 'D', 'E', 'F']
    }, dijkstra(problem, 'A', 'F'));
    assert.deepEqual({
      distance: 9,
      path: ['B', 'D', 'E', 'F']
    }, dijkstra(problem, 'B', 'F'));
  });
  it('Should return infinity if the distance cannot be completed', () => {
    assert.deepEqual({
      distance: Infinity,
      path: []
    }, dijkstra(problem, 'B', 'A'));
  });
  it('Should return the letter in the path if it stays at the same letter', () => {
    assert.deepEqual({
      distance: 0,
      path: ['B']
    }, dijkstra(problem, 'B', 'B'));
  });
});