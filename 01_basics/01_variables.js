const accountId = 14444
let accountEmail = "chiraganand@live.com"
var accountPassword = "chirag@123"
accountCity = "Delhi"
let accountState;

// accountId = 5 //not allowed

accountEmail = "test@abc.de"
accountPassword = "test"
accountCity = "Rohtak"

/*
Prefer not to use VAR; because of issue in block scope and
functional scope.
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);