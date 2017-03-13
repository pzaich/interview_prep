// Write a recursive function for generating all permutations of an input string.
// Return them as a set

var str = "abc"

"abc"
"bac"
"bca"
"bca"
"cba"
"cab"

function getPermutations (str) {
  if (str.length <= 1) {
    return new Set(str)
  }

  var remainingString = str.slice(0, -1)
  var last = str[str.length-1]

  var permutationsOfRemainingChars = getPermutations(remainingString)

  var permutations = new Set()
  permutationsOfRemainingChars.forEach(function(permutation) {

    // Loop further to append to end of array
    for(var pos = 0; pos <= permutation.length; pos++) {
      var fullPerm = permutation.slice(0, pos) + last + permutation.slice(pos)
      permutations.add(fullPerm)
    }
  })

  return permutations
}

console.log(getPermutations(str))


function findPermutations(str) {
  if (str.length <= 1) {
    return new Set(str)
  }
  var remainingStr = str.slice(1)
  var front = str[0]

  var remainingStringPermutations = findPermutations(remainingStr)

  var permutations = new Set()

  // for (var i=0; i < remainingStringPermutations.)

  remainingStringPermutations.forEach(function (subPermutation) {
    for(var i=0; i <= subPermutation.length; i++) {
      var perm = subPermutation.slice(0, i) + front + subPermutation.slice(i)
      permutations.add(perm)
    }
  })

  return permutations
}

console.log(findPermutations(str))
