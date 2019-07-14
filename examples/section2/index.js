var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// 解构
var _a = [1, 2], first = _a[0], second = _a[1];
var _b = [1, 2, 3], first1 = _b[0], rest = _b.slice(1);
var _c = { a: 1, b: 2 }, a = _c.a, b = _c.b;
var _d = { c: 'c', d: 'd', e: 'e' }, c = _d.c, d = __rest(_d, ["c"]);
// 展开
var test = [1, 2, 3];
var res = test.concat([4, 5]);
var test1 = { a: 'a', b: 'b' };
var res1 = __assign({}, test1, { c: 'c' });
