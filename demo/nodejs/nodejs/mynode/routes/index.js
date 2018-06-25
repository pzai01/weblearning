var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconf=require("../dbconf");
console.log(dbconf);

//创建一个数据库连接
connection=mysql.createConnection(dbconf);
//连接数据库
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

//获取新闻数据
router.post('/loadnewsdata',function (req,res) {
    var page=req.body.page;
    var sort=req.body.sort;
    var sql;
    if(req.body.count){
      sql="SELECT * FROM news";
    }else{
      if(sort=="all"){
        sql="SELECT * FROM news order by 'id' limit " +page+",10";
      }else{
        sql="SELECT * FROM news WHERE `news`.`newssort` = '" +sort+"' order by 'id' limit " +page+",10";
      }
    }
    console.log(sql);
    console.log(dbconf);
    connection.query(sql,function(err, result, fields) {
        if (err) throw err;

        console.log('The result is: ', result);
        res.send(result);
    });
    // connection.end();
})
router.post('/addnews',function (req,res) {
    var newstitle=req.body.newstitle;
    var newscontent=req.body.newscontent;
    var newsimgurl=req.body.newsimgurl;
    var newssort=req.body.newssort;
    var newsadddate=req.body.newsadddate;
    var sql="INSERT INTO `news` (`newstitle`, `newsimgurl`, `newscontent`, `newsadddate`, `newssort`) VALUES ( '" +newstitle+"', '" +newsimgurl+"', '" +newscontent+"', '" +newsadddate+"', '" +newssort+"')";
    console.log(sql);
    connection.query(sql,function(err, result, fields) {
        if (err) throw err;

        console.log('The result is: ', result);
        res.send(result);
    });
})
router.post('/deletenews',function (req,res) {
    var newstitle=req.body.newstitle;
    var sql="DELETE FROM `news` WHERE `news`.`newstitle` = '" +newstitle+"'";
    console.log(sql);
    connection.query(sql,function(err, result, fields) {
        if (err) throw err;

        console.log('The result is: ', result);
        res.send(result);
    });
})
router.post('/modify_query',function (req,res) {
    var newstitle=req.body.newstitle;
    var sql="SELECT * FROM news WHERE newstitle='" +newstitle+"'";
    connection.query(sql,function(err, result, fields) {
        if (err) throw err;

        console.log('The result is: ', result);
        res.send(result);
    })
})
router.post('/update',function (req,res) {
    var newstitle=req.body.newstitle;
    var newscontent=req.body.newscontent;
    var newsimgurl=req.body.newsimgurl;
    var newssort=req.body.newssort;
    var newsadddate=req.body.newsadddate;
    var oldnewstitle=req.body.oldnewstitle;
    var sql="UPDATE `news` SET `newstitle` = '" +newstitle+"', `newsimgurl` = '" +newsimgurl+"', `newscontent` = '" +newscontent+"', `newsadddate` = '" +newsadddate+"', `newssort` = '" +newssort+"' WHERE `news`.`newstitle` = '" +oldnewstitle+"'";
    connection.query(sql,function(err, result, fields) {
        if (err) throw err;

        console.log('The result is: ', result);
        res.send(result);
    })
})

module.exports = router;
