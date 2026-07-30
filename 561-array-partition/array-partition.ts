function arrayPairSum(nums: number[]): number {
    const OFFSET = 10000;
    const counts = new Array(20_001).fill(0);

    for (const num of nums) {
        counts[num + OFFSET]++;
    }

    let sum = 0;
    let take = true;

    for (let i = 0; i < counts.length; i++) {
        while (counts[i] > 0) {
            const num = i - OFFSET
            if (take) sum += num;
            take = !take;
            counts[i]--;
        }
    }

    return sum;
};