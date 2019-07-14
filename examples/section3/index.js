function printLabel(label) {
    console.log(label);
}
printLabel({ label: 'xxx' });
function createSquare(config) {
    var newSquare = { color: '', area: 0 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.area) {
        newSquare.area = config.area;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
var p = { x: 1, y: 2 };
// p.x = 12; 报错
