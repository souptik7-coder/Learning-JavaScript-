// Set timeout

console.log("Hi there!");
setTimeout(()=>{
    console.log("Campus Hub");
},4000);
console.log("Hello World");


// Set Interval function

let id1=setInterval(()=>{
    console.log("Whats! Up guyss");
},2000);
let id2=setInterval(()=>{
    console.log("Hi everyone! Welcome to our Channel");
},4000);
clearInterval(id1);
