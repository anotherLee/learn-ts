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
