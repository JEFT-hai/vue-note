<!--
 * @Author: your name
 * @Date: 2022-03-25 23:05:09
 * @LastEditTime: 2022-03-26 01:22:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\docs\guide\common.md
-->

## ajax fetch axios区别

* ajax async js and xhr
* fetch  浏览器原生api,支持promise
* axios 封装好的第三方库，内部使用xhr与fetch实现

## 防抖节流什么区别

* 防抖频繁触发函数只有停下来的时间超过delay时间才会触发
* 节流频繁触发函数一段时间内只触发第一次

``` js
function debounce(fn, delay) {
    let timer = null;
    return function() {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

function throttle(fn, delay) {
    let timer = null;
    return function() {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null
        }, delay)
    }
}
```

## px % em rem vw vh

* px 固定像素单位
* % 相对父级百分比 padding是相对width
* em 相对font-size, 但font-size是相对父元素
* rem 相对根元素
* vw 1%屏宽 vh 1%屏高

## 箭头函数缺点

* 没有arguments
* 无法通过apply,call,bind改变this


## 什么时候不能使用箭头函数

* 对象内部定义方法
* 回调函数 - this会指向window
* 动态上下文中使用this
* vue中method与声明周期

## 描述三次握手与四次挥手

* client发包，server接收，
* server发包， client接受，我收到到信息了
* client发包，server接受，通知server要发包了

* client发包，server接收，client请求已结束
* server发包，client接收，server通知client已收到，server等待关闭
* server发包，client接收，server 可以关闭了
* client发包，server接收，可以关闭了，断开连接

## for in与for of区别

* for key in
* for value of

## for await of

* 遍历多个promise

## offsetHeight, scrollHeight, clientHeight

* offsetHeight - content + padding + border
* clientHeight - content + padding
* scrollHeight 实际内容 + padding

## htmlCollection与nodeList

* element
* nodeList - node
* node包含element, document等

## vue中computed与watch区别

* computed - 计算属性根据一个或者多个属性计算返回一个新属性，具有缓存。
* watch - 监听一个属性/或者子属性执行一个函数

## vue组件通讯几种方式

* props $emit
* $parent ref获取子组件
* provide inject
* $attrs $listeners
* vuex
* event-bus

## action与mutation区别

* 只有mutation改变state
* action多数为异步方法，通过context.commit来调用mutation

## js严格模式有什么特点

* 全局变量不能不声明
* 禁止this指向window
* 函数参数不能重名
* 禁止使用with,创建eval作用域

## http为什么发送options请求

* 复杂请求之前会预请求
* 简单请求 - get, post, head三种请求，
* 没有自定义head
* content-type不属于 application/x-www-form-urlencoded, multipart/form-data, text/plain
