<!--
 * @Author: your name
 * @Date: 2022-03-02 16:17:10
 * @LastEditTime: 2022-03-03 01:44:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\docs\guide\vue-3.md
-->

## vue3与vue2比有什么优势

* 性能更好
* 体积更小
* 更好的对ts的支持
* 更好的代码组织
* 更好的逻辑抽离

## 描述vue3生命周期

beforeCreate created beforeMount mounted beforeUpdate updated beforeUnmount unmounted

## 如何理解composition api与options api

* 更好的代码组织
* 更好的逻辑复用
* 更好的类型推导

## 如何理解ref toRef toRefs

* ref:
* 生成值类型的响应式数据
* js中使用.value取值
* 模板中与reactive中不使用.value

* toRef:
* 给一个响应式对象的属性创建一个ref,两者保持引用关系

* toRefs:
* 给一个响应式对象的每个属性创建一个ref,两者保持引用关系

## 为何需要ref

* 值类型，会丢失响应式，
* 需要使用ref生成值类型的响应式数据

## ref为何需要使用.value

* ref: 值类型生成响应式数据
* ref是一个对象，用value来存储值
* 通过.value属性的getter与setter来实现响应式
* 模板与reactive中不需要使用.value

## 为什么使用toRef和toRefs

* 在不丢失响应式的情况下，对对象进行解构

## vue3升级了那些重要的功能

* composition api -> setup - ref, toRef, toRefs, reactive
* 生命周期 destroy变成unmount beforeDestroy变为beforeUnmount
* new Vue变为Vue.createApp
* emit可以生命使用到额emit事件
* 事件绑定可以多事件
* Fragment 根节点不必为一个
* 异步组件 AsyncComponent: defineAsyncComponent
* 移除filter，.async
* teleport 指定根节点

## composition api 如何实现代码复用

* 将代码抽离到一个函数中
* 一般命名为useXXX
* 返回一个对象或者toRefs

## vue3如何实现响应式

* proxy

``` js
function Observe(target = {} {
    if (typeof target != 'object' || target === null) {
        return target;
    }
    const proxyConf = {
        get(target, key, receiver) {
            if (Reflect.ownKeys(target).includes(key)) {

            }
            Reflect.get(target, key, receiver);
            return Observe(target[key]);
        },
        set(target, key, val, receiver) {
            if (val == target[key]) {
                return true;
            }

            if (Reflect.ownKeys(target).includes(key)) {
                console.log('已有属性变化')
            } else {
                console.log('添加新增属性')
            }
            const result = Reflect.set(target, key, val, receiver);
            return result;
        },
        deleteProperty(target, key) {
            const result = Reflect.deleteProperty(target, key);
            return result;
        }
    };
    const observed = new Proxy(target, proxyConf);
    return observed;
})
```

## vue3 v-model

* v-model与.sync功能合并了

``` html
<div v-model='text'></div>
<div :modelValue='text' @update:modelValue='text = $event'>

<div v-model:title='title'>
<div :title='title' @update:title='title = $event'>
```

## watch与watchEffect区别是什么

* watch要确定要监听的属性
* watchEffect会监听用到的所有属性,初始化一定会执行一次

## setup中如何获取组件实例

* getCurrentInstance
* 要在mounted中获取

## vue3为什么比vue2快

* 使用proxy代替Object.defineProperty
* patchFlag：
  * 动态节点标记，标记为不同的类型
  * diff算法时候，区分静态节点，以及不同的动态节点
* hoistStatic
  * 静态节点的定义会提声到父作用域，缓存起来
  * 多个相同的静态节点会合并起来
* cacheHandler - 缓存事件
* ssr
  * 静态节点直接输入，绕过了vdom
  * 动态节点，动态渲染
* tree shaking
  * 编译时：资源按需引入

## vite是什么， vite为什么快

* 开发环境： es6 module,无需打包，直接运营
* 生产环境，rollup打包

## setup新增属性

* defineProps defineEmits defineExpose