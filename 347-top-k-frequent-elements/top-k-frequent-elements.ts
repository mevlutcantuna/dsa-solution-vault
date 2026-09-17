function topKFrequent(nums: number[], k: number): number[] {
    let map: { [key: number]: number } = {};
    let bucket: Set<string>[] = [];
    let result: number[] = [];

    for (const num of nums) {
        map[num] = (map[num] ?? 0) + 1;
    }

    for (const [num, freq] of Object.entries(map)) {
        if (!bucket[freq]) {
            bucket[freq] = new Set();
        }

        bucket[freq].add(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            for (const num of bucket[i]) {
                result.push(Number(num));

                if (result.length === k) {
                    return result;
                }
            }
        }
    }

    return result;
}