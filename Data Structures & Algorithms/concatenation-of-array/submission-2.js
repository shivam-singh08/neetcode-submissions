class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let result = new Array(2*n).fill(0);
        for(let i = 0; i< n; i++){
            result[i] = nums[i]
            result[n+i]= nums[i]

        }
        return result
    }
}
/**
 * Logic:
 * 1. Create a result array of size 2 * n.
 * 2. Iterate through the input array once.
 * 3. For each index i:
 *    - Place nums[i] at result[i].
 *    - Place nums[i] again at result[n + i].
 * 4. Return the concatenated array.
 *
 * Time Complexity: O(n)
 * - Single loop iterates through n elements.
 *
 * Space Complexity: O(n)
 * - Result array stores 2 * n elements.
 * - 2n simplifies to O(n).
 */
