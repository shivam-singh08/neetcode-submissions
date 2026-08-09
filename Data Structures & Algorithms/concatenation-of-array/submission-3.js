class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let res = new Array(2*n).fill(0);
        for(let i = 0;i<n;i++){
            res[i] = nums[i]
            res[i+n] = nums[i]
        }
        return res
    }
}
