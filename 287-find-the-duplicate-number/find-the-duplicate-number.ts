function findDuplicate(nums: number[]): number {
    let fast = nums[0], slow = nums[0];

    // proves we have a cycle 
    while(true){
        fast = nums[nums[fast]];
        slow = nums[slow];
        if(fast === slow) break;
    }

    // find where the the cycle is (by resetting both to 1x speed)
    fast = nums[0];
    while(fast !== slow){
        fast = nums[fast];
        slow = nums[slow]
    }

    return slow

    return 2
};