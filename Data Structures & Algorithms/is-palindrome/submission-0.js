
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let j = s.length - 1;
        let i = 0;

        while (i < j) {
            // Get ASCII values of characters at both pointers
            let codeI = s[i].charCodeAt(0);
            let codeJ = s[j].charCodeAt(0);

            // ASCII ranges:
            // A-Z: 65-90, a-z: 97-122, 0-9: 48-57
            // Skip the left character if it is non-alphanumeric
            if (
                !((codeI >= 65 && codeI <= 90) ||
                  (codeI >= 97 && codeI <= 122) ||
                  (codeI >= 48 && codeI <= 57))
            ) {
                i++;
                continue;
            }

            // Skip the right character if it is non-alphanumeric
            if (
                !((codeJ >= 65 && codeJ <= 90) ||
                  (codeJ >= 97 && codeJ <= 122) ||
                  (codeJ >= 48 && codeJ <= 57))
            ) {
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
}

// Time Complexity: O(n) - each pointer moves through the string at most once.
// Space Complexity: O(1) - uses only a fixed number of variables.
