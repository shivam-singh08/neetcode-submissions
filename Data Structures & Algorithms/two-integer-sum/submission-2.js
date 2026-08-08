class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let pair = {}
        for(let i = 0; i<nums.length; i++){
            let rem = target - nums[i];
            if(pair[rem] !== undefined){
                return [pair[rem],i]
            }
            pair[nums[i]] = i
        }
    }
}
/**
 * Logic
 * Use a HashMap since we need to find the pair whose sum is equal to the target
 * and return their indices.
 *
 * Iterate through the nums array.
 * Find the remaining value by subtracting nums[i] from the target.
 * Check if the remaining value exists in the HashMap.
 * If it does, return the current index (i) and the index stored in the HashMap.
 * Otherwise, insert the current element and its index into the HashMap.
 *
 * Time Complexity: O(n)
 * - We traverse the array only once.
 * - HashMap insertion and lookup take O(1) on average.
 *
 * Space Complexity: O(n)
 * - In the worst case, all elements are stored in the HashMap.
 */
