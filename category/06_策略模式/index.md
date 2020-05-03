1. 概述：策略模式指的是定义一系列的算法，把它们一个个封装起来，将不变的部分和变化的部分隔开，实际就是将算法的使用和实现分离出来。
* 一个基于策略模式的程序至少由2部分组成，第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。第二个部分是环境类Context，该Context接收客户端的请求，随后把请求委托给某一个策略类。
```js
var obj = {
        "A": function(salary) {
            return salary * 4;
        },
        "B" : function(salary) {
            return salary * 3;
        },
        "C" : function(salary) {
            return salary * 2;
        } 
};
var calculateBouns = function(level,salary) {
    return obj[level](salary);
};
console.log(calculateBouns('A',10000)); // 40000
```
[案例](https://juejin.im/post/5c071fbbf265da615f770d2a)

2. 优点： 
* 策略模式可以有效避免很多if条件语句
* 策略模式符合开放-封闭原则，使代码更容易理解和扩展
* 策略模式中的代码可以复用

3. 缺点
会在程序中增加许多策略类或者策略对象
要使用策略模式，必须了解所有的strategy，必须了解各个strategy之间的不同点，这样才能选择一个合适的strategy