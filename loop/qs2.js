// Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
let num=287152;
let count=0;
while(num>0){
    num=Math.floor(num/10);  // remove last digit
    count=count+1;
}
console.log("The count =",count);
