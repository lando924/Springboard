function findRotatedIndex(arr, num) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) return mid;
  
      // Check if left half is sorted
      if (arr[left] <= arr[mid]) {
        if (num >= arr[left] && num < arr[mid]) {
          right = mid - 1; // Search in left half
        } else {
          left = mid + 1; // Search in right half
        }
      }
      // Right half is sorted
      else {
        if (num > arr[mid] && num <= arr[right]) {
          left = mid + 1; // Search in right half
        } else {
          right = mid - 1; // Search in left half
        }
      }
    }
  
    return -1; // Not found
}

module.exports = findRotatedIndex