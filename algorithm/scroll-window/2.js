const mySet = new Set();
// es6 set 不重复的容器
mySet.add(1);
mySet.add("hello")
mySet.add(true)
console.log(mySet)
console.log(mySet.has(1))
mySet.delete(1)
console.log(mySet)
for(const item of mySet){
  console.log(item)
}
console.log(Array.from(mySetS))