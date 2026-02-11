// Generate random numbers 
// from 1 to 10

 let num=Math.random(); 
 num=num*10;
num=Math.floor(num);  // get nearest smallest value
 num=num+1;
 console.log(num);

// in one line
// let num=(Math.floor(Math.random()*10)+1);
// console.log(num);

