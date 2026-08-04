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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    // main idea
    // we get one from start, one from end and merge them until using all nodes
    // split: first half: 1 -> 2 -> 3 second half: 4 -> 5
    // reverse second half: first half:1 -> 2 -> 3 second half: 5 -> 4 
    // merge via get one first then second: 1 -> 5 -> 2 -> 4 -> 3 done. 

    // psudocode
    // - split the list by half of it
    // - reverse the second half of it
    // - merge them

    // find the middle via slow and fast pointers technique
    // when fast pointer reaches the end, slow pointer will point the middle element;
    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next){
        slow = slow.next; // move one step
        fast = fast.next.next; // move two step
    }

    // reverse second half
    let second = slow.next
    slow.next = null; 
    let prev = null;

    while(second){
        const next = second.next;
        second.next = prev;
        prev = second
        second = next;
    }

    second = prev;

    // merge
    let first = head;
    while(second){
        const tmp1 = first.next;
        const tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
};