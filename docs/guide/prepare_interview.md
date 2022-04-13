<!--
 * @Author: your name
 * @Date: 2022-04-12 17:00:40
 * @LastEditTime: 2022-04-12 19:18:31
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

1***循环

15.什么是强缓存 什么是协商缓存 怎么判断

16.HTTP状态码

17.简单请求与复杂请求

18.怎么实现跨域

19.了解过函数式编程吗

20.怎么判断是数组还是对象

21.懒加载怎么实现的

22.实现动画效果都有什么方式

23.CSS3的特性

24.垂直居中

25.flex：1代表什么 应用场景？

26.css实现三角形 圆形

27.不给定宽高 实现正方形

28.伪类和伪元素分别是什么 有什么区别

29.css优先级

30.vw vh

31.怎么显示小于12px的字体

32.行内元素有哪些 块元素有哪些

33.介绍一下BFC

34.权限这一块怎么做的

35.git flow工作流 开发流程

36.将当前代码暂存用git哪条命令

37.git怎么回退代码 reset和revert有什么区别

38.项目中有做过seo吗 怎么做的

39.介绍一下项目中让你印象深刻的地方