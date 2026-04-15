// filter function 
let nums=[1,2,3,4,7,8,5,9,4,7];
let even=nums.filter((el)=>{
    return el % 2 ==0;
})
console.log(even);


let odd=nums.filter((el)=>{
    return el % 2!=0;
})
console.log(odd);
