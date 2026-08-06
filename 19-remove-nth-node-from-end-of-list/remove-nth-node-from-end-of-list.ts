/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0, head);
    let left: ListNode = dummy;
    let right: ListNode | null = head;

    while (right) {
        if (n <= 0) {
            left = left.next!;
        }
        right = right.next;
        n -= 1;
    }

    left.next = left.next!.next;
    return dummy.next;
};