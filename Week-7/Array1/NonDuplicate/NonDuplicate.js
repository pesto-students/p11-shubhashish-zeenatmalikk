const inputNum = prompt("Please enter an array of numbers separated by spaces");
if (!inputNum.includes(" ")) {
  alert("Please enter space between 2 numbers");
} else {
  const numArr = inputNum.split(" ").map(Number);
  let frequency = {};
  for (let i = 0; i < numArr.length; i++) {
    const num = numArr[i];
    if (frequency[num]) {
      //if the number is already present
      frequency[num]++;
    } else {
      frequency[num] = 1; //if the number is not present
    }
  }

  let nonDuplicate;
  for (let i = 0; i < numArr.length; i++) {
    const num = numArr[i];
    if (frequency[num] === 1) {
      nonDuplicate = num;
      break;
    }
  }
  if (nonDuplicate == undefined) {
    console.log("No non-duplicate elemenrs are found");
  } else {
    console.log("non-duplicate elements are", nonDuplicate);
  }
//   console.log("inputArr", numArr);
}
