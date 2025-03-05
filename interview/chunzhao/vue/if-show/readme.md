# v-if v-show 区别
场景

1.v-if是真正的**条件渲染**，切换时会触发事件监听器、本身、子组件的挂载卸载。
2.v-if 是**惰性**的，如果初始条件为假，什么也不做。性能更好。
3.v-show简单，初始条件与否都要渲染，基于css display属性切换。
4.v-show适用于频繁切换条件的场景，v-if 条件很少改变

场景举例
- 登录弹窗  v-if
- form 表单的校检  v-show
- 动画效果 v-show + transition
- 响应式布局调整 v-show (有点难)
- 用户权限显示(user,admin) v-if

