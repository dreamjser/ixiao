import express from 'express';
// 服务器端路由
import indexRouter from './routes/index';
import adminRouter from './routes/admin';

// 开发工具
import {devMiddleWare, hotMiddleware} from './devtools';

const app = express();
const port = 3000;

if (process.env.NODE_ENV !== 'production') {
  app.use(devMiddleWare);
  app.use(hotMiddleware);
} else {
  app.use('/static', express.static(__dirname + '/../dist'));
}

// 模板
app.set('views', './server/views');
app.set('view engine', 'pug');

// 后台管理路由
app.use('/admin', adminRouter);

// 主页面路由
app.use('/', indexRouter);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
