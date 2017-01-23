import express from 'express';
import bodyParser from 'body-parser';

// 服务器端路由
import indexRouter from './routes/index';
import adminRouter from './routes/admin';

// 设置API的路由
import setApi from './api';

// 链接数据库
import db from './config/connect.js';

// 开发工具
import {devMiddleWare, hotMiddleware} from './devtools';

import config from '../config';

const app = express();
const port = config.port;

if (process.env.NODE_ENV !== 'production') {
  app.use(devMiddleWare());
  app.use(hotMiddleware());
}

app.use(bodyParser.json());

// 模板
app.set('views', './server/views');
app.set('view engine', 'pug');

setApi(app);
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
