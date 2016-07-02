/**
 * Created by hasee on 2016/5/21.
 */
var oldtitle;
//定义一个获取格式化之后的当前时间的函数
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

$(document).ready(function () {
    $("#update_list_btn").on("click",function () {
        $(".news_update_list").siblings("div").removeClass("pannel_show");
        $(".news_update_list").addClass("pannel_show");
    })
    $("#count_btn").on("click",function () {
        $(".news_count").siblings("div").removeClass("pannel_show");
        $(".news_count").addClass("pannel_show");
    })
    $("#news_add_btn").on("click",function () {
        $(".news_add").siblings("div").removeClass("pannel_show");
        $(".news_add").addClass("pannel_show");
    })
    $("#news_scan_btn").on("click",function () {
        $(".news_scan").siblings("div").removeClass("pannel_show");
        $(".news_scan").addClass("pannel_show");
    })

    //加载新闻列表
    var newsdata;
    //定义当前页面的为1
    var page=1;
    function loadnewsdata() {
        $.ajax({
            url:"http://localhost/PHP/selected.php",
            type:'GET',
            data:{
              page:page,
                sort:"all"
            },
            success:function (data) {
                console.log(typeof (data));
                console.log(data);
                var json=data;
                console.log(typeof (JSON.parse(json)));
                json=JSON.parse(json);
                console.log(json);
                $(".news_update_list").children("div").children("table").children("tbody").append("<tr>"+"<th>"+"序号"+"</th>"+"<th>"+"类型"+"</th>"+"<th>"+"新闻标题"+"</th>"+"<th>"+"更新时间"+"</th>"+"<th>"+"操作"+"</th>"+"</tr>");
                var i=0;
                $.each(json, function (index, item) {
                    //循环获取数据
                    i++;
                    var newsid = json[index].id;
                    var newstitle = json[index].newstitle;
                    // var newscontent = json[index].newscontent;
                    var newsimgurl = json[index].newsimgurl;
                    var newssort = json[index].newssort;
                    var newsadddate = json[index].newsadddate;
                    $(".news_update_list").children("div").children("table").children("tbody").append("<tr>"+"<td>"+i+"</td>"+"<td>"+newssort+"</td>"+"<td>"+newstitle+"</td>"+"<td>"+newsadddate+"</td>"+"<td>"+"<a type='button' class='btn btn-primary modify' data-toggle='modal' data-target='#exampleModal'>"+"修改"+"</a>"+" "+"<a type='button' class='btn btn-primary remove'>"+"删除"+"</a>"+"</td>"+"</tr>");
                });


            },
            error:function (data) {
                console.log("error:"+data)
            }
        })
    }
    loadnewsdata();
    //点击下一页按钮，加载下一页
    $(".next").on("click",function () {
        page+=10;
        $("#newslist_tbody").empty();
        loadnewsdata();
    })
    //点击前一页，加载前一页的数据
    $(".previous").on("click",function () {
        page-=10;
        if(page<0){
            page=0;
            alert("当前已经是第一页了！")
        }
        $("#newslist_tbody").empty();
        loadnewsdata();
    })

    //新闻统计
    function newscount() {
        $.ajax({
            url:"http://localhost/PHP/selected.php",
            type:'GET',
            data:{
                count:true,
                page:0,
                sort:"all",
            },
            success:function (data) {
                var json=data;
                console.log(typeof (JSON.parse(json)));
                json=JSON.parse(json);
                console.log(json);
                $(".news_count").children("div").children("table").children("tbody").append("<tr>"+"<th>"+"序号"+"</th>"+"<th>"+"新闻类型"+"</th>"+"<th>"+"总数量"+"</th>"+"</tr>");
                var news_Sports_count=0;
                var news_Entertainment_count=0;
                var news_Military_count=0;
                var news_Science_count=0;
                var news_Business_count=0;
                    //循环获取数据
                    $.each(json,function (index,item) {
                        if(json[index].newssort=="财经"){
                            news_Business_count++;
                        }else if(json[index].newssort=="科技"){
                            news_Science_count++;
                        }else if(json[index].newssort=="体育"){
                            news_Sports_count++;
                        }else if(json[index].newssort=="娱乐"){
                            news_Entertainment_count++;
                        }else if(json[index].newssort=="军事"){
                            news_Military_count++;
                        }
                    })
                $(".news_count").children("div").children("table").children("tbody").append("<tr>"+"<td>"+1+"</td>"+"<td>"+"体育"+"</td>"+"<td>"+news_Sports_count+"</td>"+"</tr>");
                $(".news_count").children("div").children("table").children("tbody").append("<tr>"+"<td>"+2+"</td>"+"<td>"+"科技"+"</td>"+"<td>"+news_Science_count+"</td>"+"</tr>");
                $(".news_count").children("div").children("table").children("tbody").append("<tr>"+"<td>"+3+"</td>"+"<td>"+"娱乐"+"</td>"+"<td>"+news_Entertainment_count+"</td>"+"</tr>");
                $(".news_count").children("div").children("table").children("tbody").append("<tr>"+"<td>"+4+"</td>"+"<td>"+"军事"+"</td>"+"<td>"+news_Military_count+"</td>"+"</tr>");
                $(".news_count").children("div").children("table").children("tbody").append("<tr>"+"<td>"+5+"</td>"+"<td>"+"财经"+"</td>"+"<td>"+news_Business_count+"</td>"+"</tr>");
            },
            error:function (data) {
                console.log("error:"+data)
            }
        })
    }
    newscount();

    //添加新闻
    $("#add_submit").on("click",function () {
        console.log($("#newstitle").val());
        console.log($("#newscontent").val());
        console.log($("#newsimgurl").val());
        console.log($("#newssort option:selected").text());
        console.log($("#newsadddate").val());
        $.ajax({
            url:"http://localhost/PHP/index.php",
            type:'POST',
            datatype:'json',
            data:{
                "newstitle":$("#newstitle").val(),
                "newscontent":$("#newscontent").val(),
                "newsimgurl":$("#newsimgurl").val(),
                "newssort":$("#newssort option:selected").text(),
                // "newsadddate":$("#newsadddate").val(),
                "newsadddate":getNowFormatDate(),
            },
            beforeSend:function () {
                $(".newsadding").show();
            },
            success:function (data) {
                console.log(data);
                $(".newsadding").hide();
                $(".newsaddsuccess").show();
                //新闻添加成功之后删除原来新闻列表的数据，重新执行一下获取新闻列表的操作
                $("#newslist_tbody").empty();
                loadnewsdata();
                //新闻添加成功之后删除原来新闻统计列表的数据，重新执行以下获取统计列表的操作
                $("#news_count_tbody").empty();
                newscount();

            },
            error:function (data) {
                console.log("error:"+data);
                $(".newsadding").hide();
                $(".newsadderror").show();
            }

        })
    })

    //修改和删除新闻
    $("#newslist_tbody").click(function (e) {
        console.log(e);
        console.log(e.target);
        var modifycondition=$(e.target).parent("td").siblings();
        var title=$(modifycondition[2]).text();
        //修改新闻
        if($(e.target).hasClass("modify")){
            console.log(title);
            oldtitle=title;
            $.ajax({
                url:"http://localhost/PHP/modify_query.php",
                type:"POST",
                datatype:'json',
                data:{
                    "newstitle":title
                },
                success:function (data) {
                    console.log(data);
                    var json=data;
                    json=JSON.parse(json);
                    $.each(json,function (index,value) {
                        var newstitle = json[index].newstitle;
                        var newscontent = json[index].newscontent;
                        var newsimgurl = json[index].newsimgurl;
                        var newssort = json[index].newssort;
                        var newsadddate = json[index].newsadddate;
                        $("#newstitle_mod").val(newstitle);
                        $("#newscontent_mod").val(newscontent);
                        $("#newsimgurl_mod").val(newsimgurl);
                        $("#newssort_mod option:selected").text(newssort);
                        // $("#newsadddate_mod").val(newsadddate);
                    });
                },
                error:function (data) {
                    console.log("error"+data)
                }
            })
        }
        //删除新闻
        if($(e.target).hasClass("remove")){
            window.confirm("确认删除吗？");
            console.log(title);
            $.ajax({
                url:"http://localhost/PHP/remove.php",
                type:"POST",
                datatype:'json',
                data:{
                    "newstitle":title
                },
                success:function (data) {
                    console.log(data);
                    $(e.target).parent("td").parent("tr").remove();
                    //删除数据后，列表数据的序号更新
                    var nowrows=$("#newslist_tbody").children("tr");
                    console.log(nowrows);
                    $.each(nowrows,function (index,value) {
                        $(nowrows[index]).children("td:first-child").text(index);
                    })
                },
                error:function (data) {
                    console.log("error"+data)
                }
            })
        }
    })

    //更新新闻函数
    function updatenews() {
            $.ajax({
                url:"http://localhost/PHP/update.php",
                type:"POST",
                data:{
                    "oldnewstitle":oldtitle,
                    "newstitle":$("#newstitle_mod").val(),
                    "newscontent":$("#newscontent_mod").val(),
                    "newsimgurl":$("#newsimgurl_mod").val(),
                    "newssort":$("#newssort_mod option:selected").text(),
                    "newsadddate":getNowFormatDate(),
                },
                success:function (data) {
                    //新闻添加成功之后删除原来新闻列表的数据，重新执行一下获取新闻列表的操作
                    $("#newslist_tbody").empty();
                    loadnewsdata();
                    //新闻添加成功之后删除原来新闻统计列表的数据，重新执行以下获取统计列表的操作
                    $("#news_count_tbody").empty();
                    newscount();
                }
            })

    }
    //当修改新闻面板点击保存按钮时候执行更新数据库
    $("#updatenews").on("click",function () {
        updatenews();
    })



})

