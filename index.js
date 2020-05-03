//checkType('165226226326','mobile')
//result：false
let checkType = function (str, type) {
  switch (type) {
    case 'email':
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    case 'mobile':
      return /^1[3|4|5|7|8][0-9]{9}$/.test(str)
    case 'tel':
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    default:
      return true
  }
}

/* 有以下两个问题：
* 如果想添加其他规则就得在函数里面增加 case 。添加一个规则就修改一次！这样违反了开放-封闭原则（对扩展开放，对修改关闭）。而且这样也会导致整个 API 变得臃肿，难维护。
* 比如A页面需要添加一个金额的校验，B页面需要一个日期的校验，但是金额的校验只在A页面需要，日期的校验只在B页面需要。如果一直添加 case 。就是导致A页面把只在B页面需要的校验规则也添加进去，造成不必要的开销。B页面也同理。
=> 增加扩展的接口 */

let checkType = (function () {
  let rules = {
    email(str) {
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    },
    mobile(str) {
      return /^1[3|4|5|7|8][0-9]{9}$/.test(str)
    },
  }
  //暴露接口
  return {
    //校验
    check(str, type) {
      return rules[type] ? rules[type](str) : false
    },
    //添加规则
    addRule(type, fn) {
      rules[type] = fn
    },
  }
})()

//调用方式
//使用mobile校验规则
console.log(checkType.check('188170239', 'mobile'))
//添加金额校验规则
checkType.addRule('money', function (str) {
  return /^[0-9]+(.[0-9]{2})?$/.test(str)
})
//使用金额校验规则
console.log(checkType.check('18.36', 'money'))