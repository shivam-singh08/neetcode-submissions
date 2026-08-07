class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let index = new Set()
        for(let i=0;i<nums.length; i++){
            let b = target - nums[i]

            if(index.has(nums.indexOf(b))){
              return [nums.indexOf(b),i]       
            }
            index.add(i)
        }
    }
}
