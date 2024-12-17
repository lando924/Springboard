function sortedFrequency(arr, num) {
    // Helper function to find the first occurrence of the number
    function findFirst(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === num) {
                result = mid;
                high = mid - 1; // Move left to find earlier occurrences
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }

    // Helper function to find the last occurrence of the number
    function findLast(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === num) {
                result = mid;
                low = mid + 1; // Move right to find later occurrences
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }

    const firstIndex = findFirst(arr, num);
    if (firstIndex === -1) return -1; // Number not found

    const lastIndex = findLast(arr, num);
    return lastIndex - firstIndex + 1;
}

module.exports = sortedFrequency