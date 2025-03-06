function candy(ratings: number[]): number {
  // check the current, if this changes, looks from behind if they must change
  const length = ratings.length;
  if (length === 1) {
    return 1;
  }

  let candies: number[] = [];
  for (let i = 0; i < length; i++) {
    const preRating = ratings[i - 1];
    const rating = ratings[i];
    const postRating = ratings[i + 1];
    if (preRating == undefined) {
      if (rating <= postRating) {
        candies[i] = 1;
      } else {
        candies[i] = 2;
      }
    } else if (postRating == undefined) {
      if (preRating >= rating) {
        candies[i] = 1;
      } else {
        candies[i] = candies[i - 1] + 1;
      }
    } else if (preRating < rating) {
      candies[i] = candies[i - 1] + 1;
      //
    } else if (rating > postRating) {
      //
      candies[i] = 2;
      if (i - 1 >= 0) {
        for (let j = i - 1; j >= 0; j--) {
          if (ratings[j] > ratings[j + 1] && candies[j] <= candies[j + 1]) {
            candies[j] = candies[j] + 1;
          } else {
            break;
          }
        }
      }
    } else if (preRating == rating || rating == postRating) {
      candies[i] = 1;
    } else if (rating < preRating && rating < postRating) {
      candies[i] = 1;
    }
  }
  let totalCandies = 0;
  for (let i = 0; i < length; i++) {
    const candy = candies[i];
    totalCandies += candy;
  }

  return totalCandies;
}

// console.log({ r1: candy([1, 2, 87, 87, 87, 2, 1]) }); // 13
// console.log({ r2: candy([1, 6, 10, 8, 7, 3, 2]) });
console.log({ r3: candy([3, 2, 1, 1, 4, 3, 3]) }); // 11
// console.log({ r4: candy([1, 3, 4, 5, 2]) }); //
