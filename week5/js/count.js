// $(document).ready(function(){
//     // 通过点击事件触发统计
//     $("#btn").click(function(){
//       var arr=["a","x","b","d","m","a","k","m","p","j","a"];
//       // 遍历数组的每个元素
// for (var i = 0; i < arr.length; i++) {     
//     var count=0;
//     var arr1= new Array();
//     var arrobj= {};
//     // 通过第二个循环找出与数组每个元素相同的元素位置
//     for (var x = 0; x < arr.length; x++) {
//         if (arr[x]==arr[i]) {
//             // 将元素位置添加到一个新的arr1数组当中
//             arr1.push(x);
//             // alert("数组"+arr1);
//             // 当存在这样的相同元素的时候数量加1
//             count++;
//         }
//     }
//     // 将统计后的内容输出到span元素当中；
//     $("#span").append(arr[i]+"的数量是："+count+"  位置是："+arr1+"</br>");
//       arrobj[arr[i]]=count;
// } 
//     });
// });


/*var arr=["a","x","b","d","m","a","k","m","p","j","a"];
      // 遍历数组的每个元素
for (var i = 0; i < arr.length; i++) {     
    var count=0;
    var arr1= new Array();
    // 通过第二个循环找出与数组每个元素相同的元素位置
    for (var x = 0; x < arr.length; x++) {
        if (arr[x]==arr[i]) {
            // var count=0;
            // count=count+1;
            // alert(arr[i]);
            // alert(x+1);
            // 将元素位置添加到一个新的arr1数组当中
            arr1.push(x);
            // alert("数组"+arr1);
            // 当存在这样的相同元素的时候数量加1
            count++;
        }
    }
    // alert(arr[i]+"的数量是:"+count);
    // $("#btn").click(function(){
    //     $("#span").append(arr[i]+"的数量是："+count+"位置是："+arr1);
    // })
    // alert(arr[i]+"的位置是:"+arr1);
    // 将统计后的内容输出到span元素当中；
    $("#span").append(arr[i]+"的数量是："+count+"  位置是："+arr1+"</br>");
} */


$(document).ready(function(){
var arr=["a","x","b","d","m","a","k","m","p","j","a"];
var count = {};  //定义一个新的数组，用于承载字母和对应的数量
var pos= {};    //定义一个新数组用于存储字母的位置；
for (var i = 0; i < arr.length; i++) {
    // alert(arr[i]);
    var char = arr[i];
    // alert(char);
    // alert(i);
    // count[char]=i;
    // arrobj.value=i;
    // alert(arrobj[char]);
    // alert(count[char]);
    if (count[char]) {
        count[char] +=1;  //如果存在相同元素则加1
        pos[char]+=","+i; //如果存在相同元素则把元素位置增加进去
    }else{
        count[char]=1;  //如果没有重复值则设置值为1；
        pos[char]=i;    //如果没有重复值则设置值为当前角标；
    }
};
console.log(count)
var max = Object.keys(count).sort(function(a,b){
    return count[a]<count[b];//以count中字母的值作为分类的方式
})[0];   //返回一个排序后的新数组的第一个值
// alert(max);
console.log(max);
console.log(count[max]);
console.log(pos[max]);
$("#btn").click(function(){
    $("#span").append("数量最多的是："+max+"  位置是："+pos[max]+" 数量是："+count[max]);
  });
});

