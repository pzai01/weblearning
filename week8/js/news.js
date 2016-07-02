/**
 * Created by hasee on 2016/5/26.
 */
var newsdata;
var sort;
var page=1;
//定义一个获取新闻列表的方法,传入两个参数，新闻类型和请求数据的页数
function loadnewslist(sort,page) {
    $.ajax({
        url:"http://localhost/PHP/selected.php",
        type:'GET',
        data:{
            page:page,
            sort:sort,
        },
        success:function (data) {
            console.log(typeof (data));
            console.log(data);
            var json=data;
            console.log(typeof (JSON.parse(json)));
            json=JSON.parse(json);
            console.log(json);
            newsdata=json;
            $.each(json, function (index, item) {
                //循环获取数据
                var newsid = json[index].id;
                var newstitle = json[index].newstitle;
                var newscontent = json[index].newscontent;
                var newsimgurl = json[index].newsimgurl;
                var newssort = json[index].newssort;
                var newsadddate = json[index].newsadddate;
                $(".news_list").append("<a class='news_item'>"+"<div class='newsimg'>"+'<img src="'+newsimgurl+'">'+"</div>"+"<div class='news_detail'>"+"<h3 class='newstitle'>"+newstitle+"</h3>"+
                    "<p class='newscontent'>"+newscontent+"</p>"+"<p>"+"<span class='newssort'>"+newssort+"</span>"+"<span class='newsadddate'>"+newsadddate+"</span>"+"</p>"+"</div>"+"</a>")
            });
        },
        error:function (data) {
            console.log("error:"+data)
        }
    })
}



$(document).ready(function () {
    //文档加载完成之后执行加载新闻列表
    loadnewslist("all",1);

    $("nav ul li",this).on("click",function () {
        $(".news_pannel").hide();
        $(".news_list").show();
        $(".loadmore").show();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        //当点击相应的新闻类型菜单的时候，获取新闻菜单的类型，并将当前新闻列表清空
        sort=$(this).text();
        $(".news_list").empty();
        if(sort=="首页"){
            $(".swiper").show();
            //当点击首页的时候重新加载所有新闻列表
            page=1;
            loadnewslist("all",1);
            $(".loadmore").attr("data-content","home")
        }else if(sort=="体育"){
            page=1;
            loadnewslist("体育",1);
            $(".loadmore").attr("data-content","sport")
        }else if(sort=="科技"){
            page=1;
            loadnewslist("科技",1);
            $(".loadmore").attr("data-content","Science")
        }else if(sort=="财经"){
            page=1;
            loadnewslist("财经",1);
            $(".loadmore").attr("data-content","Finance")
        }else if(sort=="军事"){
            page=1;
            loadnewslist("军事",1);
            $(".loadmore").attr("data-content","military")
        }else if(sort=="娱乐"){
            page=1;
            loadnewslist("娱乐",1);
            $(".loadmore").attr("data-content","Entertainment")
        }
        // $.each(newsdata,function (index,item) {
        //     var newsid = newsdata[index].id;
        //     var newstitle = newsdata[index].newstitle;
        //     var newscontent = newsdata[index].newscontent;
        //     var newsimgurl = newsdata[index].newsimgurl;
        //     var newssort = newsdata[index].newssort;
        //     var newsadddate = newsdata[index].newsadddate;
        //     //加载新闻类型等于当前类型的新闻列表
        //     if(newssort==sort){
        //         $(".news_list").append("<a class='news_item'>"+"<div class='newsimg'>"+'<img src="'+newsimgurl+'">'+"</div>"+"<div class='news_detail'>"+"<h3 class='newstitle'>"+newstitle+"</h3>"+
        //             "<p class='newscontent'>"+newscontent+"</p>"+"<p>"+"<span class='newssort'>"+newssort+"</span>"+"<span class='newsadddate'>"+newsadddate+"</span>"+"</p>"+"</div>"+"</a>")
        //     }
        // })
    })

    $("nav ul li",this).hover(function () {
        $(this).css({
            "background-color":"#CA2727",
        })
    },function () {
        $(this).removeAttr("style")
    })

    //点击左右按钮图片左右轮播
    var i=0;
    $("#img_swiper ul li:first").clone().appendTo("#img_swiper ul");
    var imgsize=$("#img_swiper ul li").size()
    $("#news_btnr").on("click",function () {
        mover()
    })
    $("#news_btnl").on("click",function () {
        movel()
    })
    //向左轮播的方法
    function mover() {
        i++;
        if(i==imgsize){
            i=1;
            $("#img_swiper ul").css({
                "left":-820*(i-1)+"px"
            })
        }
        $(".num li").siblings().removeClass("num_active");
        $(".num li").eq(i).addClass("num_active");
        $("#img_swiper ul").animate({
            "left":-820*(i)+"px"
        },1000)
    }
    //向右轮播的方法
    function movel() {
        i--;
        if(i==-1){
            i=2;
            $("#img_swiper ul").css({
                "left":-820*(imgsize-1)+"px"
            })
        }
        $("#img_swiper ul").animate({
            "left":-820*i+"px"
        },1000)
        $(".num li").siblings().removeClass("num_active");
        $(".num li").eq(i).addClass("num_active");
    }
    //定义一个轮播定时器
    var automove=setInterval(function () {
        mover()
    },2000)
    //当鼠标滑过图片的时候，清除定时器
    $("#img_swiper ul").hover(function () {
        clearInterval(automove)
    },function () {
        setInterval(function () {
            mover()
        },2000);
    })
    //当鼠标滑过相应的检索点的时候
    $(".num li",this).hover(function () {
        i=$(this).index();
        $("#img_swiper ul").animate({
            "left":-820*i+"px",
        },1000)
        $(".num li").siblings().removeClass("num_active");
        $(".num li").eq(i).addClass("num_active");
        clearInterval(automove);
    },function () {
        setInterval(function () {
            mover()
        },2000);
    })


    //点击加载更多的时候，向下继续加载新闻列表
    $(".loadmore").on("click",function () {
        console.log($(".loadmore").attr("data-content"));
        if($(".loadmore").attr("data-content")=="home"){
            page+=10;
            loadnewslist("all",page);
        }else if($(".loadmore").attr("data-content")=="sport"){
            page+=10;
            loadnewslist("体育",page);
        }else if($(".loadmore").attr("data-content")=="Science"){
            page+=10;
            loadnewslist("科技",page);
        }else if($(".loadmore").attr("data-content")=="Finance"){
            page+=10;
            loadnewslist("财经",page);
        }else if($(".loadmore").attr("data-content")=="military"){
            page+=10;
            loadnewslist("军事",page);
        }else if($(".loadmore").attr("data-content")=="Entertainment"){
            page+=10;
            loadnewslist("娱乐",page);
        }
    })
    
    //点击显示新闻的具体内容
    $(".news_list").on("click",function (e) {
        console.log($(e.target));
        var news=$(e.target).parents("a");
        console.log(news);
            $(".news_pannel").show();
            $(".swiper").hide();
            $(".news_list").hide();
            $(".loadmore").hide();
            $(".title").text($(news).children(".news_detail").children("h3").text()) ;
                $(".img").html($(news).children(".newsimg").children("img"));
                // $(news).siblings(".newsimg").children("img").appendTo(".img");
                $(".news").text($(news).children(".news_detail").children(".newscontent").text()) ;
                $(".sort").text($(news).children(".news_detail").children("p").children(".newssort").text());
                $(".date").text($(news).children(".news_detail").children("p").children(".newsadddate").text());

    })



})

// function shownews(news) {
//                 $(".news_pannel").show();
//                 $(".swiper").hide();
//                 $(".news_list").hide();
//                 $(".loadmore").hide();
//                 // var news=$(this);
//                 $(".title").text($(news).children(".news_detail").children("h3").text()) ;
//                 $(".img").html($(news).children(".newsimg").children("img"));
//                 // $(news).siblings(".newsimg").children("img").appendTo(".img");
//                 $(".news").text($(news).children(".news_detail").children(".newscontent").text()) ;
//                 $(".sort").text($(news).children(".news_detail").children("p").children(".newssort").text());
//                 $(".date").text($(news).children(".news_detail").children("p").children(".newsadddate").text());
// }
