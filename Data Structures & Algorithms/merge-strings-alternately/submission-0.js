class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let n = word1.length;
        let m = word2.length;
        let i = 0;
        let j = 0;
        let res = ""
        while(i< n && j< m){
            res = res + word1[i] + word2[j];
            i++;
            j++;
        }
        while(i< n ){
            res = res + word1[i];
            i++
        }
        while( j< m){
            res = res +  word2[j];
            j++
        }
        return res
    }
}
