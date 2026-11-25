function findMin(nums: number[]): number {
    let result = 0;

    let left = 0;
    let right = 1;

    while(nums[left]<nums[right] && right < nums.length){
        left++
        right++
    }

    return nums[right] ?? nums[0]
};