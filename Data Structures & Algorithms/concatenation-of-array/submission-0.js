class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
     let nums1 = nums
     let ans = [...nums  , ...nums1]
     return ans

    }
}
