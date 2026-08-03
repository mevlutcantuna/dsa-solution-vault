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

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next; // 1 step
        fast = fast.next.next; // 2 steps

        if(slow === fast) return true
    }

    return false
};