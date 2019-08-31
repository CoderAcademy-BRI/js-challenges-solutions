// Your tests here
const countEvens = require('./19_countEvens').countEvens;

describe('Should handle an empty array', function () {
  it('Should return 0 for an empty array', function () {
    expect(countEvens([])).toBe(0);
  });
});

describe('Should handle array with no even numbers', function () {
  it('Should return 0 when array has only odd numbers', function () {
    expect(countEvens([1, 3, 5, 7, 9])).toBe(0);
  });
  it('Should return 0 when array does not contain numbers', function () {
    expect(countEvens(['a', 'b', 'c'])).toBe(0);
  });
});

describe('Should return correct count when there are even numbers', function () {
  it('Should return 1 for [1,2,3]', function () {
    expect(countEvens([1, 2, 3])).toBe(1);
  });
  it('Should return 3 for [2,4,6]', function () {
    expect(countEvens([2, 4, 6])).toBe(3);
  });
  it('Should return 2 for [2,\'a\',4]', function () {
    expect(countEvens([2, 'a', 4])).toBe(2);
  });
});