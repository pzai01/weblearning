/**
 * Created by hasee on 2016/6/3.
 */
var express =require("express");
var http =require("http");
var bodypaser=require("body-parser");
var path=require("path");
var ejs = require('ejs');
var mysql=require("mysql");
var routes=require("./routes/index");
var dbconf=require("./dbconf");
var app =express();

app.set("views",path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
//使用html后缀的文件作为模板
app.set("view engine",'html');
// 设置静态文件的目录，通过目录直接访问文件
app.use(express.static('public'));
app.use(bodypaser.urlencoded({ extended: false }));
app.use(bodypaser.json());
app.use(express.static(path.join(__dirname, 'public')));
//设置ajax的跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/auth/:id/:password', function(req, res) {
    res.send({id:req.params.id, name: req.params.password});
});

app.use('/', routes);

//传入app创建一个http server监听在3001端口
var server=http.createServer(app);
server.listen(3001);
server.on("listening",function () {
    console.log("server is listen on port 3001")
});