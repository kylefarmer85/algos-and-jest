// Return the index of num if it is in the sorted array. If not, return -1.

function binarySearch(arr, num) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(startIndex <= endIndex) {
    let midIndex = Math.floor(endIndex - startIndex / 2);
    let midValue = arr[midIndex];

    if (midValue === num) {
      return midIndex;
    }
    if (num > midValue) {
      startIndex = midIndex + 1;
    }
    if (num < midValue) {
      endIndex = midIndex - 1;
    }
  }
  return - 1
}

module.exports = binarySearch;