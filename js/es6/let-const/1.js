//大厂语法基础题
//局部作用域
function sayHello() {
  //变量
  var name = "金子涛"
  return "hello " + name
}

//es5 全局作用域
var age = 10;
// 代码块
// 块级作用域
if (age > 5) {
  var name = "过帅"
  // es6 新增的let 变量声明
  let dogYears = age * 7
  console.log("You are " + dogYears + " dog years old.")
}

console.log(name, 'name');
// console.log(dogYears, 'dogYears');

console.log(sayHello());
