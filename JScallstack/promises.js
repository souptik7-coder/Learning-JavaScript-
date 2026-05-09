// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("success");
// })

function getdata(getdata,nextdata){
    return new Promise((resolve,reject)=>{
  setTimeout(()=>{
        console.log("data",getdata);
        resolve("succesfully run");
        if(nextdata){
            nextdata();
        }
    },9000);
    })
}
let promise=getdata(1,()=>{
    console.log("loading data2...");
    getdata(2,()=>{
        console.log("loading data3...");
        getdata(3);
    })
});