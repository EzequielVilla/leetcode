/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const nums1Length = nums1.length;
  let start = 0;
  for (let i = m; i < nums1Length; i++) {
    nums1[i] = nums2[start];
    start++;
  }
  nums1.sort((a, b) => a - b);
}

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);

const nu2 = [1],
  m2 = 1,
  nu3 = [],
  n2 = 0;

merge(nu2, m2, nu3, n2);
