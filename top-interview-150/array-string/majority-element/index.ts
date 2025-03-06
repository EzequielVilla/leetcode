function majorityElement(nums: number[]): number {
  const length = nums.length;
  const map = new Map();

  for (let i = 0; i < length; i++) {
    const element = nums[i];
    const number = map.get(element);
    if (!number) {
      map.set(element, 1);
    } else {
      const plus = number + 1;
      map.set(element, plus);
    }
  }
  let mostRepeatedNumber = 0,
    timesRepeated = 0;
  map.forEach((value, key) => {
    if (value > timesRepeated) {
      timesRepeated = value;
      mostRepeatedNumber = key;
    }
  });
  return mostRepeatedNumber;
}

const majority1 = [3, 2, 3];
const majority2 = [2, 2, 1, 1, 1, 2, 2];

const resMajority1 = majorityElement(majority1);
const resMajority2 = majorityElement(majority2);

console.log({ resMajority1, resMajority2 });

// Best response in time by leetcode sample:
// function majorityElement(nums: number[]): number {
//     let candidate = null;
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (count == 0) candidate = nums[i]

//         if (nums[i] === candidate) {
//             count++
//         } else {
//             count--;
//         }
//     }
//     return candidate;
// };
