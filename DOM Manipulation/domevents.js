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

// let buttons=document.querySelectorAll("button");
// for(let btn of buttons){
//  btn.addEventListener("click",sayhello);
//  btn.addEventListener("click",sayname);   
// }
// function sayhello(){
//     console.log("hellow");
// }
// function sayname(){
//     console.log("Campus Hub");
// }

// let box=document.querySelector(".box");
// box.addEventListener("click",function(){
//     console.log("box was clicked");
// })
// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("paragraph was clicked");
// })


//  -- uses of this function  --


// let p=document.querySelector("p");
// let button=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// function changecolor(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
//     this.style.color="white";
// }
// button.addEventListener("click",changecolor);
// p.addEventListener("click",changecolor);
// h1.addEventListener("click",changecolor);
// h3.addEventListener("click",changecolor);


// --  Keyboard Events --

// let button=document.querySelector("button");
// button.addEventListener("click",function(event){
//     console.log(event);
//     console.log("clicked");
// })
// let input = document.querySelector("input");
// input.addEventListener("keydown",function(event){
//         console.log("code=",event.code);
//         if(event.code=="ArrowUp"){
//             console.log("Character forward");
//         }else if(event.code=="ArrowDown"){
//             console.log("Character moves backward");
//         }else if(event.code=="ArrowRight"){
//             console.log("Character was Right");
//         }else if(event.code=="ArrowLeft"){
//             console.log("Character was Left");
//         }
// })


// -- Form Events ---

// let form =document.querySelector("form");
// form.addEventListener("submit",function(){
//     event.preventDefault();
//     console.log("form submitted");
//     console.dir(form);
//    let user=document.querySelector("#user");
//    let password=document.querySelector("#pass");
//    console.log(user.value);
//    console.log(password.value);
//     // let user=this.elements[0];
//     // let pass=this.elements[1];
//     // console.log(user.value);
//     // console.log(pass.value);
// })


//  -- Change Event & Input Event

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// })
// let user=document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value=",user.value);
// })
// let password=document.querySelector("#pass");
// password.addEventListener("input",function(){
//     console.log("input event");
//     console.log(password.value);
// })


// -- mini activity - paragraph editor

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitted");
})
let p=document.querySelector("p");
let input=document.querySelector("input");
input.addEventListener("input",function(){
    console.log(input.value);
    p.innerText=this.value;
})