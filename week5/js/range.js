$(document).ready(function(){
    // var y=$("#number").val();
  $("#range").click(function(){
    $("#result").text(function(){
       if (($("#number").val()>=90)&&($("#number").val()<=100)) {
        return 1;
       }else if (($("#number").val()>=80)&&($("#number").val()<=89)){
        return 2;
       }else if (($("#number").val()>=70)&&($("#number").val()<=79)) {
        return 3
       }else if (($("#number").val()>=60)&&($("#number").val()<=79)) {
        return 4
       }else if (($("#number").val()>=50)&&($("#number").val()<=59)) {
        return 5
       }else if (($("#number").val()>=40)&&($("#number").val()<=49)) {
        return 6
       }else if (($("#number").val()>=30)&&($("#number").val()<=39)) {
        return 7
       }else if (($("#number").val()>=20)&&($("#number").val()<=29)) {
        return 8
       }else if (($("#number").val()>=10)&&($("#number").val()<=19)) {
        return 9
       }else if (($("#number").val()>=0)&&($("#number").val()<=9)) {
        return 10
       }else alert("请输入0-100之间的数")
    });
});
});

