var assert = require('assert');
var dijkstra = require('../15_dijkstra_algorithm')

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
