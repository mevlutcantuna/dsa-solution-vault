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

function partition(head: ListNode | null, x: number): ListNode | null {
    let lowDummy = new ListNode(0);
    let highDummy = new ListNode(0);

    let lowTail = lowDummy;
    let highTail = highDummy;
    let current = head;

    while(current){
        const next = current.next;
        current.next = null;

        if(current.val < x){
            lowTail.next = current;
            lowTail = lowTail.next
        }else {
            highTail.next = current;
            highTail = highTail.next;
        }

        current = next;
    }


    lowTail.next = highDummy.next;
    return lowDummy.next;
};  