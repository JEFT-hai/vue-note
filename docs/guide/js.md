

## 何时使用===何时使用==

* === 完全相等，类型与值都相等
* == 会进行类型转换, 一般 判断值为null||undefined时候使用 val == null

## window.onload与DOMContentLoaded区别

* window.onload所有资源都加载完毕，包括图片视频等媒体资源
* DOMContentLoaded指所有文档资源加载完毕，不包括图片视频等媒体资源

## js建立10个a标签，点击弹出对应序号

``` js
for (let a = 0; a < 10; a++) {
    var $a = document.createElement('a');
    $a.innerText = a;
    $a.addEventListener('click', function() {
        console.log(a);
    });
    document.body.append($a);
}
```

## 手写throttle,debounce

* throttle:

``` js
    throttle (fn, wait = 500) {
        let timer = null;
        return function() {
            if (timer) return;
            timer = setTimeout(() =>{
                timer = null;
                fn.apply(this, arguments);
            }, wait)
        }
    }
```

* debounce

``` js
    debounce(fn, wait = 500) {
        let timer = null;
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, arguments);
            }, wait);
        }
    }
```

## promise解决什么问题

* 异步回调

## typeof能判断哪些类型

* 所有值类型： number, string, boolean, undefined, symbol + function
* object

## js类型

* 值类型： number, string, boolean, undefine, null, symbol, bigint
* 引用类型：object(array, object, null, function)

  * 引用类型使用instanceof 或者 Object.prototype.toString.call().slice(8, -1)

## 深拷贝

``` js
  deepClone(target) {
      if (typeof target !== 'object' || target == null) {
          return target
      }
      const isArray = Array.isArray(target);
      const data = isArray ? [] : {};
      for (let key in target) {
          if (target.hasOwnProperty(key)) {
              data[key] = deepClone(target[key]);
          }
      }
      return data;
  }
```

## falsely

0, NAN, '', null, undefined, false