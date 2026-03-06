const accountId = 144563
let accountEmail = "sasmita@123";
var accountPassword= "45123";
accountCity = "Bangalore"
let accountState;

//accountId = 123456
console.log("1.count Id is: " + accountId);
console.log("2.count Email is: " + accountEmail);
console.log("3.count Password is: " + accountPassword);
console.log("4.count City is: " + accountCity);

accountEmail = "sasmita@456";
accountPassword = "451234";
accountCity = "Mumbai"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// Prefer not to use var, because of its scope issue. It is better to use let and const.