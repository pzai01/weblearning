$('document').ready(function(){
// 更多产品按钮滑过事件
$('#more,#more_item_panel').mouseover(function(){
    $('#more_item_panel').css({
       'display':'block'
     });
    $('#more').css({
       'background':'#f9f9f9',
       'color':'#555'
     });
});
$('#more,#more_item_panel').mouseout(function(){
    $('#more_item_panel').css({
       'display':'none'
     });
    $('#more').css({
       'background':'rgba(0, 102, 255, 0.98)',
       'color':'white'
     })
});
// 账户按钮滑过事件
$('#acount,#acount_item').mouseover(function(){
    $('#acount_item').css({
       'display':'block'
     });
});
$('#acount,#acount_item').mouseout(function(){
    $('#acount_item').css({
       'display':'none'
     });
});
// 设置按钮滑过事件
$('#setting,#setting_item').mouseover(function(){
    $('#setting_item').css({
       'display':'block'
     });
});
$('#setting,#setting_item').mouseout(function(){
    $('#setting_item').css({
       'display':'none'
     });
});

//鼠标滑过导航栏颜色变化
$('nav>li',this).on('mouseover',function(){
   $(this).css({
       'background':'rgba(128, 128, 128, 0.76)',
       'color':'white'
    });
});

$('nav>li',this).on('mouseout',function(){
   $(this).removeAttr('style') 
});

//中间内容区域切换
$('#myAttention').on('click',function(){
   if ($('#toggle').length>0) {
       $('#toggle').removeAttr('id');
       $('.my_at').attr({'id':'toggle'});
   };
   if ($('.selected').length>0) {
        $('.selected').removeClass('selected');
       $('#myAttention').addClass('selected');
       }
});
$('#recommendation').on('click',function(){
   if ($('#toggle').length>0) {
       $('#toggle').removeAttr('id');
       $('.recommend').attr({'id':'toggle'});
   };
   if ($('.selected').length>0) {
        $('.selected').removeClass('selected');
       $('#recommendation').addClass('selected');
       }
});
$('#Navigation').on('click',function(){
   if ($('#toggle').length>0) {
       $('#toggle').removeAttr('id');
       $('.nav_content').attr({'id':'toggle'});
   };
   if ($('.selected').length>0) {
        $('.selected').removeClass('selected');
       $('#Navigation').addClass('selected');
       }
});
$('#Movies').on('click',function(){
   if ($('#toggle').length>0) {
       $('#toggle').removeAttr('id');
       $('.vedio').attr({'id':'toggle'});
   };
   if ($('.selected').length>0) {
        $('.selected').removeClass('selected');
       $('#Movies').addClass('selected');
       }
});
$('#buy').on('click',function(){
   if ($('#toggle').length>0) {
       $('#toggle').removeAttr('id');
       $('.shopping').attr({'id':'toggle'});
   };
   if ($('.selected').length>0) {
        $('.selected').removeClass('selected');
       $('#buy').addClass('selected');
       }
});

    //换肤
$('#changeColor').on('click',function () {
    $('.color_change').css({
        'display':'block'
    })
});
$('#img1').on('click',function () {
    $('.container').css({
        'background':'url(../img/background_img1.jpg) no-repeat',
        'background-size':'100% 100%'
    })
    $('.color_change').css({
        'display':'none'
    })
});
 $('#img2').on('click',function () {
     $('.container').css({
         'background':'url(../img/background2.jpg) no-repeat',
         'background-size':'100% 100%'
     })
     $('.color_change').css({
            'display':'none'
     })
 });
$('#img3').on('click',function () {
    $('.container').css({
        'background':'url(../img/background3.jpg) no-repeat',
        'background-size':'100% 100%'
    })
    $('.color_change').css({
            'display':'none'
    })
});

    //天气详情
$('#weather_detail') .on('mouseover',function(){
    $('.weather').css(
        {
            'display':'block'
        }
    )
});
$('#weather_detail') .on('mouseout',function(){
    $('.weather').css(
        {
            'display':'none'
        }
        )
});







});

