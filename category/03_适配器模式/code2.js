// 自己封装的ajax， 使用方式如下
ajax({
  url: '/getData',
  type: 'Post',
  dataType: 'json',
  data: {
    test: 111,
  },
}).done(function () {})
// 因为历史原因，代码中全都是：
// $.ajax({....})

// 做一层适配器
var $ = {
  ajax: function (options) {
    return ajax(options)
  }
}
