function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const lastValue = nums.pop()!;
    nums.unshift(lastValue);
  }
}

const rotate1 = [1, 2, 3, 4, 5, 6, 7],
  rotateK1 = 3;
const rotate2 = [-1, -100, 3, 99],
  rotateK2 = 2;

const responseRotate1 = rotate(rotate1, rotateK1);
const responseRotate2 = rotate(rotate2, rotateK2);

// console.log({ responseRotate1, responseRotate2 });
