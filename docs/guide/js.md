<!--
 * @Author: your name
 * @Date: 2022-03-03 01:45:20
 * @LastEditTime: 2022-03-27 17:21:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\docs\guide\js.md
-->


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

## 列举类型转换

* parseInt .toString()
* == if && || + -

# 原型原型链

## 如何判断一个变量是不是数组

* a instanceof Array
* Object.prototype.toString.call(a).slice(8. -1) === 'Array'

## 描述new一个对象的过程

* 创建一个新对象
* 新对象原型指向构造函数原型
* this指向这个新对象，执行函数
* 返回新对象

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

## 说一下变量提升的理解

* 变量声明与函数定义都会提升到方法体顶部

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

## 闭包的作用

* 封装变量
* 收敛权限

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
* git checkout . 撤销文件编辑
* git stash, git stash pop 把编辑的内容更换分支
* git reset --head xxx
* git revert

# 运行环境

## 网页加载与渲染过程

* 加载过程：
  * 浏览器进程间通信将ip发送到网络进程
  * 网络进程通过url,检查是否有缓存，有缓存返回缓存，没缓存通过DNS解析url的ip地址与端口号
  * 根据ip与端口号发送请求，服务器接受请求，返回给浏览器
* 渲染过程
  * 根据html生成dom tree
  * 根据css生成cssom
  * cssom与dom tree合并生成render tree
  * 根据render tree渲染页面
  * 遇到script会暂停渲染，优先加载执行js
  * 直到把render tree渲染完成

## 性能优化

* css放到head,js放到body最下面
* 使用缓存
* 图片懒加载，压缩
* gzip
* 减少网络请求

## window.onload与DOMContentLoaded区别

* window.onload所有资源都加载完毕，包括图片视频等媒体资源
* DOMContentLoaded指所有文档资源加载完毕，不包括图片视频等媒体资源

## throttle与debounce

``` js
  function throttle(fn, delay) {
      let timer = null;
      return function() {
          if (timer) return;
          timer = setTimeout(() => {
              fn.apply(this, arguments);
              timer = null;
          }, delay);
      }
  }
```

``` js
  function debounce(fn, delay) {
      let timer = null;
      return function() {
          if (timer) {
              clearTimeout(timer);
          }
          timer = setTimeout(() => {
              timer = null;
              fn.apply(this, arguments);
          }, delay);
      }
  }
```

## 安全

* xss 跨站脚本攻击 富文本 xss过滤
* csrf 跨域脚本攻击 编码/token、验证(身份信息) 使用post

## js内置的全局函数与对象

* Object, Array, Boolean, String, Number, RegExp, Date, Error, Math, JSON
* document window

## 拆解url

``` js
function getUrlParams(url) {
    const search = url.split('?')[1];
    const obj = {}
    if (!search) return obj;

    const items = search.split('&');
    items.forEach((item) => {
        const newItem = item.split('=');
        const key = newItem[0];
        const value = newItem[1];
        obj[key] = value;
    })
    return obj
}
```

``` js
function queryUrl(url) {
    const obj = {};
    const searchUrl = url.split('?')[1]
    const searchList = new URLSearchParams(searchUrl);
    searchList.forEach((item, key) => {
        obj[key] = item;
    });
    return obj
}
```

## isEqual

``` js
    function isObj(data) {
        return typeof data === 'object' && data !== null;
    }

    function isEqual(obj1, obj2) {
        if (!isObj(obj1) || !isObj(obj2)) {
            return obj1 === obj2;
        } else {
            if (obj1 === obj2) return true;
            const obj1Keys = Object.keys(obj1);
            const obj2Keys = Object.keys(obj2);
            if (obj1Keys.length !== obj2Keys.length) {
                return false;
            }
            for (let key in obj1) {
                const keyEqual = isEqual(obj1[key], obj2[key]);
                if (!keyEqual) {
                    return false;
                }
            }
            return true;
        }
    }
```

## forEach与map区别

* map不改变原数组，forEach可能改变
* map返回一个新数组

## get与post区别

* get参数会拼接到url，post不会
* get会缓存，post不会
* get参数会保留到历史中，post不会
* get前进后退无害，post数据会重新提交

## call与apply的区别

* apply第二个参数为数组， call为多个参数

## 函数声明与函数表达式区别

* 函数声明会提升到方法体顶部

## 创建对象的几种方式

* 对象字面量
* new Object()
* 构造函数方式
* 工厂模式
* 原型创建对象

## new Object()与Object.create区别

* Object.create可以指定原型

## 获取最大值

``` js
function max() {
    const arr = Array.from(arguments);
    const maxItem = Math.max.apply(null, arr);
    return maxItem;
}

function max() {
    const arr = Array.from(arguments);
    let maxItem = arr[0];
    arr.map((item) => {
        if (item > maxItem) {
            maxItem = item;
        }
    });
    return maxItem;
}
```

## 如何捕获js异常

* try catch
* window.onerror

# 正则

## trim

``` js
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
```

# 常用算法

## flat

``` js
function flatern(arr) {
    return arr.reduce((total, item) => {
        return total.concat(Array.isArray(item) ? flatern(item) : item)
    }, []);
}
```

## 数组去重

``` js
function unique(arr) {
    const newArr = new Set(arr);
    return Array.from(newArr);
}

function unique(arr) {
    return arr.reduce((total, item) => {
        return total.includes(item) ? total : total.concat(item);
    }, [])
}
```

# promise

## promise优缺点

* 优点：
  * 解决地狱回调
* 缺点：
  * 无法跟踪进度
  * 无法取消

## promise中reject与catch的区别

* reject是抛出异常
* catch是捕获异常
* reject抛出的异常可以在then的第二个函数中接收，没有第二个函数会被catch捕获

## async与普通函数区别

* async异步函数，相当于promise,可以捕获错误，不终止后续代码
* 普通函数，遇到错误会终止后续代码

## js面向对象编程的特点

* 封装 继承 多态

## jsonp的callback一直没有返回数据

* 使用轮询

## 箭头函数的优缺点

* 不能使用 arguments,constructor
* this指向父级作用域
