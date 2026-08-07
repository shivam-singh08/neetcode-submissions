class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const first = new Map();
        const second = new Map();
        if(s.length !== t.length){
            return false
        }
        for(let i = 0;i<s.length; i++){
            first.set(s[i], (first.get(s[i])|| 0) + 1)
        }
        for(let j=0; j<t.length; j++){
            second.set(t[j], (second.get(t[j])|| 0) + 1)
        }
        for(const[key, value] of first ){
            console.log(key  , second.get(key))
            if(second.get(key)=== undefined || value !== second.get(key)){
                return false
            }
        }
        return true        
    }
}
