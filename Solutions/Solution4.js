/**
 * Returns the first positive integer in an array. 0 does not count as a positive integer 
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositiveInteger(nums) {
  if (nums.length === 0) return 1;
  // Using pivot value of 0
  const k = partition(nums, 0, nums.length - 1, 0) + 1;

  let result = k;
  for (let i = 0; i < k; i++) {
    const indexValue = Math.abs(nums[i]);
    if (indexValue <= k) {
      // turn negative
      if (nums[indexValue - 1] > 0)
        nums[indexValue - 1] = 0 - nums[indexValue - 1];
    }
  }

  // The first positive index indicates the missing number
  // Could iterate through nums.length, but dont have to since k through nums.length are negative already numbers
  for (let i = 0; i < k; i++) {
    if (nums[i] > 0) {
      result = i;
      break;
    }
  }
  return result + 1; // plus 1 because arrays are zero indexed
}

/**
 * Partitions the array with positives on the left side and negative numbers/0 on the right side.
 * Return index of the last positive number
 * Example:
 * [3, 4, -1, 1] => [3, 4, 1, -1] Returns 2
 * [0, 6, -1, 5, 4] => [4, 6, 5, -1, 0] Returns 2
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number} pivotValue
 * @return {number}
 */
function partition(nums, left, right, pivotValue) {
  while (left <= right) {
    while (nums[left] > pivotValue) left++;
    while (nums[right] < pivotValue) right--;

    if (left <= right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  }
  return right;
}

/**
 * Swap two indicies in an array
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  if (i !== j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

export default firstMissingPositiveInteger;
