// function minSubArrayLen(target: number, nums: number[]): number {
//   //   console.log({ nums });

//   const length = nums.length;
//   let completed = false;
//   let lengthNeeded = 0;
//   let accumulator = 0;
//   for (let i = 0; i < length; i++) {
//     accumulator = initAccumulator(nums, i);
//     if (accumulator >= target) {
//       completed = true;
//       lengthNeeded = i + 1;
//       break;
//     }

//     for (let j = 0; j < length; j++) {
//       //   console.log({ i, j, n1: j - i, n2: i + j });
//       // console.log({ accumulator, sum: nums[j], j });
//       // console.log({ pre: accumulator });
//       const leftValue = nums[j - 1];
//       const rightValue = nums[j + i];
//       if (leftValue == undefined || rightValue == undefined) continue;
//       //   console.log({ pre: accumulator, leftValue, rightValue });

//       accumulator = accumulator - leftValue + rightValue;
//       console.log({ post: accumulator });
//       // console.log({ accumulator, sum: nums[j] });
//       if (accumulator >= target) {
//         completed = true;
//         lengthNeeded = i + 1;
//         break;
//       }
//     }
//     if (completed) break;
//     // console.log("length of array +1");

//     accumulator = 0;
//   }

//   return lengthNeeded;
// }

// function initAccumulator(arr: number[], subArrLength: number) {
//   let sum = 0;
//   const until = subArrLength + 1;
//   for (let i = 0; i < until; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

function minSubArrayLen(target: number, nums: number[]): number {
  const length = nums.length;
  let left = 0;
  let sum = 0;
  let minLength = length + 1;

  for (let right = 0; right < length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === length + 1 ? 0 : minLength;
}
console.log({ r1: minSubArrayLen(11, [1, 2, 3, 4, 5]) }); // 3
// console.log({ r1: minSubArrayLen(15, [1, 2, 3, 4, 5]) }); // 5

console.log({ r1: minSubArrayLen(7, [2, 3, 1, 2, 4, 3]) }); //2

// console.log({ r1: minSubArrayLen(7, [2, 3, 1, 2, 4, 3]) });
