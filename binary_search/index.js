// Return the index of num if it is in the sorted array. If not, return -1.

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return mid;
    }
    if (num > arr[mid]) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return - 1
}

module.exports = binarySearch;