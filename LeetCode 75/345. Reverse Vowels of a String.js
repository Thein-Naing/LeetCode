/* 345. Reverse Vowels of a String
Easy

Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once. 

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 
Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters. */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {  

      var str = s.match(/[aeiouAEIOU]/g);
      return s.replace(/[aeiouAEIOU]/g, () => str.pop());
};

  //  Alternate Method
  // var reverseVowels = function(s) {  
  // let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // let stack = [];
  // let str = [...s];
  // for (let i = 0; i < s.length; i++) {
  //   if (vowels.includes(s[i])) {
  //      stack.push(s[i]); 
  //     }
  // }
  // for (let j = 0; j < s.length; j++) {
  //   if (vowels.includes(str[j])) {
  //      str[j] = stack.pop();
  //     }
  // }
  // return str.join('');
        
// };
