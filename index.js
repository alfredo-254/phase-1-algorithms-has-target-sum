function hasTargetSum(arr, target) {
  // Use a set to store the numbers encountered so far
  const numSet = new Set();

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
      // Calculate the complement needed to reach the target
      const complement = target - arr[i];

      // Check if the complement is already in the set
      if (numSet.has(complement)) {
          // Found a pair that adds up to the target
          return true;
      }

      // Add the current number to the set
      numSet.add(arr[i]);
  }

  // No pair found
  return false;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const targetSum = 9;
const result = hasTargetSum(numbers, targetSum);

if (result) {
  console.log(`There is a pair that adds up to ${targetSum}.`);
} else {
  console.log(`No pair adds up to ${targetSum}.`);
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([32,24,5,25,26],29));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([17, 32, 15], 42));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}


module.exports = hasTargetSum;
