class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Create the result map to store grouped anagrams.
        // The key will be the character frequency count of a string, which is unique for each anagram group.
        let res = {};

        // Iterate through each string in the array.
        for (let s of strs) {

            // Create a count array of size 26 because the input contains only lowercase letters (a-z).
            // Initialize all values to 0.
            let count = new Array(26).fill(0);

            // Iterate through each character of the current string
            // and count its frequency.
            for (let char of s) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            // Create a unique key from the count array.
            // Since the count array is an array, convert it to a string.
            // Use ',' as a separator to avoid duplicate keys.
            // Example:
            // [1,11,0] -> "1,11,0"
            // [11,1,0] -> "11,1,0"
            // Without ',', both become "1110", causing key collisions.
            let key = count.join(',');

            // If the key doesn't exist, create a new empty array for that group.
            if (!res[key]) {
                res[key] = [];
            }

            // Add the current string to its corresponding anagram group.
            res[key].push(s);
        }

        // Return all grouped anagrams.
        return Object.values(res);
    }
}