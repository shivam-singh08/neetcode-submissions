
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let j = s.length - 1;
        let i = 0;

        while (i < j) {
            if(!this.alphaNum(s[i])){
                i++;
                continue;
            }
            if(!this.alphaNum(s[j])){
                j--;
                continue;
            }

            // Compare characters case-insensitively
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            } else {
                // Characters match; move both pointers inward
                i++;
                j--;
            }
        }

        // All alphanumeric characters matched
        return true;
    }

     /* Valid characters include A-Z, a-z, and 0-9.
     *
     * @param {string} c
     * @return {boolean}
     */
    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}

// Time Complexity: O(n) - each pointer moves through the string at most once.
// Space Complexity: O(1) - uses only a fixed number of variables.
