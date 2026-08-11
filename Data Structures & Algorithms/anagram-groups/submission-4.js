class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let grp = {};
        for(let i = 0;i<strs.length;i++){
            let count = new Array(26).fill(0);
            for(let char of strs[i]){
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] +=1
            }
            let key = count.join(',')
            if(!grp[key]){
                grp[key] = []
            }
            grp[key].push(strs[i])
        }
        return Object.values(grp)
    }
}
