function runningSum(nums: number[]): number[] {
    let prefix = 0;

    for(let i = 0; i < nums.length; i++){
        prefix += nums[i]
        nums[i] = prefix
    }

    return nums;
};