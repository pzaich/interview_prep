const sentence = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

function findParen(str, openingPos) {
  var openedParens = 0
  var closingParenPos
  const strArr = str.split('')

  for (var i=0; i < strArr.length; i++) {
    var char = strArr[i]
    if (char === "(") {
      openedParens += 1
    } else if ( char === ")") {
      openedParens -= 1
      if (openedParens === 0) {
        closingParenPos = i
        break;
      }
    }
  }

  return closingParenPos
}

console.log(findParen(sentence, 10))
