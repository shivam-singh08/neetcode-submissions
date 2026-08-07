class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        let res=""
        for(let i=0;i<prefix.length;i++){
            for(let j=0; j< strs.length;j++){
                if(strs[j].length === i || strs[j][i]!== prefix[i]){
                    return res
                }
            }
            res +=prefix[i]
        }
        return res
    }
}

/**
 * Logic:
 * 1. Take the first string as the prefix.
 * 2. Outer loop: Iterate through each character of the prefix.
 * 3. Inner loop: Compare the current character with the same index
 *    of every string.
 * 4. If any string ends (length === i) or characters don't match,
 *    return the result.
 * 5. Otherwise, add the current prefix character to the result.
 * 6. Return the result.
 *
 * Time Complexity: O(N × M)
 * - Outer loop runs M times (prefix length).
 * - Inner loop runs N times (number of strings).
 * - Total = O(N × M).
 *
 * Space Complexity: O(1)
 * - Only the result string is used (excluding output).
 */