// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(input) {
  const splitArr = Array.isArray(input) ? input : input.split("")
  const uniqueArr = [splitArr[0]];
  for (let i = 1; i < splitArr.length; i++) {
    if (splitArr[i-1] && splitArr[i] !== splitArr[i-1]) {
      uniqueArr.push(splitArr[i])
    }
  }
  if (uniqueArr[0] === undefined) {
    return []
  }
  return uniqueArr
}

module.exports = uniqueInOrder;