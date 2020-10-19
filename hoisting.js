function greetPerson(name) {
    if (name === "Soumya") {
        var greet = "Hello Soumya";
    }
    else {
        var greet = "Hello Others";
    }
    alert(greet);
}
greetPerson("Soumya");
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
};
// let in for loops
for (var i = 1; i <= 10; i++) {
    _loop_1(i);
}
