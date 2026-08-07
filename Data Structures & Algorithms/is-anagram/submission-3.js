class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hashS ={};
        let hashT = {};
        if(s.length !== t.length){
            return false
        }
        for(let i=0;i<s.length;i++){
            hashS[s[i]] = (hashS[s[i]] || 0) + 1
        }
        for(let j=0;j<t.length;j++){
            hashT[t[j]] = (hashT[t[j]] || 0) + 1
        }
        for(const key in hashS){
            if(hashT[key] === undefined || hashS[key] !== hashT[key]){
                return false
            }
        }
        return true
    }
}
