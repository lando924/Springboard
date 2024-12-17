function findRotationCount(arr) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
      if (arr[left] <= arr[right]) return left; // Array is already sorted
  
      let mid = Math.floor((left + right) / 2);
      let prev = (mid - 1 + arr.length) % arr.length; // To handle circular indexing
      let next = (mid + 1) % arr.length;
  
      // Check if mid is the pivot
      if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
        return mid;
      }
  
      // Decide which half to search
      if (arr[left] <= arr[mid]) {
        left = mid + 1; // Pivot is in the right half
      } else {
        right = mid - 1; // Pivot is in the left half
      }
    }
  
    return 0  
}

module.exports = findRotationCount