// Dom Events
// let buttons=document.querySelectorAll("button");
// let b=()=>{
//     console.log("Hi ! How are you");
// }
// let c=()=>{
//     console.log("button was clicked");
// }
// for(let i=0;i<buttons.length;i++){
//     buttons[i].onmouseenter=b;
//     buttons[i].onclick=c;
// }

let buttons=document.querySelectorAll("button");
for(let btn of buttons){
 btn.addEventListener("click",sayhello);
 btn.addEventListener("click",sayname);   
}
function sayhello(){
    console.log("hellow");
}
function sayname(){
    console.log("Campus Hub");
}