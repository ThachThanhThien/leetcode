// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// var twoSum = function (nums, target) {
//     const mapValueIndex = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (!mapValueIndex[nums[i]]) {
//             mapValueIndex[nums[i]] = [i]
//         } else {
//             mapValueIndex[nums[i]].push(i);
//         }
//     }
    
//     for (let v of Object.keys(mapValueIndex)) {
//         if (mapValueIndex[v].length == 2) {
//             if (parseInt(v) * 2 === target) {
//                 return mapValueIndex[v];
//             }
//         }
//         if (mapValueIndex[v].length == 1) {
//             const otherV = target - parseInt(v);
//             if (mapValueIndex[otherV] && mapValueIndex[otherV].length === 1) {
//                 return [...mapValueIndex[v], ...mapValueIndex[otherV]]
//             }
//         }
//     }
// };

var twoSum = function (nums, target) {
    const mapValueIndex = {};
    for (let i = 0; i < nums.length; i++) {
        const otherV = target - nums[i];
        if (mapValueIndex.hasOwnProperty(otherV)) {
            return [i, mapValueIndex[otherV]];
        }
        mapValueIndex[nums[i]] = i;
    }
    return null;
}

console.log(twoSum([2, 7, 11, 15], 9));