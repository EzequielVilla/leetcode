function removeDuplicates(nums: number[]): number {
  const arrLength = nums.length;
  const nonRepeatedNumsArr: number[] = [];
  const repeatedNumsArr: number[] = [];
  for (let i = 0; i < arrLength; i++) {
    const element = nums[i];
    const repeats = nonRepeatedNumsArr.includes(element);

    if (repeats) {
      repeatedNumsArr.push(element);
    } else {
      nonRepeatedNumsArr.push(element);
    }
  }
  const concatArr = nonRepeatedNumsArr.concat(repeatedNumsArr);
  for (let i = 0; i < arrLength; i++) {
    nums[i] = concatArr[i];
  }
  return nonRepeatedNumsArr.length;
}

const removeDuplicatesNums1 = [1, 1, 2];
const removeDuplicatesNums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log({
  r1: removeDuplicates(removeDuplicatesNums1),
  r2: removeDuplicates(removeDuplicatesNums2),
});
