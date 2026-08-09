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

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const dummy = new ListNode(0);
    let tail = dummy;

    let first = l1;
    let second = l2;
    let carry = 0;

    while (first || second || carry) {
        const firstNumber = first ? first.val : 0;
        const secondNumber = second ? second.val : 0;

        const sum = firstNumber + secondNumber + carry;
        carry = Math.floor(sum / 10);

        tail.next = new ListNode(sum % 10);
        tail = tail.next;

        first = first ? first.next : null;
        second = second ? second.next : null;
    }

    return dummy.next;
}