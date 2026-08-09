class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // Get the length of the nums array.
        let n = nums.length;
        let check = Math.floor(n / 2);

        // Create a hashmap to store the frequency of each element.
        // We will compare each frequency against n/2.
        let majorEleFreq = {};

        // Iterate through the array.
        for (let i = 0; i < n; i++) {

            // Update the frequency of the current element.
            majorEleFreq[nums[i]] = (majorEleFreq[nums[i]] || 0) + 1;

            // If the frequency becomes greater than n/2,
            // return the current element as the majority element.
            if (majorEleFreq[nums[i]] > check) {
                return nums[i];
            }
        }
    }
}

/**
 * Time Complexity: O(n)
 *   - We iterate through the array only once.
 *   - HashMap insertion and lookup take O(1) on average.
 *
 * Space Complexity: O(n)
 *   - In the worst case, the HashMap stores the frequency of every unique element.
 *   - If all elements are different, it stores n entries.
 */
