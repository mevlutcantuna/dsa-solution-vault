function runningSum(nums: number[]): number[] {
    let result = new Array(nums.length).fill(0);

    let preSum = 0;
    for(let i = 0; i < nums.length; i++){
        result[i] = nums[i] + preSum 
        preSum += nums[i]
    } 

    return result
};