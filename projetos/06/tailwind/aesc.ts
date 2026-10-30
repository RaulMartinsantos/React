function maxProfit(prices: number[]): number {
  let profit: number = 0;
  let maxProfit: number = 0;
  let minPrice: number = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }

    profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  if (maxProfit > 0) {
    return maxProfit;
  }

  return 0;
}
