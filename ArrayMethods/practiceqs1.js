//Square and sum the array elements using the arrow function and then find the average of the array.
let arr=[5,7,9,4];
let sum=arr.reduce((res,el)=>{
    return el+res;
})
console.log(sum);
let square=arr.map((el)=>{
    return el*el;
})
console.log(square);
