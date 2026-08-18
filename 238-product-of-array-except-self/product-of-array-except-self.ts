function productExceptSelf(nums: number[]): number[] {
    let leftProducts = [];
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        leftProducts[i] = leftProduct;
        leftProduct *= nums[i]
    }

    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        leftProducts[i] = leftProducts[i] * rightProduct
        rightProduct *= nums[i]
    }

    return leftProducts
};