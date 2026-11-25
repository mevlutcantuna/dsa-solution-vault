function maxArea(height: number[]): number {
    let max = -Infinity;
    let left = 0;
    let right = height.length - 1;

    while(left<right){
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;

        if(height[left] < height[right]) left++
        else if(height[left] > height[right]) right--
        else {
            left++
            right--
        }

        max = Math.max(max, area)
    }

    return max
};