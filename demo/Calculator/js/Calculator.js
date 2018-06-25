// 获取span节点对象
var span = document.getElementById('span1');
console.log(span);
// 获取按键节点对象
var btn = document.getElementById('btn');
// 定义一个事件添加函数，分别对不同的浏览器进行适配
function addEvent(obj, type, handle) {
    try { // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type, handle, false);
    } catch (e) {
        try { // IE8.0及其以下版本
            obj.attachEvent('on' + type, handle);
        } catch (e) { // 早期浏览器
            obj['on' + type] = handle;
        }
    }
};

// 定义一个自定义的逻辑函数
var arr = []; //定义一个数组用于存储计算的时候的参数
var memory; //定义一个变量用于存储，计算器记忆存储的数据
function clickbtn(e) {
    /* 判断按键对象中的几个比较特殊的按钮的值，根据不同的值在span对象中添加不同的内容，
通过给计算符号或者函数判断所需做的操作*/
    console.log('outer' + arr);
    console.log('数组长度为' + arr.length)
    if (e.target.value == "清除") {
        span.innerHTML = "";
        arr = []; //清除按钮，将屏幕清空，并且将用于存储计算参数的数组置空
    } else if (e.target.value == "+") {
        if (arr.length < 1) { /*如果数组为空，当用户输入加号的时候，将屏幕上的当前值存储到数组第一个，作为第一个参数，并且把加号存储到数组作为第二个参数*/
            arr.push(span.innerHTML);
            arr.push("+");
            console.log('jiahao' + arr);
        } else {
            /*如果数组不为空，则判断用户之前的输入存储到数组中的参数，用于判断用户是否需要连续计算*/
            if (arr[1] == '+') {
                span.innerHTML = parseFloat(arr[0]) + parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('+');
            } else if (arr[1] == '-') {
                span.innerHTML = parseFloat(arr[0]) - parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('+');
            } else if (arr[1] == '×') {
                span.innerHTML = parseFloat(arr[0]) * parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('+');
            } else if (arr[1] == '÷') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('+');
            } else if (arr[1] == 'xΛy') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('+');
            }
        }
    } else if (e.target.value == "-") {
        if (arr.length < 1) { /*如果数组为空，当用户输入减号的时候，将屏幕上的当前值存储到数组第一个，作为第一个参数，并且把减号存储到数组作为第二个参数*/
            arr.push(span.innerHTML);
            arr.push("-");
            console.log('jiahao' + arr);
        } else {
            /*如果数组不为空，则判断用户之前的输入存储到数组中的参数，用于判断用户是否需要连续计算*/
            if (arr[1] == '+') {
                span.innerHTML = parseFloat(arr[0]) + parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('-');
            } else if (arr[1] == '-') {
                span.innerHTML = parseFloat(arr[0]) - parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('-');
            } else if (arr[1] == '×') {
                span.innerHTML = parseFloat(arr[0]) * parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('-');
            } else if (arr[1] == '÷') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('-');
            } else if (arr[1] == 'xΛy') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('-');
            }
        }
    } else if (e.target.value == "×") {
        if (arr.length < 1) {
            arr.push(span.innerHTML);
            arr.push("×");
            console.log('jiahao' + arr);
        } else {
            if (arr[1] == '+') {
                span.innerHTML = parseFloat(arr[0]) + parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('×');
            } else if (arr[1] == '-') {
                span.innerHTML = parseFloat(arr[0]) - parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('×');
            } else if (arr[1] == '×') {
                span.innerHTML = parseFloat(arr[0]) * parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('×');
            } else if (arr[1] == '÷') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('×');
            } else if (arr[1] == 'xΛy') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('×');
            }
        }
    } else if (e.target.value == "÷") {
        if (arr.length < 1) {
            arr.push(span.innerHTML);
            arr.push("÷");
            console.log('jiahao' + arr);
        } else {
            if (arr[1] == '+') {
                span.innerHTML = parseFloat(arr[0]) + parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('÷');
            } else if (arr[1] == '-') {
                span.innerHTML = parseFloat(arr[0]) - parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('÷');
            } else if (arr[1] == '×') {
                span.innerHTML = parseFloat(arr[0]) * parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('÷');
            } else if (arr[1] == '÷') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('÷');
            } else if (arr[1] == 'xΛy') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('÷');
            }
        }
    } else if (e.target.value == "xΛy") {
        if (arr.length < 1) {
            arr.push(span.innerHTML);
            arr.push("xΛy");
            console.log('mi' + arr);
        } else {
            if (arr[1] == '+') {
                span.innerHTML = parseFloat(arr[0]) + parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('xΛy');
            } else if (arr[1] == '-') {
                span.innerHTML = parseFloat(arr[0]) - parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('xΛy');
            } else if (arr[1] == '×') {
                span.innerHTML = parseFloat(arr[0]) * parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('xΛy');
            } else if (arr[1] == '÷') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('xΛy');
            } else if (arr[1] == 'xΛy') {
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
                arr = [];
                arr.push(span.innerHTML);
                arr.push('xΛy');
            }
        }
    } else if (e.target.value == "cot") {
        span.innerHTML = Math.cos(parseFloat(span.innerHTML)) / Math.sin(parseFloat(span.innerHTML));
    } else if (e.target.value == "sin") {
        span.innerHTML = Math.sin(parseFloat(span.innerHTML));
    } else if (e.target.value == "cos") {
        span.innerHTML = Math.cos(parseFloat(span.innerHTML));
    } else if (e.target.value == "tan") {
        span.innerHTML = Math.tan(parseFloat(span.innerHTML));
    } else if (e.target.value == "√") {
        span.innerHTML = Math.sqrt(parseFloat(span.innerHTML));
    } else if (e.target.value == "log(n)") {
        span.innerHTML = Math.log(parseFloat(span.innerHTML));
    } else if (e.target.value == "exp(n)") {
        span.innerHTML = Math.exp(parseFloat(span.innerHTML));
    } else if (e.target.value == "存储") {
        memory = span.innerHTML; //将当前屏幕的字符存储到memory变量中
    } else if (e.target.value == "取存") {
        span.innerHTML = memory; //取出当前存储的字符
    } else if (e.target.value == "退格") {
        span.innerHTML = (span.innerHTML).replace((span.innerHTML).charAt((span.innerHTML).length - 1), "");
    } else if (e.target.value == "=") {
        // 通过判断数组中的第二个元素的值来使用不同的数学方式来计算
        console.log('result' + arr);
        if (arr[1] == "+") {
            if (arr.length = 2) {
                arr.push(span.innerHTML);
                console.log('jia' + arr);
                span.innerHTML = parseFloat(arr[0]) + parseFloat(arr[2]);
            } else {
                alert('请输入第二个参数');
            }
        } else if (arr[1] == "-") {
            if (arr.length = 2) {
                arr.push(span.innerHTML);
                console.log('jian' + arr);
                span.innerHTML = parseFloat(arr[0]) - parseFloat(arr[2]);
            } else {

            }
        } else if (arr[1] == "×") {
            if (arr.length = 2) {
                arr.push(span.innerHTML);
                console.log('cheng' + arr);
                span.innerHTML = parseFloat(arr[0]) * parseFloat(arr[2]);
            } else {

            }
        } else if (arr[1] == "÷") {
            if (arr.length = 2) {
                arr.push(span.innerHTML);
                console.log('chu' + arr);
                span.innerHTML = parseFloat(arr[0]) / parseFloat(arr[2]);
            } else {

            }
        } else if (arr[1] == "xΛy") {
            span.innerHTML = Math.pow(parseFloat(arr[0]), parseFloat(arr[2]));
        } else {
            alert("输入有误，请按照计算器的使用方式按顺序输入");
        }
    } else if (!e.target.value) {
        //去除用户点击到非按钮区的事件；
    } else {
        //判断用户的数字按钮是否是连续输入
        console.log('else' + arr.length)
        if (arr.length < 1) {
            span.innerHTML += e.target.value;
        } else if (arr.length > 2) {
            arr[2] = arr[2] + e.target.value;
            span.innerHTML = arr[2];
        } else if ((arr.length > 1) && (arr.length < 3)) {
            arr[2] = e.target.value;
            console.log('inner' + arr[2]);
            span.innerHTML = arr[2];
            console.log('数组长度为' + arr.length);
            console.log(arr);
        } else {
            //do nothing
        }
    }
};
// 执行事件绑定函数
addEvent(btn, 'click', clickbtn);
