// 解构
let [first, second] = [1, 2];
let [first1, ...rest] = [1, 2, 3];
let {a, b} = {a: 1, b: 2};
let {c, ...d} = {c: 'c', d: 'd', e: 'e'};

// 展开
let test = [1, 2, 3];
let res = [...test, 4, 5]
let test1 = {a: 'a', b: 'b'}
let res1 = {...test1, c: 'c'}
