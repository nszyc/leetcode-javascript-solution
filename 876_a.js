/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // console.log(head)
    // console.log(lengthForNode(head))

    // 0 1 2 3 => 4 => 2
    // 0 1 2 3 4 => 5 => 2

    var length = lengthForNode(head)
    var index = 0
    if (length % 2 == 0) {
        index = length / 2
    } else {
        index = (length - 1) / 2
    }

    var curr = 0
    while (index != curr) {
        head = head.next
        curr++
    }
    return head
};

var lengthForNode = function(head) {
    var l = 0
    while (head && head.val) {
        l++
        head = head.next
    }
    return l
}
