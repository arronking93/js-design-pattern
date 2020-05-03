#### 单例模式
1. 概述：一个类只有一个实例，并提供一个访问它的全局访问点。
* 单例模式思想在于保证一个特定类仅有一个实例，意味着当你第二次使用同一个类创建信对象时，应得到和第一次创建对象完全相同。
```js
 class LoginForm {
    constructor() {
        this.state = 'hide'
    }
    show() {
        if (this.state === 'show') {
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示成功')
    }
    hide() {
        if (this.state === 'hide') {
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏成功')
    }
 }
 LoginForm.getInstance = (function () {
     let instance
     return function () {
        if (!instance) {
            instance = new LoginForm()
        }
        return instance
     }
 })()

let obj1 = LoginForm.getInstance()
obj1.show()

let obj2 = LoginForm.getInstance()
obj2.hide()

console.log(obj1 === obj2)
```
2. 优点:
划分命名空间，减少全局变量
增强模块性，把自己的代码组织在一个全局变量名下，放在单一位置，便于维护
且只会实例化一次。简化了代码的调试和维护

3. 补充：模块模式/模块模式是为单例模式添加私有变量和私有方法，并减少全局变量的使用
```js
var singleMode = (function(){
    // 创建私有变量
    var privateNum = 112;
    // 创建私有方法
    function privateFunc(){},
    // 创建公有方法
    function publicMethod1(){},
    function publicMethod2(){},
    // 返回一个对象包含公有方法和属性
    return {
        publicMethod1: publicMethod1,
        publicMethod2: publicMethod2
    };
})();
```
> 如上代码，模块模式使用了一个返回对象的匿名函数。在这个匿名函数内部，先定义了私有变量和函数，供内部函数使用，然后将一个对象字面量作为函数的值返回，返回的对象字面量中只包含可以公开的属性和方法。这样的话，可以提供外部使用该方法；由于该返回对象中的公有方法是在匿名函数内部定义的，因此它可以访问内部的私有变量和函数。