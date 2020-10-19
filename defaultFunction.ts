let percentValue = 0.1;
let getBonus = function(value = 10,bonus : number = 10*percentValue) {
    console.log(value+bonus);
    console.log(arguments.length);
}
console.log(getBonus());
console.log(getBonus(1,1));
console.log(getBonus(1,2));