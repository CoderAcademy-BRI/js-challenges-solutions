let assert = require('chai').assert;
let dijkstra = require('../15_dijkstra_algorithm')

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

describe('Find shortest path', function () {
  context('When there is a valid path and start is different from end', function () {
    it('Should return the distance 11 from A to F with path A,B,D,E,F', function () {
      assert.deepEqual({
        distance: 11,
        path: ['A', 'B', 'D', 'E', 'F']
      }, dijkstra(problem, 'A', 'F'))
    })
    it('Should return the distance 9 from B to F with path B,D,E,F', function () {
      assert.deepEqual({
        distance: 9,
        path: ['B', 'D', 'E', 'F']
      }, dijkstra(problem, 'B', 'F'))
    })

  })

  context('When there is no path between the start and end', function () {
    it('Should return the distance Infinity if there is no path', function () {
      assert.deepEqual({
        distance: Infinity,
        path: []
      }, dijkstra(problem, 'B', 'A'));
    })
  })
  context('When the start and end are the same', function () {
    it('Should return a distance of 0 from B to B with path B', function () {
      assert.deepEqual({
        distance: 0,
        path: ['B']
      }, dijkstra(problem, 'B', 'B'));
    })
  })
})