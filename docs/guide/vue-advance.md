## 如何理解MVVM

* view model view-model
* view 通过dom-listeners 改变 model
* model改变后通过directives 改变 view

## vue响应式原理

* 核心api - Object.defineProperty;

``` js
const data = {};
const name = 'jeft';
Object.defineProperty(data, 'name', {
    get: function() {
        return name;
    },
    set: function(newName) {
        name = newName;
    }
})
```

* 监听对象，监听数组
* 复杂对象，深度监听, 一次性计算量大
* 无法监听新增/删除的属性，（vue.set/vue.delete）

``` js
function updateView() {
    console.log('更新视图');
}

// array

const oldArrayProperty = Array.property;
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'unshift', 'shift','splice', 'sort', 'reserve'].map((item) => {
    arrProto[item] = function() {
        updateView();
        oldArrayProperty[item].apply(this, arguments);
    }
})

function defineReactive(target, key, value) {
    // 深度监听
    observer(value);

    Object.defineProperty(target, key, value) {
        get: function() {
            return value;
        },
        set: function(newValue) {
            if (newValue === value ) return value;
            observer(newValue);
            value = newValue;
            updateView();
        }
    }
}

function observer(data) {
    if (typeof data !== 'object' || data == null) return data;

    if (Array.isArray(data)) {
        data._proto_ = arrProto;
    }
    
    Object.keys(data).forEach((key) => defineReactive(data, key, data[key]));
}


```

## 虚拟Dom

* 用js模拟dom结构 - vnode
* 比较新旧vnode,得出最小的更新范围，更新dom
* 数据驱动视图模式下，有效更新dom

``` js
render() {
    return {
        h(tag || component, {

        }, []);
    }
}
```

## diff算法

* 只比较同级，不做跨级比较
* tag不同，不再做同级比较
* selector与key相同，相同节点，不再比较

* patch：
* 判断oldVnode是虚拟节点还是真实节点
* 真实节点并且sameVnode(oldVnode, vnode),触发patchVnode
* 否则 vnode替换oldVnode

* patchVnode:
* 获取vnode与oldVnode的child
* 先判断vnode的text是否有值，有值直接删除oldVnode,设置新的text
* vnode中text无值，进行 都有chiildren - updateChildren,vnode没有children - 删除，oldVnode没有children - 添加

* updateChildren：
* 双指针 - 四种比较 头头 尾尾 头尾 尾头 - 之后一次比较key

## vue模板编译成什么

* 模板编译成render函数，执行render函数返回vnode
* 基于vnode进行patch,diff。

## vue事件绑定原理

* 原生事件绑定 addEventListener
* 组件事件绑定:
* 把事件放到_parentListeners上，执行updateComponentListeners,调用updateListeners，传入add方法即：组件的$on

## 为什么使用异步组件

* 减少打包体积
* 实现文件的分割加载

## keep-alive原理

* 将组件的key与vnode进行一对一进行缓存。
* 超出max数量，删除前面缓存的。

## 组件渲染更新的过程

* 渲染：
* 解析模板为render函数
* 触发响应式，利用getter,setter监听data属性
* 首次执行render函数 - 触发getter，收集依赖形成watcher，返回vnode, patch(elem, vnode)

* 更新：
* 更新data, 触发setter, notify watcher。
* 重新执行render函数，生成新的vnode
* patch(oldVnode, vnode)

## vue为什么要执行异步渲染

* 多次修改data,只触发一次渲染更新，提高渲染效率。

## vue怎样执行的异步渲染

* data改变 - notify watcher
* watcher不立即执行，queueWatcher将watcher放到队列中并去重
* nextTick异步清空watcher队列，触发beforeUpdate - updated
