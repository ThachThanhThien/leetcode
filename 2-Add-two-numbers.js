// You are given two non - empty linked lists representing two non - negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    return arrToList((listToNumber(l1) + listToNumber(l2)).toString().split('').reverse());
};

var listToNumber = function (l) {
    const res = [];
    while (l) {
        res.push(l.val);
        l = l.next;
    }
    return BigInt(res.reverse().join(''));
}

var arrToList = function (n) {
   const num = n.shift();
   if (num) {
    return new ListNode(num, arrToList(n))
   }
}