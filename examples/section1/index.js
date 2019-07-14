// 数组的声明有两种
var list1 = [1, 2, 2];
var list2 = ["abc", "12"];
// 元组的声明
var x;
x = ["a", 2, "b"];
console.log(x.length);
// 枚举类型
var Color;
(function (Color) {
    Color[Color["RED"] = 2] = "RED";
    Color[Color["BLUE"] = 4] = "BLUE";
    Color[Color["YELLOW"] = 5] = "YELLOW";
})(Color || (Color = {}));
// never类型，表示有异常
function neverDemo() {
    throw new Error();
}
function neverDemo2() {
    while (true) {
    }
}
// 类型断言
var someValue = "this is a string";
var len = someValue.length;
var len1 = someValue;
