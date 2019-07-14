
class Animal {

}

class Dog {

}

// 工厂模式
let fac: Animal = function(c: new() => Animal): Animal{
    return new c();
};

// 交叉类型，既有一个类的属性或方法，也有另一个类的属性或者方法
function extend<T, U>(first: T, second: U): T & U {
    let res: T & U = {} as T & U;
    for (let id in first) {
        res[id] = first[id] as any;
    }
    for (let id in first) {
        if (!res.hasOwnProperty(id)) {
            res[id] = first[id] as any;
        }
    }
    return res;
}

class Person{
    constructor(public name) {}
}

interface loggable {
    log(): void;
}

class ConsoleLog implements loggable{
    log(): void {
        console.log('log')
    }
}

let r: Person & ConsoleLog = extend(new Person('xxx'), new ConsoleLog());
console.log(r.name);
r.log();

