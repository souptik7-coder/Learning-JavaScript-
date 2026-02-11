// Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
let num=287152;
let sum=0;
while(num>0){
    let lastdigit=num%10; // get lastdigit
    sum=sum+lastdigit;
    num=Math.floor(num/10); // remove last digit

}
console.log(sum);
