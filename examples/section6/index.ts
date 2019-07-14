
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

// 交叉类型是几种类型之和；联合类型是几种类型之一
// 借助类型保护，可以更方便
interface bird{
    fly(): void;
    layEggs(): void;
}
interface fish{
    swim(): void;
    layEggs(): void;
}
function getAnimal(a: bird | fish) {
    // if ((a as bird).fly) {
    //     (a as bird).fly();
    // }
    // (a as fish).swim();
    if (isFish(a)) {
        a.swim();
    } else {
        a.fly();
    }
}
function isFish(animal: bird | fish): animal is fish{
    return (animal as fish).swim !== undefined;
}

