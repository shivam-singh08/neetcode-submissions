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
// Logic:
// 1. If the strings have different lengths, they cannot be anagrams.
// 2. Build a frequency map for both strings.
//    - Key   -> Character
//    - Value -> Frequency of the character
// 3. Iterate through the first frequency map and compare the frequency
//    of each character with the second frequency map.
// 4. If a character is missing or its frequency differs, return false.
// 5. If all frequencies match, return true.
//
// Time Complexity: O(n)
// - First loop over s      -> O(n)
// - Second loop over t     -> O(n)
// - Third loop over hashS  -> O(k), where k = unique characters.
//   In the worst case, k <= n.
// Total = O(n + n + k) = O(n)
//
// Space Complexity: O(n)
// - hashS stores frequencies of characters from s.
// - hashT stores frequencies of characters from t.
// - In the worst case (all characters are unique), both maps together
//   store O(n) entries.
// Total auxiliary space = O(n)
