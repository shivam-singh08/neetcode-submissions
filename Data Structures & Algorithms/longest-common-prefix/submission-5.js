class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        let res = ""
        for(let i = 0; i< prefix.length; i++){
            for(let str of strs){
                if(str.length === i || str[i]!==prefix[i]){
                    return res
                }
            }
            res += prefix[i]

        }
        return res
    }
}
