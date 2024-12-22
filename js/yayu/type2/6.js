let objWithStringValue = {
  toString: function () {
    return "Hello";
  }
}

console.log(String(objWithStringValue))

let objWithValueof = {
  toString: function () {
    return this;
  },
  valueOf:function(){
    return 2
  }
}
console.log(String(objWithValueof))

let objWithoutPrimitive = {
  toString: function () {
    return this;
  },
  valueOf:function(){
    return this
  }
}

try{
  console.log(String(objWithoutPrimitive))
}catch(e){
  console.log(e)}