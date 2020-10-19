var percentValue = 0.1;
var getBonus = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = 10 * percentValue; }
    console.log(value + bonus);
    console.log(arguments.length);
};
console.log(getBonus());
console.log(getBonus(1, 1));
console.log(getBonus(1, 2));
