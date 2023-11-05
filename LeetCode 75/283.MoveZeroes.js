/* 283. Move Zeroes
Easy
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array. 

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0] 

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1 

Follow up: Could you minimize the total number of operations done?  */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = nums.length -1;  i >= 0;  i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);                              /* Remove 0 and Replace 0 by arr.splice(0) and arr.push(0). Meaning; if arr[i] = 0, take out only this 0 .
            nums.push(0);                                       and add 0. */
        }

    }
      return nums;
};


/* The splice() method lets us change the content of our array by removing or replacing existing elements with new ones.
   This method modifies the original array and returns the removed elements as a new array. */
