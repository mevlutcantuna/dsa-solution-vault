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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let tail = dummy;
    let curr1 = list1;
    let curr2 = list2;

    while (curr1 && curr2) {
        if (curr1.val <= curr2.val) {
            tail.next = curr1;
            curr1 = curr1.next
        } else {
            tail.next = curr2;
            curr2 = curr2.next
        }

        // Move tail to the node just added, ready for the next iteration        
        tail = tail.next;
    }

    // Attach the remaining nodes from the non-empty list
    tail.next = curr1 ?? curr2;

    return dummy.next;
};
