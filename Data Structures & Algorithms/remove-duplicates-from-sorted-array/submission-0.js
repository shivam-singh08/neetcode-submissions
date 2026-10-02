class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let n = nums.length;
        let i =0;
        let j= 1;
        let size = 1;
        while(j < n){
            if(nums[i]!== nums[j]){
                nums[i+1] = nums[j];
                i++;
                size = size + 1;
            }
            j++;
        }
        return size;
}
}
