// Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.

// Examples:
// chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]

function chunk(arr, size) {
  let chunkedArr = []
  for (let i = 0; i < arr.length; i++) {
    let lastElem = chunkedArr[chunkedArr.length - 1]
    if (!lastElem || lastElem.length === size) {
      chunkedArr.push([arr[i]]);
    } else {
      lastElem.push(arr[i])
    }
  }
  return chunkedArr
}

module.exports = chunk;
