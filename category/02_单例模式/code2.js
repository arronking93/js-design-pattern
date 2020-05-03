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