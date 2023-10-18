function findPairsWithSum(arr, targetSum) {
    const pairs = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

const input1 = [2, 4, 6, 8, 10];
const targetSum1 = 12;
const output1 = findPairsWithSum(input1, targetSum1);
console.log(output1); 

