class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i=0;
        let j=0;
        let size =0;
        let n = nums.length;
        while(j< n){
        if(nums[j] !== val){
                nums[i] = nums[j]
                size++
                i++
        }
       j++
    }
    return size
}
}
