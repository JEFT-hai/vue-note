## v-show与v-if区别

1. v-show使用display 切换显隐, 初始渲染成本更高。
2. v-if是是否渲染dom来切换显隐，切换成本更高。

## 为何v-for中要用key

* 没有key会使用就地复用策略。
* 有key, diff算法同级比较将tag与key相同的vnode视为同一结构，高效的更新虚拟DOM。

## v-html会导致那些问题

* xss
* 标签内的内容无效

## data为什么是一个函数

* 每次复用组件，返回一个新的data,防止数据污染

## 描述vue组件生命周期（有父子组件）

* 父 - beforeCreate - created - beforeMount - 子 - beforeCreate - created - beforeMount - mounted - 父 - mounted

* 父 - beforeUpdate - 子 - beforeUpdate - updated - 父 - updated

* 父 - beforeDestroy - 子 - beforeDestroy - destroyed - 父 - destroyed

## Vue组件如何通讯

* props $emit

* vuex

* event-bus

* provide inject

* $attrs $listeners

* $parent $children/$ref

## computed 与 watch

* computed 有缓存，通过n个变量计算返回一个值。变量改变不触发重新计算。

* watch 监听一个data属性的变化，只想相应的函数，函数具有两个参数nVal,oVal, - 对象属性的vVal与oVal应该是一个，deep - 可以深度监听 - 对象/Array

## v-for与v-if不能一起使用

* v-for的优先级更高
* v-for循环多少次就要判断多少次v-if
* 解决： v-if写在最外层

## vue常用指令

* v-bind v-show v-if v-for v-once v-html v-text v-model v-on

## 事件修饰符

* .native .stop .prevent .passive .once .capture
* .trim .lazy .number .enter .ctrl
* .self .left .right 
* .sync

## v-model原理及实现

* input - 绑定value,input事件改变数据，数据改变触发input事件
* checkbox，select, value - change

``` html
<input :value='text' @input='text = $event.target.value' />
```

```js
<input :value='text' @input='$emit("change", $event.target.value)' />

model = {
    prop: 'text',
    event: 'change'
}
```

.sync

``` html
<div :name='value' @update:name='(newV) => value = newV'></div>
```

```js
@emit('update:name', newV);
```

## $nextTick

* 异步
* dom更新之后执行
* 多次修改data，只触发一次dom重新渲染，提高渲染效率

## vue为什么要执行异步渲染

* 多次修改data,只触发一次渲染更新，提高渲染效率。

## slot

* 具名插槽

```html
<slot name='header'></slot>

<template v-slot:header>
    header-content
</template>
```

* 作用域插槽

``` html
<slot :slotData='slotInfo'></slot>

<template v-slot='slotProps'>
    {{slotProps.slotData}}
</template>
```

## 动态组件

``` html
<component :is='componentName'></component>
```

## 异步组件

``` js
const cm = () => import('');
const cm = (resolve) => require([''], resolve);
```

## keep-alive

* 缓存组件
* 频繁切换，不重复渲染
* include/exclude max
* activated/deactivated 生命周期

## mixin

* 抽离组件间相同属性/逻辑
* 组件内定义的优先级大于mixin中的

## vuex

* state,getters,mutations,actions
* commit-mutations,dispatch-actions
* mapState,mapGetters,mapMutations,mapActions
* 只有mutations能直接改变state状态

## vue-router

* hash '#' hashChange
* history '' popState pushState replaceState

## vue常见的性能优化

* 使用key
* keep-alive
* 懒加载，异步组件
* 组件封装复用
* mixin
* vuex缓存数据

* 第三方插件 按需引入
* gzip, 图片缓存，图片懒加载，图片压缩，
* 抽离公共文件splitChunks
