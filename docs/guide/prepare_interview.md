<!--
 * @Author: your name
 * @Date: 2022-04-12 17:00:40
 * @LastEditTime: 2022-04-14 11:54:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\docs\guide\prepare_interview.md
-->
## webpack优化，loader与plugin分别是干什么的有什么区别？

* loader 做一些编码编译工作
* plugin 打包优化，文件压缩抽离等处理

优化
  * loader使用exclude/include
  * 模块化引入
  * 开启Compression gzip
  * 压缩混淆代码 terser
  * webpackChunkName 同模块打包

## Es6特性

* let
* const
* 箭头函数
* rest操作符
* 解构
* 模板字符串
* 函数参数默认值
* Map weakMap
* Set weakSet
* for key in for value of 

## 箭头函数

* this指向父级作用域
* 无arguments
* bind,call,apply不能改变this指向

## this指向几种情况

* 有对象指向对象
* 没对象指向全局变量
* 有new指向new 对象
* bind,apply, call改变this指向
* 箭头函数this指向父级作用域，且不能改变

## call,apply,bind的区别

* bind是返回一个改变上下文的函数，call/apply改变了this指向后指向函数，返回结果
* call 参数不限
* apply  第二个参数是一个数组

7.原型 原型链

* 每一个对象都有一个__proto__属性，指向构造函数的显示原型。
* 查找原型上的属性，会沿着原型链一直查找直到找到或者到终点 null为止。

8.闭包 闭包的应用

* 闭包: 内部函数能够访问外部函数中变量
* 闭包的应用：函数作为参数传递，函数作为返回值。

9.web安全（问了怎么防止爬虫）

* xss
* csrf
* sql注入
* 反爬虫 user-agent/refer

10.输入url到页面加载过程 这个过程中DNS解析具体过程可以说一下吗

* 浏览器进行进程间通信，发送url到网络进程
* 网络进程判断有没有缓存，没有缓存再DNS解析IP地址与端口号
* 向该ip地址与端口号发起请求，服务器接收请求，返回内容

* 浏览器根据html解析dom tree
* 根据css解析为cssom tree
* dom-tree与cssom-tree合并为render-tree
* 根据render-tree渲染页面
* 遇到js会停止渲染，先下载js并执行js
* js执行完毕，继续渲染。

dns解析
  * 浏览器缓存
  * 系统缓存
  * 根域名 - 主域名 - 域名服务器 - 获取并缓存

11.事件冒泡 事件捕获

* 事件冒泡：有目标元素出发，一层一层向上传递直到根元素
* 事件捕获：从跟元素，一层一层向下传递，直到目标元素捕获

12.async defer的区别

* defer并行下载js,html解析完之后执行js
* async并行下载js，下载完成立即执行js，之后再继续解析html。

13.性能优化

* 减少http请求
* 减少dom操作
* 图片懒加载，使用雪碧图，字体图标，svgIcon
* 文件压缩
* 使用gzip
* 使用异步路由异步组件
* cnd加速，dns预解析
* 抽离公共代码

14. 事件循环

* 宏任务，微任务
* 宏任务，setTimeout,setInterval, requestAnimationFrame
* 微任务，promise, async await
* 事件队列会先执行微任务，在执行宏任务

15.什么是强缓存 什么是协商缓存 怎么判断

* 强缓存：expires, cache-control
* expires 判断缓存是否过期，没有过期直接使用缓存
* catch-control设置是否使用本地缓存，优先级高于expires

* 协商缓存
* last-modified 服务器标记上次文件修改时间 if-modified-since 判断服务器资源是否变化，没变化才使用缓存
* eTag 服务器根据文件生成特定hash if-none-match发送上次eTag的值，服务器进行比较，相同返回false，使用缓存

16.HTTP状态码

* 1xx 发送请求，服务端接收到信息，客户端应继续请求
* 200 请求成功
* 301 永久重定向
* 302 临时重定向
* 304 使用缓存
* 400 客户端错误
* 401 未登录
* 404 找不到资源
* 500 服务端错误

17.简单请求与复杂请求

* 简单请求
* get head post
* 无自定义header
* content-type: 为application/x-www-form-urlencoded, multipart/form-data, text/plain

* 复杂请求 - 非简单请求 - 会提前发送Options请求向服务器验证

18.怎么实现跨域

* jsonp
* cors

19.了解过函数式编程吗

20.怎么判断是数组还是对象

* instanceof
* Object.prototype.toString.call().slice(8, -1);

21.懒加载怎么实现的

* elem.getBoundingClientRect().top 小于 client 的时候说明元素达到视野内
* 替换图片src

22.实现动画效果都有什么方式

* 直接加class
* transition
* animation
* requestAnimationFrame动态修改style
* svg
* canvas

23.CSS3的特性

* 层叠性 样式冲突，后面的属性会覆盖前面的属性
* 继承性 color/text-/font-/line- 未定义的时候默认继承上一级属性
* 优先级 !important > 行内样式 > id > class > 标签属性

24.垂直居中

* 行内元素 line-height, text-align:center;
* 块状元素 -
  * flex justify-content: center; align-items: center;
  * 绝对定位 top：50%，left: 50%, margin-top:高度一半/margin-left：宽度一半 / transform: translate(-50%, -50%);
  * 绝对定位 top/left/right/bottom: 0, margin: auto;
  * display: table-cell, vertical-align: middle;

25.flex：1代表什么 应用场景？

* flex-grow: 1; 有剩余空间时候舒展比例
* flex-shrink: 1; 空间不足时候压缩比例
* flex-basis: 0%; 元素的基准值

* 一侧固定一侧自适应
* 多个子元素平分父级元素空间

26.css实现三角形 圆形

* 伪元素 border
* border-radius: 50%;

27.不给定宽高 实现正方形

* padding-top: 100%;
* height: 0;

28.伪类和伪元素分别是什么 有什么区别

* nth-child/first-child/hover/link
* after/before

* 伪元素是一个新的元素，伪类是通过特殊的条件找到该类

29.css优先级

!important > 内联 > id > class > 属性

30.vw vh

* 屏宽高的1%；

31.怎么显示小于12px的字体

* transform: scale(0.8);

32.行内元素有哪些 块元素有哪些

* span/a/img/strong/
* div/h/p/ul/li/ol

33.介绍一下BFC

* 块级格式化上下文, 每一个bfc都是独立的
* 根元素
* position: absolute/fixed;
* float: left/right;
* display: inline-block/table-cell/table
* overflow: 不为visible;
* display: flex/grid;

34.权限这一块怎么做的

* RBAC

35.git flow工作流 开发流程

36.将当前代码暂存用git哪条命令

git stash / git stash pop

37.git怎么回退代码 reset和revert有什么区别

38.项目中有做过seo吗 怎么做的

* title与meta中设置关键字

39.介绍一下项目中让你印象深刻的地方

* 参照vant源码封装了移动端组件库
* 使项目结构更清晰
