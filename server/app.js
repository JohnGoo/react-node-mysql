/**
 * @desc 应用入口，配置应用级中间件
 * @author JohnGoo
 **/

let express = require('express');
let ejs = require('ejs');
let api = require('./route/api');
let app = express();


// create server
let server = app.listen(3000, () => {
	let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})



// 应用级中间件
app.use((req, res, next) => {
	console.log('Request Type:', req.method);
	next();
});

// 逐行挂载，若已执行send，后续中间件无法执行
app.get('/index.html', function (req, res) {
	console.log(req.query);
  res.render("index",{
    name: req.query.name || '',
    id: req.query.id || ''
  });
});

// 注册路由
app.use('/api', api);
// 模板引擎
app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile); // 默认只渲染ejs格式的文件，app.engine可指定渲染格式，相当于别名；
// 静态文件
app.use('/', express.static('public'));
