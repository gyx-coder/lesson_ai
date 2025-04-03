# 如何删除cookie

- cookie 本地存储 请求传输 4KB 
- Domain 域名 
  document.cookie = 'token=123;domain=baidu.com;'
- path 路径
  document.cookie = 'token=123;domai=baidu.com;path=a/b/c'
- Expires/Max-Age
  document.cookie = 'token=123;Expires=Thu, 01 Jan 1970 00:00:00 GMT;'
  document.cookie = 'token=123;Max-Age=0;'
- Secure 只在https 下传输
- HttpOnly 禁止js 读取XSS
- SameSite 限制第三方cookie
  - Strict 完全禁止第三方cookie
  - Lax 允许部分第三方cookie 比如链接
  - None 允许所有第三方cookie