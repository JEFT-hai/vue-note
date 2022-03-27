<!--
 * @Author: your name
 * @Date: 2022-03-27 23:37:56
 * @LastEditTime: 2022-03-28 01:23:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\docs\guide\write.md
-->

## 手写flatten

``` js
function flatten(arr) {
    return arr.reduce((newArr, item) => {
        return newArr.concat(Array.isArray(item) ? flatten(item) : item);
    }, [])
}

arr.toString().split(',');
```

## 手写一个getType

``` js
function getType(val) {
    const baseType = typeof val;
    if (baseType !== object) return baseType;

    if(Array.isArray(val)) return 'array';
    if (val instanceof Map) return 'map';
    return 'object';
}
function getType(val) {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}
```

## new一个对象发生什么，手写过程

* 创建一个新对象，继承constructor原型
* this指向这个新对象，执行函数
* 返回新对象

``` js
function createNew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    obj.apply(this, args)
    return obj
}
```

### lazyMan,实现sleep

## 手写curry, 函数柯里化

``` js
function curry(fn) {
    const argsLen = fn.length;
    let args = [];

    const calc = function(...newArgs) {
        args = [
            ...args,
            ...newArgs
        ];

        if (args.length < argsLen) {
            return calc;
        } else {
            return fn.apply(this, args.slice(0, argsLen));
        }
    }

    return calc;
}
```

## instanceof原理是什么，手写代码

* 判断对象原型链上时候有构造函数的显示原型

``` js
function instanceofF(instance, F) {
    if ((typeof instance !== 'object' && type !== 'function') || typeof instance == null) return false;
    let tempInstance = instance;
    while(tempInstance.__proto__) {
        if (tempInstance.__proto__ !== F.prototype) {
            tempInstance = tempInstance.__proto__;
        } else {
            return true;
        }
    }
    return false;
}
```

## 手写bind

## 手写call，apply

## 手写eventBus

## 手写LRU

## 手写深拷贝(简单/复杂-map/set)

## 根据dom,手写虚拟dom