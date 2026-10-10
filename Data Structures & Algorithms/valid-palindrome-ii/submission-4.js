
class Solution {
    /**
     * Checks whether a string can become a palindrome
     * after deleting at most one character.
     *
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        // Compare characters from both ends.
        while (i < j) {
            if (s[i] !== s[j]) {
                // At the first mismatch, try skipping either character.
                return (
                    this.isPalindrome(s, i + 1, j) ||
                    this.isPalindrome(s, i, j - 1)
                );
            }

            i++;
            j--;
        }

        // No mismatches found; the string is already a palindrome.
        return true;
    }

    /**
     * Checks whether the substring between left and right
     * is a palindrome without deleting any characters.
     *
     * @param {string} s
     * @param {number} left
     * @param {number} right
     * @return {boolean}
     */
    isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}

// Time Complexity: O(n) - at most two linear substring checks.
// Space Complexity: O(1) - uses constant extra space.
