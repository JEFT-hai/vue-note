<!--
 * @Author: your name
 * @Date: 2022-03-27 23:37:56
 * @LastEditTime: 2022-03-28 22:42:48
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

``` js
Array.prototype.myBind = function(context, ...args) {
    const self = this;
    return function(...innerArgs) {
        return context.apply(self, [...args, ...innerArgs]);
    }
}
```

## 手写call，apply

``` js
Array.prototype.myCall = function(context, ...args) {
    if (context === null) context = globalThis;
    if (typeof context !== 'object') context = new Object(context);

    const fnKey = Symbol();
    context[fnKey] = this;
    const res = context[fnKey](...args);
    
    delete context[fnKey];
    return res;
}

Array.prototype.myApply = function(context, args) {
    if (context == null) context = globalThis;
    if (typeof context !== 'object') context = new Object(context);

    const fnKey = Symbol();

    context[fnKey] = this;

    const res = context[fnKey](...args);

    delete context[fnKey];

    return res;
}
```

## 手写eventBus

``` js

class eventBus {
    events: {},
    onceEvents: {},

    on(name, fn) {
        if (!events[name]) {
            events[name] = [];
        }
        events[name].push(fn);
    },

    once(name, fn) {
         if (!onceEvents[name]) {
            onceEvents[name] = [];
        }
        onceEvents[name].push(fn);
    }

    emit(name, ...args) {
        if (events[name]) {
            events[name].forEach((fn) => fn(...args));
        }
        if (onceEvents[name]) {
            onceEvents[name].forEach((fn) => fn(..args));
            onceEvents[name] = [];
        }
    },

    off(name, fn) {
        if (events[name]){
            if (fn) {
                events[name] = events[name].filter((fnItem) => fnItem !== fn)
            } else {
                events[name] = [];
            }
        }
        if (onceEvents[name]) {
            if (fn) {
                onceEvents[name] = onceEvents[name].filter((fnItem) => fnItem !== fn)
            } else {
                onceEvents[name] = [];
            }
        }
    }

}

```

## 手写LRU

## 手写深拷贝(简单/复杂-map/set)

``` js
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;

    const newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    
    return newObj;
    
}

function cloneDeep(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj == null) return obj;

    // 循环
    const objFromMap = map.get(obj);
    if (objFromMap) return objFromMap;

    const target = {};
    map.set(obj, target);

    // Map
    if (obj instanceof Map) {
        target = new Map();
        obj.forEach((v, k) => {
            const newV = cloneDeep(v, map);
            const newK = cloneDeep(k, map);
            target.set(newK, newV);
        })
    }

    // Set
    if (obj instanceof Set) {
        target = new Set();
        obj.forEach((v) => {
            const newV = cloneDeep(v, map);
            target.add(newV);
        })
    }

    // array
    if (obj instanceof Array) {
        target = [];
        obj.forEach((v) => cloneDeep(v));
    }

    // obj
    if (obj instanceof Object) {
        target = {};
        for(let key in obj) {
            const newV = cloneDeep(obj[key], map);
            target[key] = newV;
        }
    }

    return target;
}
```

## 根据dom,手写虚拟dom

``` js
<div id="div1" style="border: 1px solid #ccc; padding: 10px;">
    <p>一行文字<a href="xxx.html" target="_blank">链接</a></p>
    <img src="xxx.png" alt="图片" class="image"/>
    <button click="clickHandler">点击</button>
</div>
```

``` js
h('div', {
    style: {
        border: '1px solid #ccc',
        padding: '10px'
    }

}, [h('p',{}, ['一行文字'， h('a', {href: 'xxx.html'}), '链接']), h('img', {src: 'xxx.png', alt: '图片'， class: 'image'}), h('button', {on: {click: this.clickHandler}}, '点击')] )
```
