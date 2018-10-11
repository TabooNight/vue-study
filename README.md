# vue-study

学习Vue.js时写的一些代码

---

* chapter01

  本章主要展示了Vue.js最核心最基本的功能
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
