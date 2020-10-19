let displayColor = function(message : String, ...elements : String[]){
    console.log(message);
    console.log(elements);
    console.log(arguments.length);
    for(let i in elements){
        console.log(elements[i]);
    }
}

let display = "colors of my choice";
displayColor(display,"Red","Green");
displayColor(display,"Blue","Indigo");

console.log("----------SPread -------------");
let arrayOfColor = ["Red","Blue","Pink","Gray"];
displayColor(display,...arrayOfColor);
