/*
Find Last Index
Iterate through an array in reverse, returning the index closest
to the end where the predicate truth test passes.

Try adding some tests.
One example could be what if the object is not found in the array
at all.

Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Matthew', 'last': 'McConaughey'},
             {'id': 4, 'name': 'Kanye', 'last': 'West'}];
_.findLastIndex(users, {
  name: 'Kanye'
});
=> 3
*/

const findLastIndex = (array, needle) => {
  const key = Object.keys(needle)[0]
  const val = Object.values(needle)[0]
  for (let i = array.length - 1; i >= 0; i--) {
    if (Object.keys(array[i]).includes(key) &&
      Object.values(array[i]).includes(val))
      return i
  }
  return -1
}

module.exports = {
  findLastIndex
};