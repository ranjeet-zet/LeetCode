/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let length = nums.length;
    let left = 0;
    let right = length - 1;
    let result = new Array(length);
    let currentIndex = length - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            result[currentIndex--] = leftSquare;
            left++;
        } else {
            result[currentIndex--] = rightSquare;
            right--;
        }
    }
    return result;
};

