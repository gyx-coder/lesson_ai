const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  console.log(`${Date.now()} ${ctx.request.method } ${ctx.request.url}`)
  ctx.body = 'hello world';
}

app.use(main);
app.listen(3000);