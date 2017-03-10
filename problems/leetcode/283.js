var nums = [0,0, 0, 0,0, 1, 0, 3, 12]

function moveZeroes(nums) {
  var nonZeroCount = 0;

  for (i=0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroCount] = nums[i]
      nonZeroCount++
    }
  }

  while (nonZeroCount < nums.length ) {
    nums[nonZeroCount] = 0
    nonZeroCount++
  }

  return nums
}

console.log(moveZeroes(nums))

