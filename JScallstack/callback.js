// callback : A callback is a function passed as an argument to another function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sum){
    sum(a,b);
}
// calculator(1,2,sum);  output is 3 
// with arrow function  :)-  
calculator(1,2,(a,b)=>{
    console.log(a+b);
})               // -- also the output is 3


// -- callback hell --
console.log("loading data1...");
function getdata(data,nextdata){
    setTimeout(()=>{
        console.log("data",data);
        if(nextdata){
            nextdata();
        }
    },2000)
}
getdata(1,()=>{
    console.log("loading data2...");
    getdata(2,()=>{
        console.log("loading data3...");
        getdata(3,()=>{
            console.log("loading data4...");
            getdata(4);
        })
    })
});