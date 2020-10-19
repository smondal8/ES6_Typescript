var employee = {
    id : 1,
    greet : function(){
        console.log(this.id);
    }
}
employee.greet();

var employee1 = {
    id : 1,
    greet : function(){
        setTimeout(function(){console.log(this.id)},1000);
    }
}
employee1.greet();

var employee2 = {
    id : 1,
    greet : function(){
        setTimeout(()=>{console.log(this.id)},1000);
    }
}
employee2.greet();