/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null;

    const copies = new Map<_Node, _Node>();

    let cur: _Node | null = head;
    while (cur) {
        copies.set(cur, new _Node(cur.val));
        cur = cur.next;
    }

    cur = head;
    while (cur) {
        const copy = copies.get(cur)!;
        copy.next = cur.next ? copies.get(cur.next)! : null;
        copy.random = cur.random ? copies.get(cur.random)! : null;
        cur = cur.next;
    }

    return copies.get(head)!;
}