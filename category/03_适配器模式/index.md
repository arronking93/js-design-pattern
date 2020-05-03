### 适配器模式
1. 概述：将一个类的接口转化为另外一个接口，以满足用户需求，使类之间接口不兼容问题通过适配器得以解决。
```js
class Plug {
  getName() {
    return 'iphone充电头';
  }
}

class Target {
  constructor() {
    this.plug = new Plug();
  }
  getName() {
    return this.plug.getName() + ' 适配器Type-c充电头';
  }
}

let target = new Target();
target.getName(); // iphone充电头 适配器转Type-c充电头
```

2. 优点：
* 可以让任何两个没有关联的类一起运行。
* 提高了类的复用。

3. 场景：
* 整合第三方SDK
* 封装旧接口
* vue中computed
```js
// 自己封装的ajax， 使用方式如下
ajax({
    url: '/getData',
    type: 'Post',
    dataType: 'json',
    data: {
        test: 111
    }
}).done(function() {})
// 因为历史原因，代码中全都是：
// $.ajax({....})

// 做一层适配器
var $ = {
    ajax: function (options) {
        return ajax(options)
    }
}
```
4. 适配器与代理模式相似
* 适配器模式：提供一个不同的接口（如不同版本的插头）
* 代理模式：提供一模一样的接口