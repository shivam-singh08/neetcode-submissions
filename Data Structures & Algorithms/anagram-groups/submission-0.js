class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}
        for(let s of strs){
            let count = new Array(26).fill(0);
            for(let char of s){
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = count.join(',');
            if(!res[key]){
                res[key] =[]
            }
            res[key].push(s)
        }
        return Object.values(res)
    }
}

/**
 * Logic
 * Iterate through each string in the array.
 * Count the frequency of every character using a count array of size 26.
 * Use this count array as a unique key for the string.
 * If the key already exists, add the string to that group;
 * otherwise create a new group.
 * At the end, return all the groups of anagrams.
 *
 * Time Complexity: O(n × k)
 *   - n = number of strings
 *   - k = average length of each string
 *   - We traverse each character of every string once.
 *
 * Space Complexity: O(n × k)
 *   - The hashmap stores all input strings.
 *   - The count array is of fixed size 26, so it takes O(1) extra space per iteration.
 *   - Overall auxiliary space is O(n × k) due to the output/map.
 */