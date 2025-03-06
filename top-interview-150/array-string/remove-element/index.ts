function removeElement(nums: number[], val: number): number {
  let noRepeats = 0;
  const numsLength = nums.length;
  const auxRepeated: number[] = [];
  const aux: number[] = [];
  for (let i = 0; i < numsLength; i++) {
    const element = nums[i];

    if (val !== element) {
      aux.push(element);
      noRepeats++;
    } else {
      auxRepeated.push(element);
    }
  }
  const result = aux.concat(auxRepeated);
  for (let i = 0; i < numsLength; i++) {
    nums[i] = result[i];
  }
  console.log({ nums });

  return noRepeats;
}

const nums = [3, 2, 2, 3],
  val = 3;

const nums22 = [0, 1, 2, 2, 3, 0, 4, 2],
  val2 = 2;
const r1 = removeElement(nums, val);
const r2 = removeElement(nums22, val2);

console.log({ r1, r2 });
