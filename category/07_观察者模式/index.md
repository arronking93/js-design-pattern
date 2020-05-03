### 观察者模式
1. 概述：发布---订阅模式又叫观察者模式，它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。
```js
// 主题 保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  attach(observer) {
    this.observers.push(observer)
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

// 测试
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('02', s)

s.setState(12)
```
 
* 其他场景：DOM事件、vue响应式等

2. 优点：
* 支持简单的广播通信，自动通知所有已经订阅过的对象
* 目标对象与观察者之间的抽象耦合关系能单独扩展以及重用
* 增加了灵活性
* 观察者模式所做的工作就是在解耦，让耦合的双方都依赖于抽象，而不是依赖于具体。从而使得各自的变化都不会影响到另一边的变化。

3. 缺点：
* 创建订阅者需要消耗一定的时间和内存。
* 过度使用会导致对象与对象之间的联系弱化，会导致程序难以跟踪维护和理解

4. 实现原理：
* 首先要想好谁是发布者(比如上面的卖家)。
* 然后给发布者添加一个缓存列表，用于存放回调函数来通知订阅者(比如上面的买家收藏了卖家的店铺，卖家通过收藏了该店铺的一个列表名单)。
* 最后就是发布消息，发布者遍历这个缓存列表，依次触发里面存放的订阅者回调函数。