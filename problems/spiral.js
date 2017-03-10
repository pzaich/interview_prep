var matrix = [
              [1, 2, 3, 4],
              [5, 6, 7, 8],
              [9, 10, 11, 12],
              [13, 14, 15, 16]
             ]

function printSpiral(matrix) {
  var spiral = []

  function _getVertCol(colIndex=null) {
    var col = []
    matrix.forEach(function (row) {
      var val;
      val = colIndex === 0 ? row.shift() : row.pop()
      col.push(val)
    })

    return col
  }

  function _unpeel(matrix) {
    // top
    var top = matrix.shift()
    var right =  _getVertCol()
    var bottom = matrix.pop().reverse()
    var left = _getVertCol(0).reverse()
    var sides = [top, right, bottom, left]
    sides.forEach(function (arr) {
      arr.forEach(function (item) {
        if (item) spiral.push(item)
      })
    })

    if (matrix.length > 0) {
      console.log(matrix)
      _unpeel(matrix)
    }
  }

  _unpeel(matrix)
  return spiral.join(",")
}


console.log(printSpiral(matrix))


matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

function printSpiralIterative(matrix) {
  var result = []
  var l = 0;
  var length = matrix.length;

  while(l < length) {
    var endPoint = length - l
    // top
    for (var i=l; i < endPoint - 1; i++ ) {
      result.push(matrix[l][i])
    }
    // right
    for (var k=l; k < endPoint; k++) {
      result.push(matrix[k][endPoint-1])
    }
    // bottom
    for (var j=endPoint-2; j >= l; j--) {
      result.push(matrix[endPoint-1][j])
    }
    for (var z=endPoint-2; z > l; z--) {
      result.push(matrix[z][l])
    }
    l++

    console.log(l)
    console.log(result)
  }

  return result.join(",")
}

console.log(printSpiralIterative(matrix))
