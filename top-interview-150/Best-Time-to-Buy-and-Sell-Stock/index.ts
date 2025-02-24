function maxProfit1(prices: number[]): number {
  if (prices.length < 2) return 0;
  const length = prices.length;
  let peakDay = 0,
    lowestDay = 0,
    profit = 0;
  for (let day = 0; day < length; day++) {
    const currentPrice = prices[day];
    if (currentPrice >= prices[peakDay]) {
      peakDay = day;
    } else if (currentPrice < prices[lowestDay]) {
      lowestDay = day;
    }
    if (peakDay > lowestDay) {
      const newProfit = prices[peakDay] - prices[lowestDay];
      if (newProfit > profit) profit = newProfit;
    }
    if (peakDay < lowestDay) {
      peakDay = lowestDay;
    }
  }
  return profit;
}

// const maxProfitInput11 = [7, 1, 5, 3, 6, 4];

const maxProfitInput11 = [7, 1, 5, 3, 6, 4];
// const maxProfitInput11 = [2, 4, 1];
// const maxProfitInput11 = [3, 2, 6, 5, 0, 3];
// const maxProfitInput11 = [3, 3, 5, 0, 0, 3, 1, 4];

const maxProfitInput11Response = maxProfit1(maxProfitInput11);
console.log({ maxProfitInput11Response });
// const maxProfitInput12Response = maxProfit1(maxProfitInput12);

// console.log({ maxProfitInput11Response, maxProfitInput12Response });
