class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        //get the length of nums array
        let n = nums.length;
        let check = Math.floor(n / 2);
        //create the hashmap to store the count of each element to check with respect to the check which in n/2
        let  majorEleFreq = {};
        //loop through the array
        for(let i = 0;i<=n;i++){
            //update the frequency
            majorEleFreq[nums[i]] = (majorEleFreq[nums[i]] || 0) + 1;
            //check if the frequency is greater than n/2 abd return the value
            if(majorEleFreq[nums[i]] && majorEleFreq[nums[i]] > check)
            {
                return nums[i];
            }
        }

    }
}
