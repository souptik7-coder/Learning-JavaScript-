
// This is async function
async function hello(){
    console.log("hellow");
}
hello();

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(300);
        },3000)
    })
}
async function getApi(){
    console.log("fetching data 1...");
    await api();
    console.log("fetching data 2...");
    await api();
}

function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success");
        },2000);
    })
}
async function newdata(){
    console.log("fetching data1...");
  await  getdata(1);
    console.log("fetching data2...");
   await getdata(2);
    console.log("fetching data3...");
   await getdata(3);
}


// IIFE : Immediately invoked function expression

// So I also write this :)-
//  (async ()=>{
//      console.log("fetching data1...");
//   await  getdata(1);
//     console.log("fetching data2...");
//    await getdata(2);
//     console.log("fetching data3...");
//    await getdata(3);
//  })();    - function call automatically in browser

