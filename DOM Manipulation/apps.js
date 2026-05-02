// practice question : Add the following elements to the container using JS and DOM methods

// 1. a <p> with red text that says "Hey I am red!" 

let p=document.createElement("p");
let body=document.querySelector("body");
p.innerHTML="Hey I am red!";
body.appendChild(p);
p.style.color="red";
p.style.fontWeight="bolder";

// 2. an <h3> with blue text that says " I am a blue h3 ! "

let h3=document.createElement("h3");
body.appendChild(h3);
h3.innerHTML="I am blue h3";
h3.style.color="blue";

// 3. a <div> with a black border and pink background color with the following elements inside of it 
// another <h1> says that "I am in div"  a <p> that ays "ME TOO! "

let div=document.createElement("div");
body.appendChild(div);
div.style.backgroundColor="pink";
div.style.border="2px solid black";
div.style.padding="10px";
let h1=document.createElement("h1");
h1.innerHTML="I am in div";
let p1=document.createElement("p");
p1.innerHTML="ME TOO!";
p1.style.fontWeight="bolder";
div.appendChild(h1);
div.appendChild(p1);