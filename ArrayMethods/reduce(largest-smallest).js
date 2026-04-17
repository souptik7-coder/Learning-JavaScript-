// using reduce function to find largest element
let arr=[8,7,1,2,5,6,9];
let largestnumber=arr.reduce((res,el)=>{
    if(res>el){
        return res;
    }else{
        return el;
    }
})
console.log(largestnumber);

let nums=[5,9,2,7,6,10];
let smallestnumber=nums.reduce((res,el)=>{
    if(res<el){
        return res;
    }else{
        return el;
    }
})
console.log(smallestnumber);