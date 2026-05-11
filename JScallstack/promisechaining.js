// basic

// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//     })
// }
// getpromise().then((res)=>{
//     console.log(res);
// })

// <--promise chaining-->

// function getFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Campus Hub");
//             resolve("success");
//         },2000);
//     })
// }
// function getFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Subscribe our channel");
//             resolve("success");
//         },2000)
//     })
// }
// console.log("loading data1...");
// getFunc1().then((res)=>{
//     console.log(res);
//     console.log("loading data2...");
//     getFunc2().then((res)=>{
//         console.log(res);
//     })
// })


//-- using promise chaining--

function getdata(data,nextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data=",data);
            resolve("success");
            if(nextdata){
                nextdata();
            }
        },4000)
    })
}
console.log("loading data1...")
getdata(1).then((res)=>{
    console.log(res);
    console.log("loading data2...");
    getdata(2).then((res)=>{
        console.log(res);
    })
})