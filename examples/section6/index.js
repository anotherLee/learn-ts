var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
// 工厂模式
var fac = function (c) {
    return new c();
};
// 交叉类型，既有一个类的属性或方法，也有另一个类的属性或者方法
function extend(first, second) {
    var res = {};
    for (var id in first) {
        res[id] = first[id];
    }
    for (var id in first) {
        if (!res.hasOwnProperty(id)) {
            res[id] = first[id];
        }
    }
    return res;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLog = /** @class */ (function () {
    function ConsoleLog() {
    }
    ConsoleLog.prototype.log = function () {
        console.log('log');
    };
    return ConsoleLog;
}());
var r = extend(new Person('xxx'), new ConsoleLog());
console.log(r.name);
r.log();
