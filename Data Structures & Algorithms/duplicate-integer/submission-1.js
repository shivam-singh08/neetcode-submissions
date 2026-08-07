class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicate = new Set()
        for(let i=0;i<nums.length;i++){
            if(duplicate.has(nums[i])){
                return true
            }
            duplicate.add(nums[i])
        }
        return false
    }
}
