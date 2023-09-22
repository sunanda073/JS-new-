const accountId = 1445567;
let accountEmail = "sunanda@gmail.com";
var accountPassword = "012"; 
accountCity = "Kolkata";
let accountState; //undefined

//accountId=2; // not allowed
accountEmail= "apple@gmail.com";
accountPassword= 2121;
accountCity="Bangaluru";

console.log(accountId);

console.table([accountCity, accountId, accountPassword, accountEmail, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/