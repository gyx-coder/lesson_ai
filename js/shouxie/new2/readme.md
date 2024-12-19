- 创建一个空对象
- 构造函数执行并绑定this，完成对象属性的设置
- 对象的__proto__属性指向构造函数的prototype
- 如果构造函数的返回值是对象，返回构造函数的返回值
(JSON 反复写属性：value，只构造就方便多了，不需要prototype的/时候可以)
- 返回实例对象

- 得分点
  - ed5 arguments.shift.call
  - es6 ...args
  - 构造函数的返回值
    - prototype 不需要，只要构造过程，那么直接返回是有需要的，比JSON方便
    - return null 也接受