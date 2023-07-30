const accountId = 144553;
let accountEmail = "test@gmail.com";
var accountPassword = "12345";
accountCity = "Bangalore"; //I didnt written any datatype but still prints ,but it is not a good practice

let accountState;
console.log(accountState); //undefined    //because you have declared a variable and  not initialized

// accountId=2;       //cannot reinitialize as it is declared with const keyword
// console.log(accountId);   //TypeError: Assignment to constant variable.

accountEmail = "testnew@gmail.com";
accountPassword = "22145";
accountCity = "Bengaluru";

console.table([accountId, accountEmail, accountPassword, accountCity]); //works    //array of variables

/*
Prefer not to use var
because of functional scope
*/ //MultiLine Comment
//    Single Line Comment
