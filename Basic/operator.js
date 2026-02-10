// assignment operators
let age=25;
age+=1; // age=age+1;
console.log(age);

let t=5;
let u=7;
console.log("t="+t);
console.log("u="+u);
u=t; // as t=5
console.log("u="+u); // 5
// unary opetaor
let a=5;
a++;
console.log(a);
a--;
console.log(a);
 
// pre increment opetaor
let b=10;
let c=++b;  // change , then use
console.log(b);
console.log(c);

//post increment operator
let x=4;
let y=x++;
console.log(x);
console.log(y);

// practice qs - predict the output

let num=5;
console.log(num); //5
let newnum=num++;
console.log(newnum);//5
console.log(num); // 6
newnum=++num; 
console.log(newnum); //7
console.log(num); // 7


// Arithmetic operator

let k=10;
let l=5;
console.log("The sum is :"+(k+l));
console.log("The multiplication is :"+k*l);
console.log("The sub is :"+(k-l));
console.log("The divison is :"+(k/l));
console.log("The modulo is :"+(k%l));
console.log("The power is :"+(k**l));

// boolean in JS

let isadult =true;
let isadult1=false;
console.log(isadult);
console.log(isadult1);


// comparison operator

let number1=15;
let number2=30;
console.log("The comparison is :"+(number1 > number2)); // false
console.log("The comparison is :"+(number1 < number2));  // true
console.log("The comparison is :"+(number1 >= number2)); // false
console.log("The comparison is :"+(number1 <= number2));  // true
console.log("The comparison is :"+(number1 != number2)); // true
console.log("The comparison is :"+(number1 == number2)); // false