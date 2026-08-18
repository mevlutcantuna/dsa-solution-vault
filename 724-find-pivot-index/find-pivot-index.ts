function pivotIndex(nums: number[]): number {
    let prefix = 0;
    let prefixTemp = []

    for(let i = 0; i < nums.length; i++){
        prefix += nums[i];
        prefixTemp.push(prefix);
    }
    
    let suffix = 0;
    let suffixTemp = []

    for(let i = nums.length - 1; i >= 0; i--){
        suffix += nums[i];
        suffixTemp.unshift(suffix);
    }

    for(let i = 0; i < prefixTemp.length; i++){
        if(prefixTemp[i] === suffixTemp[i]) return i;
    }

    return -1;
};