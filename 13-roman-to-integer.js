// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    const arr = s.split('').reverse();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1]) {
            if (roman[arr[i]] >= roman[arr[i-1]]) {
                res += roman[arr[i]];
            } else {
                res -= roman[arr[i]];
            }
        } else {
            res += roman[arr[i]];
        }
    }
    return res;
};

console.log(romanToInt('MCMXCIV'));