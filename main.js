console.log("JS");

// DOM文件物件模式
// 文件.透過ID搜尋("元素名稱")
document.getElementById("box1").innerHTML="哈囉~~";

var a=10;
var b=1.5;
var c="文字";
var d=true;       

console.log(a);

// 運算子
// 程式內=指定符號
// =右邊先執行再指定給左邊
a=a+3;
console.log(a);

var e=7;
e=e**2;
console.log(e);
var num1 =10;
num1 **=5
console.log("指定運算子:" + num1)

// 自訂涵式function, method
// 函式 函式名稱(參數1，參數2，...) { 程式內容 }
function functionA() {
    console.log("我是函式 A");
}
// 需要呼叫才能執行
functionA();


function addTen(number) {
    number +=10
    console.log("加十:"+number);
}
addTen(7);
addTen(11);

function mul(a,b) {
    console.log("數字相乘的結果:" + (a*b));
}
mul(999,7);