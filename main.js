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
// 物件{物件資料名稱:物件資料值}
var car ={
    brand: "BMW",
    cc:2000,
    color: "gold",

    drive: function(){
        console.log("開車中.....");
    }
}
console.log("汽車的牌子:"+ car.brand);

car.drive();
// 陣列array
var numbers=[10,100,40]

console.log("陣列第三筆資料:"+ numbers[2]);

numbers[0]=999;
console.log("陣列第一筆資料:"+ numbers[0]);

// 比較運算式子
var testA =100;
var testB =50;

console.log(testA != testB);
