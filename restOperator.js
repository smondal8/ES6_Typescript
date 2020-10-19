var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColor = function (message) {
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(elements);
    console.log(arguments.length);
    for (var i in elements) {
        console.log(elements[i]);
    }
};
var display = "colors of my choice";
displayColor(display, "Red", "Green");
displayColor(display, "Blue", "Indigo");
console.log("----------SPread -------------");
var arrayOfColor = ["Red", "Blue", "Pink", "Gray"];
displayColor.apply(void 0, __spreadArrays([display], arrayOfColor));
