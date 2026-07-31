function maxProfit(prices: number[]): number {
    let max = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }else {
            max = Math.max(max, prices[i] - minPrice);
        }
    }

    return max;
};