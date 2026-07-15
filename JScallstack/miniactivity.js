let h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            if(num>3){
                reject("error");
            }
            h1.style.color=color;
            console.log("color changed");
            resolve("success");
        },delay)
    })  
}
async function color(){
    try{
  await  changecolor("red",2000);
  await  changecolor("green",2000);
  await  changecolor("orange",2000);
  await  changecolor("blue",2000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a=5;
    console.log("b=",a+5);
}
color();


// -- small concept of try and catch block 