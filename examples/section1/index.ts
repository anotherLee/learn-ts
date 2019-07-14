// 数组的声明有两种
let list1: number[] = [1, 2, 2];
let list2: Array<string> = ["abc", "12"];

// 元组的声明
let x: [string, number, string];
x = ["a", 2, "b"]
console.log(x.length)

// 枚举类型
enum Color {
    RED = 2,
    BLUE = 4,
    YELLOW
}

// never类型，表示有异常
function neverDemo(): never {
    throw new Error();
}
function neverDemo2(): never {
    while (true) {

    }
}

// 类型断言
let someValue: any = "this is a string";
let len: number = (<string>someValue).length;
let len1: number = someValue as number;
