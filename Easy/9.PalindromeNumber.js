/* 9. Palindrome Number
      Given an integer x, return true if x is a palindrome, and false otherwise. */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str1 = x.toString().split('').join('').toLowerCase();
    let str2 = str1.split('').reverse().join('');
    return str1 === str2;
};
