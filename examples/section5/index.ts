// 函数类型
let res: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

interface func {
    (x: number, y: number): number;
}

let res1: func = (x: number, y: number): number => {
    return x + y;
};

/*
 * 函数可选参数
 * 1. 可选参数后面不能加必需参数
 * 2. 带默认值的参数就会变成可选参数
 * 3. 默认值参数如果放在最后可以不传，如果其后还有别的参数，还想用默认值的话就必须传undefined
 */
function buildName(firstName: string, lastName: string = "Smith"): string {
    return firstName + lastName;
}
buildName("Bob");
function buildName2(firstName: string = 'Bob', lastName: string): string {
    return firstName + lastName;
}
buildName2(undefined, "Smith");

/*
 * 剩余参数
 */
function buildName3(firstName: string, ...rest: string[]): string {
    let str: string = "";
    str += firstName;
    rest.forEach((item:string): void => {
        str += item;
    });
    return str;
}
