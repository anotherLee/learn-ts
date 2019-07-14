// 用接口限定对象形状
interface Label {
    label: string
}

function printLabel(label: Label): void {
    console.log(label)
}

printLabel({label: 'xxx'})

// 可选属性
interface Square {
    color: string;
    area: number
}

interface SquareConfig {
    color?: string;
    area?: number
}

function createSquare(config: SquareConfig): Square {
    let newSquare: Square = {color: '', area: 0};
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.area) {
        newSquare.area = config.area
    }
    return newSquare;
}

let mySquare: Square = createSquare({color: 'black'})
console.log(mySquare);

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p: Point = {x: 1, y: 2}
// p.x = 12; 报错

//额外属性
interface Extra {
    x: number;
    y: number;

    [propName: string]: any;
}

let e: Extra = {
    x: 1,
    y: 1,
    other: "abc"
}

// 函数类型
interface searchFunc {
    (sourceStr: string, res: string): boolean;
}
let s: searchFunc = function(souceStr: string, res: string) {
    let result = souceStr.search(res);
    return result > -1;
}

// 混合类型
interface Counter {
    start (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter: Counter = {} as Counter;
    counter.start = function() { return '' }
    counter.interval = 1
    counter.reset = function() {}
    return counter;
}
