let button=document.querySelector("button");
let h1=document.querySelector("h1");
let div=document.querySelector("div");
function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
button.addEventListener("click",function(){
    let randomcolor=randomColor();
    h1.innerText=randomcolor;
    div.style.backgroundColor=randomcolor;
     console.log(randomColor);
    console.log("color updated");
})