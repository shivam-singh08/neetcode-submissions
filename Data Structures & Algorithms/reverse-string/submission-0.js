class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let n = s.length;
        let i = 0;
        let j = n-1;
        let temp =''
        while(i<j){
             temp = s[i];
             s[i] =s[j];
             s[j] = temp;
             i++
             j--
        }
    }
}
