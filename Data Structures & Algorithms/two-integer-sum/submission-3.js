class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let twoSum = new Map();
        for(let i = 0;i< nums.length; i++){
            let rem = target - nums[i];
            if(twoSum.has(rem)){
                return [twoSum.get(rem), i]
            }
            twoSum.set(nums[i],i)
        }
    }
}
