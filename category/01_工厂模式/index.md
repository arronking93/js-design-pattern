#### 工厂模式
1. 概述：工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。
```js
class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log('init')
    }
    fun() {
        console.log('fun')
    }
}

class Factory {
    create(name) {
        return new Product(name)
    }
}

// use
let factory = new Factory()
let p = factory.create('p1')
p.init()
p.fun()
```
总结：
* 工厂模式最重要的优点是：可以在父类实现一些相同的方法，而具体要实现的业务逻辑可以放在子类中，通过子类重写父类的方法，去实现自己的业务逻辑。
* 工厂模式弱化对象间的耦合，父类专注于实现重复性的功能，子类专注于具体的业务逻辑，这样可以减少冗余代码。