# 走进js，走进伢羽

- 造对象
  - 对象字面量
    简单，直接，但随意且不灵活
  - es6 class
    批量造？ class Person
    new
  - 类是抽象概念 封装(方法和属性)，是模板(对象字面量好的)
  - 传统的面向对象思想来开发JS，es5 不支持class 关键字

- 构造函数 
  - js 面向对象的任务函数担起来了
  - 构造函数 首字母大写，区分于普通函数
  - this 指针 指向 实例对象
    完成构造(实例化)的过程
    new 运算符 Person() 
  
- 函数是不是构造函数，不是由首字母大写决定的，
  而是由 new 运算符，调用方式决定的
  - 构造函数首字母大写 其实是编程风格，约定

- js 构造函数可以独立完成实例化 
  - 原型
  Person.prototype.eat

  - 类的方法部分由原型 (prototype) 完成
  - 函数都是对象，函数对象都有一个prototype 属性

- js es5 的类的构建 = 构造函数 (属性，对象的) + 原型 (方法，所有实例共享，性能 + 没有必要归对象，this可以找到对象)

- js 面向对象是原型式的面向对象(设计哲学)，就好像中国人以孔子为原型，不是血缘关系
  Person.prototype 

- 将函数对象的prototype 设置为某对象(cy)，
  比class 好，
    class{
      constructor(){
        this.name = 'cy'
      }
      eat(){
        
      }
    }
    对象可以共享原型对象上的方法
    js 原型式的面向对象 是王者


## 三者关系
- 构造函数
- 原型对象
  不像class 绑在一起，拆的开
- 实例