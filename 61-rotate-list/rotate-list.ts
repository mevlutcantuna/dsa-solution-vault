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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let length = 1;
    let tail = head;

    while (tail?.next) {
        tail = tail.next
        length++
    }

    k %= length
    if(k === 0) return head;

    let slow = head;
    let fast = head;

    for(let i = 0; i < k; i++){
        fast = fast.next;
    }

    while(fast.next){
        slow = slow.next;
        fast = fast.next
    }

    let newHead = slow!.next;
    slow.next = null;
    fast.next = head

    return newHead
};