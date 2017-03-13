/*
Your previous Python 3 content is preserved below:

d = {'0': ['A', 'B'], '1': ['C', 'D'], '9': ['Z']}

# '019' -> ['ACZ', 'ADZ', 'BCZ', 'BDZ']
def strings(num):
 */


var d = {'0': ['A', 'B'], '1': ['C', 'D'], '9': ['Z']}

// 019
// strings(num) -> ['ACZ', 'ADZ', 'BCZ', 'BDZ']
function strings(num) {
  var digits = num.split('')
  var results = []

  var sets = []

  digits.forEach(function (digit) {
    sets.push(d[digit])
  })

  function findPermutations(arr) {
    if (arr.length == 1) {
      return arr[0]
    } else {
      var result = []
      var permutationsOfRemainder = findPermutations(arr.slice(1))
      for (var i=0; i < permutationsOfRemainder.length; i++) {
        for(var j=0; j < arr[0].length; j++) {
          result.push(arr[0][j] + permutationsOfRemainder[i])
        }
      }
      return result;
    }
  }

  return findPermutations(sets).sort()
}

console.log(strings('019'))
