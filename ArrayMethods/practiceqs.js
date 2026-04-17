// check all numbers in this array are multiple or not 

let nums=[10,20,30,40,50,60];
let ans=nums.every((el)=>{
    return el %10 ==0;
})
console.log(ans);
