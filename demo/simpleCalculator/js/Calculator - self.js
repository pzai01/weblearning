// 获取span节点对象
var span = document.getElementById('span1');
console.log(span);
// 获取按键节点对象
var btn = document.getElementById('btn');
// 增加按键点击事件，使用代理方式

// btn.addEventListener('click', function(e) {
//     console.log(e.target.value);
//     // span.innerHTML(e.target.value)
//     // alert(e.target.value);
// /* 判断按键对象中的几个比较特殊的按钮的值，根据不同的值在span对象中添加不同的内容，
// 通过给计算符号或者函数增加前后空格方便后面将span字符以空格作为传入值切割成数组*/
//     if (e.target.value == "clear") {
//         span.innerHTML = "";
//     } else if (e.target.value == "+") {
//         span.innerHTML += " + ";
//     } else if (e.target.value == "-") {
//         span.innerHTML += " - ";
//     } else if (e.target.value == "*") {
//         span.innerHTML += " * ";
//     } else if (e.target.value == "/") {
//         span.innerHTML += " / ";
//     }else if (e.target.value == "cot") {
//         span.innerHTML += " cot ";
//     }else if (e.target.value == "sin") {
//         span.innerHTML += " sin ";
//     }else if (e.target.value == "cos") {
//         span.innerHTML += " cos ";
//     }else if (e.target.value == "tan") {
//         span.innerHTML += " tan ";
//     } else if (e.target.value == "xΛy") {
//         span.innerHTML += " xΛy ";
//     } else if (e.target.value == "√") {
//         span.innerHTML += " √ ";
//     } else if (e.target.value == "log(n)") {
//         span.innerHTML += " log(n) ";
//     } else if (e.target.value == "exp(n)") {
//         span.innerHTML += " exp(n) ";
//     } else if (e.target.value == "result") {
//     // 定义一个数组来存储显示面板span中的内容，通过计算符号或者函数前后的空格将其切割成数组
//         var arr = span.innerHTML.split(" ");
//         // alert(arr);
//         // 通过判断数组中的第二个元素的值来使用不同的数学方式来计算
//         if (arr[1] == "+") {
//             span.innerHTML = parseFloat(arr[0]) + parseFloat(arr[2]);
//         } else if (arr[1] == "-") {
//             span.innerHTML = parseFloat(arr[0]) - parseFloat(arr[2]);
//         } else if (arr[1] == "*") {
//             span.innerHTML = parseFloat(arr[0]) * parseFloat(arr[2]);
//         } else if (arr[1] == "/") {
//             span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
//         }else if (arr[1] == "sin") {
//             span.innerHTML = Math.sin(parseFloat(arr[0]));
//         }else if (arr[1] == "cos") {
//             span.innerHTML = Math.cos(parseFloat(arr[0]));
//         }else if (arr[1] == "tan") {
//             span.innerHTML = Math.tan(parseFloat(arr[0]));
//         }else if (arr[1] == "cot") {
//             span.innerHTML = Math.cos(parseFloat(arr[0]))/Math.sin(parseFloat(arr[0]));
//         } else if (arr[1] == "xΛy") {
//             span.innerHTML = Math.pow(parseFloat(arr[0]), parseFloat(arr[2]));
//         } else if (arr[1] == "√") {
//             span.innerHTML = Math.sqrt(parseFloat(arr[0]));
//         } else if (arr[1] == "log(n)") {
//             span.innerHTML = Math.log(parseFloat(arr[0]));
//         } else if (arr[1] == "exp(n)") {
//             span.innerHTML = Math.exp(parseFloat(arr[0]));
//         } else {
//             alert("输入有误，请按照计算器的使用方式按顺序输入");
//         }
//     } else {
//         span.innerHTML += e.target.value;
//     }
// }, false);   */
//-----------------------------------------------------------------------
function addEvent(obj,type,handle){
    try{  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type,handle,false);
    }catch(e){
        try{  // IE8.0及其以下版本
            obj.attachEvent('on' + type,handle);
        }catch(e){  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
};
function clickbtn(e){
    if (e.target.value == "clear") {
        span.innerHTML = "";
    } else if (e.target.value == "+") {
        span.innerHTML += " + ";
    } else if (e.target.value == "-") {
        span.innerHTML += " - ";
    } else if (e.target.value == "*") {
        span.innerHTML += " * ";
    } else if (e.target.value == "/") {
        span.innerHTML += " / ";
    }else if (e.target.value == "cot") {
        span.innerHTML += " cot ";
    }else if (e.target.value == "sin") {
        span.innerHTML += " sin ";
    }else if (e.target.value == "cos") {
        span.innerHTML += " cos ";
    }else if (e.target.value == "tan") {
        span.innerHTML += " tan ";
    } else if (e.target.value == "xΛy") {
        span.innerHTML += " xΛy ";
    } else if (e.target.value == "√") {
        span.innerHTML += " √ ";
    } else if (e.target.value == "log(n)") {
        span.innerHTML += " log(n) ";
    } else if (e.target.value == "exp(n)") {
        span.innerHTML += " exp(n) ";
    } else if (e.target.value == "result") {
    // 定义一个数组来存储显示面板span中的内容，通过计算符号或者函数前后的空格将其切割成数组
        var arr = span.innerHTML.split(" ");
        // alert(arr);
        // 通过判断数组中的第二个元素的值来使用不同的数学方式来计算
        if (arr[1] == "+") {
            span.innerHTML = parseFloat(arr[0]) + parseFloat(arr[2]);
        } else if (arr[1] == "-") {
            span.innerHTML = parseFloat(arr[0]) - parseFloat(arr[2]);
        } else if (arr[1] == "*") {
            span.innerHTML = parseFloat(arr[0]) * parseFloat(arr[2]);
        } else if (arr[1] == "/") {
            span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
        }else if (arr[1] == "sin") {
            span.innerHTML = Math.sin(parseFloat(arr[0]));
        }else if (arr[1] == "cos") {
            span.innerHTML = Math.cos(parseFloat(arr[0]));
        }else if (arr[1] == "tan") {
            span.innerHTML = Math.tan(parseFloat(arr[0]));
        }else if (arr[1] == "cot") {
            span.innerHTML = Math.cos(parseFloat(arr[0]))/Math.sin(parseFloat(arr[0]));
        } else if (arr[1] == "xΛy") {
            span.innerHTML = Math.pow(parseFloat(arr[0]), parseFloat(arr[2]));
        } else if (arr[1] == "√") {
            span.innerHTML = Math.sqrt(parseFloat(arr[0]));
        } else if (arr[1] == "log(n)") {
            span.innerHTML = Math.log(parseFloat(arr[0]));
        } else if (arr[1] == "exp(n)") {
            span.innerHTML = Math.exp(parseFloat(arr[0]));
        } else {
            alert("输入有误，请按照计算器的使用方式按顺序输入");
        }
    } else {
        span.innerHTML += e.target.value;
    }
};
addEvent(btn,'click',clickbtn);
