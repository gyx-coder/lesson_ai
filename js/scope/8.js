"use strict";
// 严格模式时， LHS 查询 失败的时候，会爆出 ReferenceError 错误，报错
function foo() {
  b = 2;
}
foo();