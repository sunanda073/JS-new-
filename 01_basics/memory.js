/* 
memory is of two types -->
1) stack (primitive) (get copy of the variable)
2) heap (non-primitive) (get the reference of the variable)
*/
let myName = "sunanda"
let anotherName = myName
anotherName= "Nandu"
console.log(myName);
console.log(anotherName);

let user1={
    email : "user1@gmail.com",
    upi : "user1.oksbi"
}

let user2= user1

user2.email = "user2@gmail.com"
console.log(user1);
console.log(user2);


/*
Primitive dataType goes in stack memory; And it provides copy of that element.
So when we change something (through assigned variable) it gets changed in copy of element  not in original.


Opposite of this. Non primitive dataType get stored in HEAP memory. 
And it gives reference value to assigned elements. 
So when assigned variable makes changes it changes the both values(original and assigned one.
    */
