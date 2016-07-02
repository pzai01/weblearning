var color=['#009c65','#00BCD4','rgba(33, 150, 243, 0.87)','#333']; //定义一个颜色数组
var nav=document.getElementById('nav_ul'); //获取到导航栏对象
var nav_selected=document.getElementById('selected'); //获取到导航栏被选中的对象
var arr2={};//定义一个对象存储cookie的键和值
//在页面加载的时候判断是否有cookie，如果有则读取cookie
window.onload=function(){
     if (document.cookie) {
        console.log(document.cookie);
        var arr=document.cookie.split("=");
        arr2[arr[0]]=arr[1];
        console.log(arr2);
        nav_selected.style.backgroundColor=eval(arr2[arr[0]]);
        nav.style.borderTopColor=eval(arr2[arr[0]]);
     } 
}
//定义四个颜色块的点击事件
document.getElementById('color1').addEventListener('click',function(){
    nav_selected.style.backgroundColor=color[0];
    nav.style.borderTopColor=color[0];
    //每次点击的时候把值存入到cookie；
    document.cookie="theme=color[0]";
},false);
document.getElementById('color2').addEventListener('click',function(){
    nav_selected.style.backgroundColor=color[1];
    nav.style.borderTopColor=color[1];
    document.cookie="theme=color[1]";
},false);
document.getElementById('color3').addEventListener('click',function(){
    nav_selected.style.backgroundColor=color[2];
    nav.style.borderTopColor=color[2];
    document.cookie="theme=color[2]";
},false);
document.getElementById('color4').addEventListener('click',function(){
    nav_selected.style.backgroundColor=color[3];
    nav.style.borderTopColor=color[3];
    document.cookie="theme=color[3]";
},false);

