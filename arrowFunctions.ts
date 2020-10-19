var getKeyValue = function() {
    return 10;
}
console.log(getKeyValue());

var getArrowValue = () => {
    return 10;
}
console.log(getArrowValue());

var getArrowShort = () => 10;
console.log(getArrowShort());
const getConstant = (m: number,n: number) => 10*m*n;
console.log(typeof(getConstant));
console.log(getConstant(10,12));