// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const char = commonPrefix.concat(strs[0].charAt(i));
        if (strs.every(item => item.startsWith(char))) {
            commonPrefix = char;
        } else {
            break;
        }
    }

    return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));