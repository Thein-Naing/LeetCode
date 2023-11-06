/* 605. Can Place Flowers
Easy

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, 
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.


Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 
Constraints:
1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length   */


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
     if (n === 0) {
     return true;
  }
  flowerbed.unshift(0);                                  // console.log(flowerbed)  ->  [0, 1, 0, 0, 0, 1]
  flowerbed.push(0);                                     // console.log(flowerbed)   -> [0, 1, 0, 0, 0, 1, 0]
  let count = 0;
  for (let i = 0; i < flowerbed.length-2; i++) {
    // take out 3 elements and replace with 3 zeroes.
    sum = flowerbed.slice(i, i+3).reduce((a, b) => a + b, 0);         // console.log(sum) -> 0.                                     
    if (sum === 0) {
      count++;
      if (count === n) {
        return true;
      }
      i++;
    }
  }
  return false;
};
