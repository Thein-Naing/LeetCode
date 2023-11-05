/* 58. Length of Last Word
Easy
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only. 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 
Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s. */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newS = s.trim().split("");
    let count = 0;  
if (s.length === 0) return count;
if (!newS.includes(" ")) return newS.length;
for (let i = newS.length - 1; i > 0; i--) {               // Loop through from backward since returning the length of the last word in the string.
    if (newS[i] != " ") {
      count++;
    } else {
      return count;
    }
  }
}

