# 双token鉴权
- JWT JSON Web Token

- 单token 长时间 不安全

- 验证access token refresh token
  - access token 负责验证功能 expiresIn 读一些， 安全
  refresh token
  - 401 access_token 失效
    refresh_token -> /api/refresh 
    新的token
  - 无感刷新