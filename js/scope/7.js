function foo() {
  b = 2;//LHS 查询 默认声明变量
}
foo();
// LHS b 全局
console.log(b);