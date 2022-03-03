<!--
 * @Author: your name
 * @Date: 2022-03-03 01:45:20
 * @LastEditTime: 2022-03-04 00:49:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\docs\guide\js.md
-->
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

# 变量类型计算

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

## 何时使用===何时使用==

* === 完全相等，类型与值都相等
* == 会进行类型转换, 一般 判断值为null||undefined时候使用 val == null

# 原型原型链

## 如何判断一个变量是不是数组

* a instanceof Array
* Object.prototype.toString.call(a).slice(8. -1) === 'Array'

## 手写一个jquery

``` js
    class Jquery {
        constructor(sel) {
            const results = document.querySelectorAll(sel);
            for(let i = 0; i < results.length; i++) {
                this[i] = results[i];
            }
            this.length = results.length;
            this.selector = ael;
        }
        get(index) {
            return this[index];
        }
        each(fn) {
            for(let i = 0; i < this.length; i++) {
                fn(this[i]);
            }
        }
        on(event, fn) {
            this.each((elem) => {
                elem.addEventListener(event, fn, false)
            })
        }
    }
```

## class原型本质，怎么理解

* class本质就是function
* 子类可以通过extends与super继承父类
* 每一个原型都有一个原型属性，prototype
* 每一个实例都有一个隐式原型，__protp__, 两者相等

# 作用域与闭包

## this的不同使用场景，如何取值

* 有对象指向对象
* 没对象指向全局变量window
* 有new 指向new出的新对象
* apply, bind, call改变this指向
* 箭头函数指向父级作用域


## 手写bind

``` js
Function.prototype.myBind = function() {
    const self = this;
    const args = Array.prototype.slice.call(arguments);
    const target = args.shift();
    return function() {
        return  self.apply(target, args);
    }
}
```

## 实际开发中使用闭包的场景，举例说明

* 函数作为参数
* 函数作为返回值被返回

## 作用域

* 全局作用域
* 函数作用域
* 块级作用域

## 自由变量

* 一个变量在当前作用域没有定于，但使用了
* 向上级作用域一级一级查找，直到找到为止
* 到全局作用域还没有找到就报错，undefined

## 闭包概念

* 闭包就是能过够访问其他函数内部变量的函数

# 异步与单线程

## 单线程

* 同事只能执行一件事

## 同步与异步的区别

* 同步会阻塞代码的执行，异步不会

## 手写promise加载一张图片

``` js
function loadImg(src) {
    return new Promise(resolve, reject) {
        const $img = document.createElement('image');
        $img.onload = function() {
            resolve();
        }
        $img.onerror = function() {
            reject('load error')
        }
        $img.src = src;
    }
}
```

## 前端使用异步的场景

* 定时函数
* 网络请求
* 事件绑定

# DOM

## 获取dom操作

* getElementById getElementsByClassName getElementsByTagName querySelectorAll

## property 与 attribute区别

* property是对象属性，不体现在html中
* attribute是html属性，体现在html中

## dom操作

* 增 appendChild appendTo
* 删 removeChild
* 父子 parentNode childNodes

## 一次性插入多个数据

* 使用片段 document.createDocumentFragment()

# BOM

## 如何辨别浏览器类型

* navigator.userAgent;

# 事件

## js事件流三个阶段

* 捕获 - 目标 - 冒泡

## 事件代理

* 利用冒泡事件的原理，将监听操作绑定到父元素上。

## 事件绑定的优点

* 可以监听动态子元素的事件

# ajax

## 手写xhr

```js
    function xhrR(url, method, data = null) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status ==200) {
                    resolve(xhr.responseText)
                } else {
                    reject()
                }
            }
            
            xhr.open(method, url, true);
            xhr.send(data);
        })
    }
```

## 什么是跨域

* 浏览器具有同源策略，协议，域名，端口号，一致为同一域名，否则则为跨域

## 跨域的解决方式

* jsonp
* cors - 后端 access-control-allow-origin: *

## 可以无视同源策略的三个标签

* link img script

# 存储

## cookie

* 存储上限 4kb
* 封装麻烦，document.cookie = ''使用，并会产生覆盖
* 会携带到http请求中

## localStorage sessionStorage

* 永久存储， 会话存储
* 存储上限5M
* getItem, setItem, removeItem键值对操作。

# 开发环境

## git操作总结

* git add .
* git commit -m xxx
* git pull
* git push
* git checkout xxx
* git checkout -b xxx
* git branch
* git status
* git config --global -l
* git remote -v
* git merge
* git clone
* git commit -amend xxx