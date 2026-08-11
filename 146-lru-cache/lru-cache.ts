
// JavaScript Map preserves insertion order, so we use it instead of a doubly linked list.
// First key = least recently used; last key = most recently used.
class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const value = this.cache.get(key);

        // Reinsert so this key becomes most recently used
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, value);

        if (this.cache.size > this.capacity) {
            const leastRecentlyUsedKey = this.cache.keys().next().value;
            this.cache.delete(leastRecentlyUsedKey);
        }
    }
}





/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */