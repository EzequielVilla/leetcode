function trap(heights: number[]): number {
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  let leftPosition = 0;
  let rightPosition = heights.length - 1;
  // look for left and right max
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    if (height != 0) {
      leftMax = height;
      leftPosition = i;

      break;
    }
  }
  for (let i = heights.length - 1; i > 0; i--) {
    const height = heights[i];
    if (height != 0) {
      rightMax = height;
      rightPosition = i;
      break;
    }
  }
  for (let index = leftPosition; index < heights.length; index++) {
    if (leftPosition > rightPosition) {
      break;
    }
    if (leftMax <= rightMax) {
      for (let i = leftPosition + 1; i <= rightPosition; i++) {
        const height = heights[i];
        if (height < leftMax) {
          const fill = leftMax - height;
          water += fill;
          leftPosition++;
        } else {
          leftMax = height;
          leftPosition++;
          break;
        }
      }
    } else {
      for (let i = rightPosition - 1; i >= leftPosition; i--) {
        const height = heights[i];
        if (height < rightMax) {
          const fill = rightMax - height;
          water += fill;

          rightPosition--;
        } else {
          rightMax = height;
          rightPosition--;
          break;
        }
      }
    }
  }

  return water;
}

// console.log({ r1: trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) });

// console.log({ r1: trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) });
//----------------------0, 1 ,2, 3, 4, 5, 6, 7, 8, 9,10,11
console.log({ r1: trap([4, 2, 0, 3, 2, 5]) }); //9
//----------------------0, 1 ,2, 3, 4, 5,
// console.log({ r1: trap([1, 1, 1, 1, 1]) });
// console.log({ r1: trap([4, 2, 3]) }); // 1
