const accountId = 1221;
var accountEmail = "jiw12@gmail.com";
let acconutAddress = "ilam";

// accountId = 12; not allowed because const variables cannot change
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

accountEmail ="df@j";
acconutAddress = "jhapa"

console.log(accountId);



console.table([accountId, accountEmail, acconutAddress]);