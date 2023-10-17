function findIntersection(arr1, arr2) {
  const set = new Set(arr1);
  const intersection = [];
  for (const num of arr2) {
    if (set.has(num)) {
      intersection.push(num);
      set.delete(num);
    }
  }
  return intersection;
}
const input1 = [1, 2, 3, 4, 5];
const input2 = [4, 5, 6, 7, 8];
const output1 = findIntersection(input1, input2);
console.log(output1); // Output: [4, 5]
