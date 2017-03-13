var str = "theresystemisrunning" // => the system is running

var wordDictionary = {
  the: 1,
  there: 1,
  resystem: 1,
  system: 1,
  is: 1,
  running: 1
}

function meaningfulWords(str) {
  var words = str.split(' ')
  var remainingRawString = words.pop()

  if (wordDictionary[remainingRawString]) {
    return [str]
  } else {
    var possibleMatches = []

    for (var i=0; i < remainingRawString.length; i++) {
      var possibleMatch = remainingRawString.slice(0,i)
      if (wordDictionary[possibleMatch]) {
        possibleMatches.push(possibleMatch)
      }
    }

    var variations = []

    possibleMatches.forEach(function (match) {
      var wordSet = words.slice()
      var remainingRawStringVariation = remainingRawString.slice(match.length)
      wordSet.push(match)
      wordSet.push(remainingRawStringVariation)
      var variables = meaningfulWords(wordSet.join(" "))

      variables.forEach(function (variation) {
        variations.push(variation)
      })
    })

    return variations
  }
}

console.log(meaningfulWords(str))
console.log(meaningfulWords("somethingelseunmatched"))
