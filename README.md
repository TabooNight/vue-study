# vue-study

学习Vue.js时写的一些代码

---

* chapter01

  本章主要介绍了Vue.js最核心最基本的功能

  * hello.html

    * Vue.js实现Hello World应用

    * 展示Vue.js最核心的功能：数据的双向绑定

  * dataBanding.html

    * 创建一个Vue实例以及通过Vue实例的data选项声明应用内需要双向绑定的数据
    * 每个Vue实例的声明周期钩子 => created、mounted、beforeDestroy
    * 插值与表达式 => 最基本的文本插值方法 “{{}}”
    * 过滤器 => 在{{}}插值的尾部添加一个管道符“|”对数据进行过滤

  * directivesAndEvents.html

    * v-bind指令 =>  动态更新HTML元素上的属性
    * v-on指令 => 绑定事件监听器
    * 语法糖

* chapter02

  本章主要介绍了Vue.js的计算属性

  * computedAttr.html

    * 计算属性的用法

  * computedCache.html

    * 计算属性的缓存
    * 计算属性与methods的区别

* chapter03

  本章主要介绍了v-bind及class与style

  * bindClassStyle.html

    * 使用对象语法绑定class
    * 使用数组语法绑定class
    * 在组件上绑定class

  * bindInlineStyle.html

    * 绑定内联样式

* chapter04

  本章主要介绍了Vue.js的内置指令

  * baseDirective.html

    * v-cloak: 配合CSS [v-cloak]{display: none;}解决初始化慢导致页面闪动的最佳实践
    * v-once: 定义它的元素和组件只渲染一次

  * conditionDirective.html

    * v-if、v-else-if、v-else
    * v-show、v-if与v-show的区别以及各自的适用场景

  * listDirective.html

    * v-for的基本用法
    * 数组更新
    * 过滤与排序

  * methodAndEvent.html

    * 方法与事件的基本用法
    * 修饰符

  * shoppingCart

    * 根据所需知识实现简易购物车功能

* chapter05

  本章主要介绍了表单与v-model的使用

  * baseForm.html

    * v-model对数据的双向绑定
    * 单选按钮
    * 复选框
    * 选择列表

  * bindValue.html

    * 单选按钮动态绑定值
    * 复选框动态绑定值
    * 选择列表动态绑定值

  * modifier.html

    * .lazy修饰符
    * .number修饰符
    * .trim修饰符

* chapter06

  本章主要介绍Vue.js最核心、这个框架设计最精彩的地方“组件(Component)”

  * componentReuse.html

    * 组件的用法
    * 组件的复用

  * props.html

    * 使用props传递数据的基本用法
    * 单向数据流
    * 数据验证

  * componentCommunication.html

    * 自定义事件进行组件通信
    * 使用v-model进行组件通信
    * 非父子组件通信
