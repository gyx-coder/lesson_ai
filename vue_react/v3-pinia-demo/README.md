# pinia 

- 组件关系 共享状态
  - 父组件
    持有数据状态 count "共享"给子组件
    修改数据状态
    兄弟组件共享正确的数据状态
    - 兄弟组件
      不能直接修改props 数据

- 超越父子组件通信，共享