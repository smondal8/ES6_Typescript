function greetPerson(name : String){
    if(name === "Soumya"){
        var greet = "Hello Soumya";
    }
    else{
        var greet = "Hello Others";
    }
    alert(greet);
}
greetPerson("Soumya");
// let in for loops
for(let i=1;i<=10 ;i++){
    setTimeout(function() {console.log(i);},1000);
}