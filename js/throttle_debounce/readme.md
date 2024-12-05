- 认识几个url 
  url 的设计模式 restful api
  网站是用来暴露资源的 如何将资源暴露出去
  - http://localhost:3001/posts/ 列表页的链接
  - http://localhost:3001/posts/:id   id 查询参数 详情页的链接
  - http://localhost:3001/users/:id   用户主页的链接

- 数据的查询 Read 
- 访问资源的方式
  - apiFox 是啥？  web 请求代理
    Get http://localhost:3001/posts/1
    Patch http://localhost:3001/posts/1
  - 资源  db.json  users  posts
  - HTTP 协议 
    - Method  (动作 GET  | PATCH 修改| POST 新增)  + url  (资源)  请求行
    - 请求头 Cookie  Content-Type:text/json ...
    - 请求体 

  - json-server
    - http 服务
    - db.json  数据资源向外提供访问 CRUD 

- 会设计restful api 接口
  - 需求
    - 新增一篇文章
      http://localhost:3001/posts  POST
      {
        ...
      }

    - 删除 文章2
      http://localhost:3001/posts/2  DELETE

- json-server 是一个支持restful api 设计的数据服务器