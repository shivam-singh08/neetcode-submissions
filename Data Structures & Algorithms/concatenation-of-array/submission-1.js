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
