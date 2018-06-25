var color=['#009c65','#00BCD4','rgba(33, 150, 243, 0.87)','#333'];
var nav=document.getElementById('nav_ul');
var nav_selected=document.getElementById('selected');
var arr2={};//定义一个对象用于存储cookie的键值
window.onload=function(){
    if (document.cookie.length>0) {
        console.log(typeof(document.cookie));
        console.log(document.cookie);
        var arr=document.cookie.split("; ");//通过分号和空格将多个cookie分割成数组
        console.log(arr);//打印出数组内容；
        for (var i = 0; i < arr.length; i++) {
            //通过=号将每个arr数组元素再次分割成更小放的数组，分割后的数组包含两个元素
            var char=(arr[i].split("="))[0];
            var charvalue=(arr[i].split("="))[1];
            console.log(char);
            console.log((arr[i].split("="))[1]);
            eval((arr[i].split("="))[1]);
            console.log(eval((arr[i].split("="))[1]));
        //将每一个数组的第一个值作为key，第二个数组元素作为值存入到arr2这个对象当中
            arr2[char]+= eval((arr[i].split("="))[1]);
        };
        //打印出arr2对象的值，此处能打印出arr2对象，但是每个值的前面会出现undefined这个多余的字样
        console.log(arr2);
        nav_selected.style.backgroundColor=arr2.nav_selected.style.backgroundColor;
        nav.style.borderTopColor=arr2.nav.style.borderTopColor
    };
}
document.getElementById('color1').addEventListener('click',function(){
    nav_selected.style.backgroundColor=color[0];
    nav.style.borderTopColor=color[0];
    document.cookie='nav_selected.style.backgroundColor=color[0]';
    document.cookie='nav.style.borderTopColor=color[0]'
},false);
document.getElementById('color2').addEventListener('click',function(){
    nav_selected.style.backgroundColor=color[1];
    nav.style.borderTopColor=color[1];
    document.cookie='nav_selected.style.backgroundColor=color[1]';
    document.cookie='nav.style.borderTopColor=color[1]'
},false);
document.getElementById('color3').addEventListener('click',function(){
    nav_selected.style.backgroundColor=color[2];
    nav.style.borderTopColor=color[2];
    document.cookie='nav_selected.style.backgroundColor=color[2]';
    document.cookie='nav.style.borderTopColor=color[2]'
},false);
document.getElementById('color4').addEventListener('click',function(){
    nav_selected.style.backgroundColor=color[3];
    nav.style.borderTopColor=color[3];
    document.cookie='nav_selected.style.backgroundColor=color[3]';
    document.cookie='nav.style.borderTopColor=color[3]'
},false);

