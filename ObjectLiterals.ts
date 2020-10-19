let firstname = "Soumya";
let lastname = "Mondal";
let Person = {
    firstname ,//: firstname,
    lastname //: lastname
}

function createPerson(firstname : string,lastname : string,age : number){
    return {
        firstname,
        lastname,
        isSenior(){
            return age>60;
        }
    }
}

//Part 2:
let ln = "last name";
let person  = {
    "firstname" : "Soumya",
    [ln] : "Mondal"
}