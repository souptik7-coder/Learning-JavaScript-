// trim creates new string & remove spaces 

let str="    Hellow World   ";
console.log(str);
console.log(str.trim());
// let password=prompt("enter your password");
// let newpassword=password.trim();
// console.log(newpassword); 

// uppercase & lowercase

let msg="error";
console.log(msg.toUpperCase());
let sms="ERROR";
console.log(msg.toLowerCase());

// string methods with arguments   ( indexOf)

let string="ILOVECODING";
console.log(string.indexOf("Love")); // -1
console.log(string.indexOf("LOVE")); // 1
console.log(string.indexOf("O"));   // 2 

// method chaining 
let wp="      Hi!How are you      ";
console.log(wp.trim().toUpperCase());


// slice 

let str1="Ilovecoding";
console.log(str1.slice(5));  // coding
console.log(str1.slice(1,5)); // love
let channel="CampusHub"; 
console.log(channel.slice(6,channel.length));  // Hub
console.log(channel.slice(-3));  // Hub
console.log(str1.replace("coding","cricket"));
