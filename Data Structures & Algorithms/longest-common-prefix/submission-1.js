class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]; 
        let res ="";
    for(let i=0;i<prefix.length; i++){   
        for(let j=1; j< strs.length; j++){
            if(strs[j].length === i || strs[j][i]!==prefix[i]){
                return res;
            }
        }
        res+=prefix[i]
    }
    return res

    }
}
