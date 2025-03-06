function removeDuplicates2(nums: number[]): number {
  const arrLength = nums.length;
  const nonRepeatedTwiceNumsArr: number[] = [];
  const repeatedNumsArr: number[] = [];
  for (let i = 0; i < arrLength; i++) {
    const element = nums[i];
    const repeatedArr = nonRepeatedTwiceNumsArr.filter((item) => {
      return item === element;
    });
    const repeatsTwice = repeatedArr.length === 2;
    if (repeatsTwice) {
      repeatedNumsArr.push(element);
    } else {
      nonRepeatedTwiceNumsArr.push(element);
    }
  }
  const concatArr = nonRepeatedTwiceNumsArr.concat(repeatedNumsArr);
  for (let i = 0; i < arrLength; i++) {
    nums[i] = concatArr[i];
  }
  return nonRepeatedTwiceNumsArr.length;
}

// this solution consume less memory but take more time
function removeDuplicates3(nums: number[]): number {
  const arrLength = nums.length;
  const repeatedTwice: number[] = [];
  const nonRepeatedTwice: number[] = [];

  for (let i = 0; i < arrLength; i++) {
    const element = nums[i];
    let repeatsTwice = 0;
    for (let j = 0; j < repeatedTwice.length; j++) {
      const elementRepeated = repeatedTwice[j];
      if (repeatsTwice === 2) {
        break;
      }

      if (element == elementRepeated) {
        repeatsTwice++;
      }
    }

    if (repeatsTwice == 2) {
      nonRepeatedTwice.push(element);
    } else {
      repeatedTwice.push(element);
    }
  }
  const concatArr = repeatedTwice.concat(nonRepeatedTwice);
  for (let i = 0; i < arrLength; i++) {
    nums[i] = concatArr[i];
  }
  return repeatedTwice.length;
}
const removeDuplicates3NumsII1 = [1, 1, 1, 2, 2, 3];
const removeDuplicates3NumsII2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];

console.log({
  r1: removeDuplicates3(removeDuplicates3NumsII1),
  r2: removeDuplicates3(removeDuplicates3NumsII2),
});

// BEST RESPONSE, copied from leetcode as a sample code of much less time
// function removeDuplicates(nums: number[]): number {
//   if (nums.length <= 2) {
//     return nums.length;
//   }

//   let k = 2;

//   for (let i = 2; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 2]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k;
// }
