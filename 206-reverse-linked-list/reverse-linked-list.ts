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


// Two Pointers Solution Time: O(n) Space: O(1)
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }


    return prev;
};

// Recursive Solution Time: O(n) Space: O(n)
function reverseList2(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let newHead = head;
    if(head.next){
        newHead = reverseList2(head.next);
        head.next.next = head;
    }
    head.next = null

    return newHead;
}