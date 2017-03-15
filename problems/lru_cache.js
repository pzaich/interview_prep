class Node {
  constructor(key, value) {
    this.previous = null
    this.next = null
    this.value = value
    this.key = key
  }
}

// keep these funcs private
const spliceNode = (previousRefNode) => {
  if (previousRefNode) {
    // connect previous node's previous and next
    const prev = previousRefNode.previous
    const next = previousRefNode.next

    if (prev) {
      prev.next = next
    }

    if (next) {
      next.previous = prev
    }
  }
}

class LRUCache {
  // Super basic key size limit
  constructor (keyLimit=100) {
    this.tail = null
    this.head = null
    this.cache = {}
    this.keyLimit = keyLimit
    this.keyCount = 0
  }

  // link list in both directions to easier remove nodes from head
  // and append to tail in O(1). Reference each node with hash keyLimit
  set(key, value) {
    // spliceNode
    const previousRefNode = this.cache[key]
    const tailNode = this.tail

    spliceNode(previousRefNode)

    this.cache[key] = new Node(key, value)

    if (tailNode) {
      tailNode.next = this.cache[key]
      this.tail = this.cache[key]
    }

    // dropHead
    if (this.keyCount >= this.keyLimit) {
      let head = this.head
      this.head = this.head.next
      delete this.cache[head.key]
    } else {
      this.keyCount += 1
    }

    // set initial head and tail on first insertion
    if (!this.head && !this.tail) {
      this.tail = this.cache[key]
      this.head = this.cache[key]
    }
  }

  get(key) {
    const tailNode = this.tail
    const previousRefNode = this.cache[key]
    spliceNode(previousRefNode)

    if (tailNode) {
      tailNode.next = this.cache[key]
    }
    this.tail = this.cache[key]

    return this.cache[key].value
  }

  clear() {
    this.tail = null
    this.head = null
    this.cache = {}
    this.keyLimit = this.keyLimit
    this.keyCount = 0
  }
}

const cache = new LRUCache()

cache.set("hello", "world")
console.log(cache.get("hello"))
cache.set("make", "file")
console.log(cache.keyCount)
console.log(cache.tail.key)
console.log(cache.get("hello"))
console.log(cache.tail.key)

cache.clear()
for (let i=0; i < 110; i++) {
  cache.set(i, i)
}
console.log(Object.keys(cache.cache))
