/**
 * Created by hasee on 2016/5/16.
 */
$(document).ready(function () {
    $(window).on("load",function () {
        imglocatin();
        var imgdata={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"4.jpg"}]};
        console.log(dataload());
        //给浏览器增加鼠标滑动事件，监听鼠标滑过的高度
        window.onscroll=function () {
            //当达到文档加载的零界点时候，执行加载数据的操作
            if(dataload()){
                $.each(imgdata.data,function (index, value) {
                    //给文档中增加图片内容
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    // console.log("../img/" + $(value).attr("src"));
                    $("<img>").attr("src", "../img/" + $(value).attr("src")).appendTo(content);
                })
                //增加完的图片使用瀑布流来定位
                imglocatin();
            }
        }
    })
})

function dataload() {
    var box=$(".box");
    //获取下一次数据加载的高度的零界点
    var dataloadheight = parseFloat(box.last().get(0).offsetTop + Math.floor(box.last().height()/2));
    //获取文档的高度
    var documentheight=$(document).height();
    //获取鼠标滑过的距顶端的高度
    var scrollheight=$(window).scrollTop();
    //判断当最底端的图片高度是否小于文档高度+鼠标滑过的高度
    return (dataloadheight<documentheight+scrollheight)?true:false;
}

function imglocatin() {
    //获取box对象
    var box=$(".box");
    //获取box对象的宽度
    var boxwidth=box.eq(0).width();
    //计算当前窗口横向能摆放的图片数量
    var num=Math.floor($(window).width()/boxwidth);
    //
    //定义一个数组用于存储当前每列图片的高度
    var boxarr = [];
    //遍历box对象
    box.each(function (index,value) {
        //获取当前的每一个图片的高度
        var boxheight=box.eq(index).height();
        //判断第一排图片的高度并将每列图片的当前高度存储到数组当中
        if(index<num){
            boxarr[index]=boxheight;
            console.log(boxarr);
            // console.log(boxarr[0]);
        }else{
            //获取当前每一列中高度最小的那一列的高度
            var minboxheight = Math.min.apply(null,boxarr);
            // console.log(minboxheight);
            //获取当前列高最小的那一列的列号
            var minboxindex=$.inArray(minboxheight,boxarr);
            // console.log(minboxindex);
            //当图片超过第一行时设置当前图片的摆放位置，使用绝对布局将图片摆放到列高最小的那个位置下面
            box.eq(index).css({
                "position":"absolute",
                "top":minboxheight,
                "left":box.eq(minboxindex).position().left
            })
            //摆放完成之后将最小高度的那一列高度重新计算，并将高度更新到数组，用于重新计算下一次的最小列高
            boxarr[minboxindex]+=box.eq(index).height();
        }
    })
}