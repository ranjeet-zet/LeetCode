/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length < 3) return false;
    let l = Number.MAX_VALUE
    let m = Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > m) {
            return true;
        } else if (nums[i] > l && nums[i] < m) {
            m = nums[i];
        } else if (nums[i] < l) {
            l = nums[i];
        }
    }
    return false;

};
