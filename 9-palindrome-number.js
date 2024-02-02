// Given an integer x, return true if x is a palindrome, and false otherwise
// An integer is a palindrome when it reads the same forward and backward.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return x.toString() === x.toString().split('').reverse().join('');
};