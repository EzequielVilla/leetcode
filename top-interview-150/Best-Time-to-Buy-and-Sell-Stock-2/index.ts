function maxProfit(prices: number[]): number {
  const length = prices.length;
  let lowestPrice = prices[0];
  let highestPrice = prices[0];
  let profits: number[] = [];

  for (let day = 0; day < length; day++) {
    const dayPrice = prices[day];
    const nextDayPrice = prices[day + 1];

    if (dayPrice >= highestPrice) {
      highestPrice = dayPrice;
    }
    if (dayPrice < lowestPrice) {
      lowestPrice = dayPrice;
      highestPrice = dayPrice;
    }
    const itsGoingDown = highestPrice - lowestPrice === 0;
    if ((nextDayPrice < highestPrice && !itsGoingDown) || !nextDayPrice) {
      const profit = highestPrice - lowestPrice;
      profits.push(profit);
      lowestPrice = dayPrice;
      highestPrice = dayPrice;
    }
  }
  let profit = 0;
  const profitsLength = profits.length;
  for (let i = 0; i < profitsLength; i++) {
    profit += profits[i];
  }
  return profit;
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
// [1,2,3,4,5]
// [7,1,5,3,6,4]
