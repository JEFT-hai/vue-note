## opacity: 0、visibility: hidden、display: none三者区别

* opacity: 0, 元素透明度为0，但元素还在，仍然可以点击。只触发重绘
* visibility：hidden, 隐藏元素，元素不可见，不可点击，只触发重绘
* display: none, 隐藏元素，不可点击，触发重排

## flex: 2, 1, auto

* flex-grow: 在主轴方向放大剩余空间的比例
* flex-shrink：在主轴方向压缩剩余空间的比例
* flex-basis：初始化子项占据主轴空间的基准值

* just-content: space-between, 两端对齐，三/两列 使用after占据最后一个位置，可以实现最后一行左侧对其。

## flex

* 主项
  * display: flex;
  * flex-direction: row/row-reverse/column/column-reverse;
  * flex-wrap: wrap/no-wrap;
  * flex-flow: flex-direction flex-wrap;
  * justify-content: 主轴方向对齐方式 flex-start/flex-end/center/space-around/space-between/space-evenly;
  * align-items：交叉轴对齐方式： flex-start/flex-end/center/space-around/space-between/space-evenly;
* 子项
  * flex-grow: 主轴方向上剩余空间的展开比例， 0 不放大
  * flex-shrink: 主轴方向上压缩空间的比例，0 不压缩
  * flex-basis: 子项基于主轴的基准值， auto自动检测尺寸

## sessionStorage 、localStorage 和 cookie 之间的区别

* h5 存储
  * 存储上限 5M
  * 存储期间永久，会话关闭
  * getItem, setItem, removeItem api简便
  * 不会主动携带到http中
* cookie
  * 存储上限 4kb
  * 可以设置生效时间
  * 封装麻烦
  * 每次会携带到同源http请求头中

## 跨域处理方式

* jsonp
* cors access-control-allow-origin: * / origin - 要跨域的网址

## 非同源http携带cookie / cors使用cookie

* access-control-allow-credentials: true - 服务端
* xhr.withCredentials = true - 客户端

## HTTPS原理和防范中间人攻击

* 公钥 - 非对称加密， 服务端将公钥给客户端客户端进行证书合法性验证
* 对称加密，客户端生成随机数，客户端通过公钥加密随机数给服务端，服务端使用私钥解密，再用解出的随机数构造对称加密算法，对结果加密后进行传输。
* 校验证书的有效性(ca);

## 对称加密与非对称加密

* 对称加密加密解密密钥相同，非对称加密使用公钥加密，私钥解密
* 对称加密速度快，但是不安全
* 非对称加密速度慢，但是相对安全。

## 前端攻击方式

* xss 跨站脚本攻击 转义标签字符，过滤非法属性
* csrf 跨站点伪造请求 验证码验证身份， token获取身份
* sql注入 编码

## 输出

``` js
var a = 10;
var obj = {
    a: 20,
    fn:() => {
        console.log(this.a);
    }
}

obj.fn();
var f = obj.fn();
f.call({a: 30});

// 10
// 10
```

## promise输出顺序

``` js
async function async1() {
  console.log('async1');
}

async function async2() {
  console.log('async2 start');
  await async1();
  console.log('async2 end');
}

setTimeout(function () {
  console.log('setTimeout');
}, 0);

console.log('script start');

async2();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end'); 
```

``` js
// 同步
script start
async2 start
async1
promise1
script end
// 异步
async2 end
promise2
setTimeout
```

## 反转链表

## 最长不含重复字符的子字符串长度
