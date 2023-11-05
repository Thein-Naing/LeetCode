/* 1768. Merge Strings Alternately
Easy
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string. 

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 
Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.    */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
     let stack = [];                                                            // 1. Use stack to Last In First Out (LIFO) property.
     const length = Math.max(word1.length, word2.length);                       // 2. Find longest length of words.
     for (let i =0; i < length; i++) {                                          // 3. Loop through each words and add letter alternately to satck.
        stack.push(word1[i]);
        stack.push(word2[i]);
         }
    return stack.join("")                                                      // 4. Rejoin and return stack.
    
};

// Note: Here word1 
