function minAndMax(input) {
  let max = input[0];
  let min = input[0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    } else if (input[i] < min) {
      min = input[i];
    }
  }
  return max+min
}
const testCase1 = [5, 2, 9, 1, 7];
console.log(minAndMax(testCase1))
