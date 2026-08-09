class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        //using boyer moorey voting algo
        let count = 0
        let candidate = 0
        for(let i = 0;i<nums.length;i++){
            if(count === 0){
                candidate = nums[i]
            }
            if(candidate === nums[i]){
                count +=1
            }
            else{
                count -=1
            }
        }
        return candidate
    }
}
