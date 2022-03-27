<!--
 * @Author: your name
 * @Date: 2022-03-25 23:05:09
 * @LastEditTime: 2022-03-27 17:46:55
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

## 垃圾回收机制

* 引用计数
* 标记清除

## 内存泄漏场景有哪些

* 被全局变量，函数引用，组件销毁未清除
* 被全局事件，定时器引用，组件销毁未清除
* 被自定义事件引用，组件销毁未清除

## vdom是真的快吗

* 不是
* vdom是js对象模拟dom节点
* 通过diff算法，减少dom频繁更新

## for与forEach哪个更快

* for 更快，forEach每次循环都会多执行一个函数

## js-bridge实现原理

* 向webview注入js对象
* url Scheme

## vue的每个生命周期都做了什么

* beforeCreate
  * 创建一个空白的vue实例， data，method尚未被初始化，不可使用
* created
  * vue实例初始化完成，data,method初始化完成，可调用，尚未开始渲染模板
* beforeMount
  * 编译模板，调用render生成vdom，开没开始渲染dom
* mounted
  * 完成dom渲染
* beforeDestroy
  * 组件进入销毁阶段
  * 可移除，解绑一些全局事件，自定义事件
* destroyed
  * 组件被销毁了
  * 所有子组件也销毁了
* beforeUpdate
  * 准备更新，但还没更新
* updated
  * data发生变化，且dom更新完毕
* activated 组件被激活
* deactivated 组件被隐藏

## 组件什么时候操作dom比较合适

* mounted,updated 都不能保证子组件完全挂载完成
* 使用$nextTick

## 网络请求应该放在哪个声明周期

* mounted

## vue2 生命周期有什么区别

* setup代替beforeCreate, created
* beforeUnmount, unmounted代替beforeDestroy, destroyed

## vue2与vue3中diff算法区别

* vue2 双端比较
* vue3 最长递增子序列

## vue-router中memoryHistory/abstract

* 浏览器地址栏没有任何路由变化
* hash 末尾 #
* history 正常

## h5点击事件有300ms延迟

* fast-click
* touchEnd 代替 click
* viewport - width=device-width

## Retina屏幕的1px像素

* mediaQuery transform scale
* 有border-radius使用box-shadow: 0 0 0 0.5px #eee;

## 网络请求中cookie与token有什么区别

* cookie, http每次请求都带cookie
* 服务端使用set-cookie设置cookie, 存储限制4kb
* 默认有跨域限制

## cookie 与 session

* cookie 登录验证，存储用户标时
* session在服务端，存储用户详细信息，和cookie一一对应

## http协议与udp 区别

* http在应用层
* tcp/udp在传输层

* tcp
  * 有连接，有断开
  * 传输稳定
* udp
  * 无连接，无断开
  * 传输不稳定，但是效率高
  * 用于语音通话，视频会议

## http 1.0和1.1和2.0区别

* 1.0
  * 最基础的http协议
  * 支持最基本的get,post方法
* 1.1
  * 具有缓存策略 catch-control, e-tag等
  * 支持长连接connection: keep-alive，一次tcp连接多测请求
  * 增加put,delete等方法
  * 支持断点续传
* 2.0
  * 可压缩header,减少体积
  * 服务端推送
  * 多路复用，一次tcp连接中可以多个http并行请求

## script标签的defer与async有什么区别

* defer并行下载js,html解析完成后执行
* async并行下载js,执行js,再继续解析html

## prefetch与dns-prefetch区别

* preload资源在当前页面使用，会优先加载
* prefetch页面不在当前页面加载，空闲时加载

* dns-prefetch dns预查询
* preconnect dns预连接

## 前端攻击手段有哪些

* xss
  * 转义标签符号
  * xss-filter,建立白名单
* cors
  * 严格的跨域限制 + 验证码机制
  * 使用token身份验证
* 点击劫持
  * 让iframe不能跨域加载
* sql注入
  * 处理输入的结果，替换特殊字符

## websocket与http协议区别

* websocket
  * 双端通讯，ws://
  * 没有跨域限制
* http
  * client发起请求，server接收返回数据

## websocket与http长轮询区别

* websocket：双端通讯
* http长轮询：client发起请求，服务端阻塞，不会立即返回结果

## 从输入url到页面展示内容

* 进程间通信，将url发送到网路进程
* 网络进程检查是否有缓存，有缓存返回缓存内容
* 没缓存，通过dns解析IP地址与端口号
* 根据ip与端口号发送请求，服务器接收请求，返回内容

* 根据html生成dom tree
* 根据css生成cssom
* dom tree与cssom 合并成render tree
* 根据render tree渲染页面
* 遇到js会停止渲染，解析并执行js，
* 执行完毕后，继续渲染

## 重拍reflow与重绘repaint

* 重绘repaint
  * 元素的外观改变，颜色，背景色
  * 但是元素的尺寸定位不变，也不影响其他元素的位置
* 重拍reflow
  * 重新计算尺寸与布局，可能影响其他元素的位置

## 减少重排的方法

* 集中修改样式，切换class
* 修改之前先设置display: none
* 使用bfc特性，不影响其他元素位置
* 使用节流与防抖
* createDocumentFragment

## bfc条件

* 根元素
* float：left/right
* overflow: 不为visible
* display: inline-block/table/table-cell
* display: flex/grid;
* position: absolute/fixed;

## 网页与iframe之间通讯

* postMessage

## koa中间件模型

* 输入输出经过， 一层一层的中间件