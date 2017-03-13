class Node {
  constructor(value=null, next=null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.first = null
    this.last = null
  }

  add(value) {
    var newNode = new Node(value)

    if (!this.first) {
      this.first = newNode
    }

    if (this.last) {
      this.last.next = newNode
    }

    this.last = newNode
  }
}

const linkedList = new LinkedList()

for (let i=0; i< 1000; i++) {
  linkedList.add(i)
}

function printInReverse(ll) {
  var first = ll.first

  function printNext(previous) {
    if (previous) {
      // recurse
      var next = printNext(previous.next)
      console.log(previous.value)
      return previous
    }
  }

  printNext(first)
}

printInReverse(linkedList)
