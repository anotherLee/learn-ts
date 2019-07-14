// 函数类型
var res = function (x, y) {
    return x + y;
};
var res1 = function (x, y) {
    return x + y;
};
/*
 * 函数可选参数
 * 1. 可选参数后面不能加必需参数
 * 2. 带默认值的参数就会变成可选参数
 * 3. 默认值参数如果放在最后可以不传，如果其后还有别的参数，还想用默认值的话就必须传undefined
 */
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + lastName;
}
buildName("Bob");
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Bob'; }
    return firstName + lastName;
}
buildName2(undefined, "Smith");
/*
 * 剩余参数
 */
function buildName3(firstName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var str = "";
    str += firstName;
    rest.forEach(function (item) {
        str += item;
    });
    return str;
}
// this, 在typescript中，this的类型可以手动指定，如果是void，用的就是默认的
function fn() {
    console.log(this);
}
fn();
function pick(x) {
    if (x) {
        return x;
    }
    return x;
}
