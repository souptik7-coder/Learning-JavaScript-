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

// 3. 