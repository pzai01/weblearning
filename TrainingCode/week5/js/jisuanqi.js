$(document).ready(function(){
    // var y=$("#number").val();
    // 定义每个数字按钮按键的事件
  $("#btn_1").click(function(){
    $("#span1").append(function(){
       return 1
    });
});
  $("#btn_2").click(function(){
    $("#span1").append(function(){
       return 2
    });
});
  $("#btn_3").click(function(){
    $("#span1").append(function(){
       return 3
    });
});
  $("#btn_4").click(function(){
    $("#span1").append(function(){
       return 4
    });
});
  $("#btn_5").click(function(){
    $("#span1").append(function(){
       return 5
    });
});
  $("#btn_6").click(function(){
    $("#span1").append(function(){
       return 6
    });
});
  $("#btn_7").click(function(){
    $("#span1").append(function(){
       return 7
    });
});
  $("#btn_8").click(function(){
    $("#span1").append(function(){
       return 8
    });
});

  $("#btn_9").click(function(){
    $("#span1").append(function(){
       return 9
    });
});
  $("#btn_0").click(function(){
    $("#span1").append(function(){
       return 0
    });
});
  $("#btn_add").click(function(){
    $("#span1").append(function(){
       return " + ";
    });
});
  $("#btn_sub").click(function(){
    $("#span1").append(function(){
       return " - ";
    });
});
  $("#btn_mul").click(function(){
    $("#span1").append(function(){
       return " * ";
    });
});
  $("#btn_div").click(function(){
    $("#span1").append(function(){
       return " / ";
    });
});
  // 定义清除按钮按键的事件
  $("#btn_clear").click(function(){
    $("#span1").text(function(){
       return ""
    });
});
  // 定义结果按钮的事件
  $("#btn_result").click(function(){
      // alert($("#span1").text());
      // alert($("#span1").text().split(" "));
      // 将显示面板的内容分割成包含3个元素的数组
      var arry=$("#span1").text().split(" "); 
      // alert(arry);
      // alert(typeof(arry[0]));
      // 通过判断第二个元素的内容，决定计算的方式，通过parseint函数将数组里的字符串转换为number类型
      if (arry[1]=="+") {
        $("#span1").text(function(){
       return parseInt(arry[0])+parseInt(arry[2]);
    });
      }else if (arry[1]=="-") {
        $("#span1").text(function(){
       return parseInt(arry[0])-parseInt(arry[2]);
    });
      }else if (arry[1]=="*") {
        $("#span1").text(function(){
       return parseInt(arry[0])*parseInt(arry[2]);
    }); 
      }else if (arry[1]=="/") {
        $("#span1").text(function(){
       return parseInt(arry[0])/parseInt(arry[2]);
    });
      };
});
//   $("#btn_result").click(function(){
//     $("#span1").text(function(){
//       // alert($("#span1").text());
//       // alert($("#span1").text().split(" "));
//       var arry=$("#span1").text().split(" ");
//       alert(arry);
//       if (arry[1]="+") {
//         $("#span1").text(function(){
//        return "yes"
//     });
//       }

//     });
// });
});


