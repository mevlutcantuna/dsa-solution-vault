function checkSubarraySum(nums: number[], k: number): boolean {
    let total = 0;
    let remainder = new Map();
    remainder.set(0, -1)
    // store like that = remander -> index

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        let r = total % k;
        if(!remainder.has(r)){
            remainder.set(r, i)
        }else if(i - remainder.get(r) >= 2){
            return true
        }
    }

    return false
};
