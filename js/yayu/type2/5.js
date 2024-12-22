// Object => Primitive
// valueOf toString
let specialObj = {
  valueOf: function () {
    console.log('Calling valueOf...')
    return 123
  },
  toString: function () {
    return "456"
  }
}

// console.log(Number(specialObj))
let objectWiehoutPrimitiveValueOf = {
  valueOf: function () {
    console.log("Calling valueof ...")
    return this
  },
  toString: function () {
    console.log("Calling toString ...")
    return "789"
  }
}
// toPrimitive
console.log(Number(objectWiehoutPrimitiveValueOf))

let problemObj = {
  valueOf: function () {
    console.log("Calling valueof ...")
    return this
  },
  toString: function () {
    console.log("Calling toString ...")
    return this
  }
}
try{
  console.log(Number(problemObj))
} catch (e) {
  console.error(e)
}