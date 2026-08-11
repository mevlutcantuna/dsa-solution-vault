function longestConsecutive(nums: number[]): number {
    let set = new Set([...nums]);

    let longest = 0
    for (const num of set) {
        if(set.has(num - 1)) continue;
        
        let count = 1;
        let cur = num;

        while (set.has(cur + 1)) {
            cur++
            count++
        }

        longest = Math.max(longest, count)
    }

    return longest
};