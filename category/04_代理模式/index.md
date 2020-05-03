### 代理模式
1. 概述：是为一个对象提供一个代用品或占位符，以便控制对它的访问。
* 代理是一个对象，跟本体对象具有相同的接口，以此达到对本体对象的访问控制。简单言之，本体对象只注重业务逻辑的实现，代理则控制本体对象的实例化（何时实例化、何时被使用）。
> 假设当A 在心情好的时候收到花，小明表白成功的几率有
60%，而当A 在心情差的时候收到花，小明表白的成功率无限趋近于0。
小明跟A 刚刚认识两天，还无法辨别A 什么时候心情好。如果不合时宜地把花送给A，花被直接扔掉的可能性很大，这束花可是小明吃了7天泡面换来的。但是A的朋友B却很了解A，所以小明只管把花交给B，B会监听A 的心情变化，然后选择A心情好的时候把花转交给A，代码如下：
```js
let Flower = function() {}
let xiaoming = {
  sendFlower: function(target) {
    let flower = new Flower()
    target.receiveFlower(flower)
  }
}
let B = {
  receiveFlower: function(flower) {
    A.listenGoodMood(function() {
      A.receiveFlower(flower)
    })
  }
}
let A = {
  receiveFlower: function(flower) {
    console.log('收到花'+ flower)
  },
  listenGoodMood: function(fn) {
    setTimeout(function() {
      fn()
    }, 1000)
  }
}
xiaoming.sendFlower(B)
```

2. 优点：代理对象可以代替本体对象被实例化，此时本体对象未真正实例化，等到合适时机再实例化。

3. 场景：代理模式可以延迟创建开销很大的本体对象，他会把本体的实例化推迟到有方法被调用时。