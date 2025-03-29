# next 
- react *全栈*框架
  - SSR 服务器端渲染
    - 首屏加载快
    - SEO
    Next.js是强大的React全栈框架，支持SSR，首屏快且利于SEO，开发高效。
  - vercel 
  01.dev AI 代码生成工具
  - 企业站

- notebook 笔记本
  - 后端 note CRUD 
    - next.js 全栈框架
    - redis(内存) mongodb NOSQL
  - 前端
    - noteList
    - search
    - new
    - edit
    - delete

- 设计组件？
  layout
  page
    component

- 约定俗成的next
  - alias jsconfig.json 
  - page.js 页面
  - layout.js 布局
    children  vue slot 
    - page.js 页面

- npm 包
  - dayjs 
  - uuid 并发

- 组件的设计
  - 组件的拆分粒度
    - 复用
    - 管理
    - 下线方便
  - 复制组件
    - SidebarNoteItem
    - 可展开收起
    - skeleton 骨架屏
      用户体验优化方案
      loading (菊花)好在哪? 基本的格局
    - 动态样式 展开/激活
    - 新增/修改后的动画  falsh 
      触发onAnimationEnd 事件 移除flash

- react hook
  - useRef
  - useTransition 方便? transition isPending true