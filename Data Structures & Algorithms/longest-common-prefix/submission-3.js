class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        let res ="";
        for(let i =0; i<prefix.length;i++){
            for(let j =0; j< strs.length;j++){
                if(strs[j].length === i || strs[j][i] !== prefix[i]){
                    return res
                }
            }
            res +=prefix[i]
        }
        return res
    }
}
/**
 * Logic
 * If the question involves finding a common prefix, common suffix,
 * comparing strings, or matching characters, the pattern is
 * Character-by-Character Traversal.
 *
 * Here, we take the first string in the array as the prefix.
 *
 * The outer loop iterates through each character of the prefix.
 * The inner loop iterates through each string in the array.
 *
 * For every character, check whether:
 * - the current string's length is equal to the current index (i), or
 * - the character at index i does not match the corresponding character in the prefix.
 *
 * If either condition is true, return the current result.
 *
 * If all strings have the same character at index i, append that character
 * to the result.
 *
 * Finally, return the result.
 *
 * Time Complexity: O(n × m)
 * - n = number of strings
 * - m = length of the shortest common prefix (worst case: length of the shortest string)
 *
 * Space Complexity: O(1)
 * - Ignoring the output string.
 * - If the output string is included, the space complexity is O(m).
 */
