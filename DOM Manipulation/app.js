// let smallimages=document.querySelectorAll("img");
// for(let i=0;i<smallimages.length;i++){
//     smallimages[i].src="spiderman_img.png";
// }

// let para=document.querySelector("p");
// console.dir(para);
// console.dir(para.innerHTML);
// console.dir(para.innerText);
// console.dir(para.textContent);
// para.innerText="Hi I am Souptik Koley";
// para.innerHTML="Hi i am <b>Peter parkar</b>";
// let heading=document.querySelector("h1");
// heading.innerHTML=`<u>${heading.innerText}</u>`;
// heading.style.color="red";


// let img=document.querySelector("img");
// console.log(img.getAttribute("id"));   // mainImg
// img.setAttribute("id","Spiderman");
// console.log(img.getAttribute("id"));
// console.log(img.getAttribute("class"));
// img.setAttribute("class","images");
// console.log(img.getAttribute("class"));

// let links=document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color="red";
// }


// let heading=document.querySelector("h1");
// heading.classList.add("green");
// heading.classList.toggle("underline");
// heading.classList.toggle("underline");
// heading.classList.toggle("green");


// - Parent Element , children , previousElementSibling , 

// let h4=document.querySelector("h4");
// console.log(h4.parentElement);
// let box=document.querySelector(".box");
// console.log(box.children);  // h4 and ul
// let img=document.querySelector("img");
// console.log(img.previousElementSibling);  // h1

let newp=document.createElement("p");
console.dir(newp);
newp.innerHTML="hi ! I am a newp";
let body=document.querySelector("body");
body.appendChild(newp);

let button=document.createElement("button");
button.innerText="click me";
body.appendChild(button);
button.classList.add("color");
let p=document.querySelector("p");
p.append(button); // last
p.prepend(button); // first
p.insertAdjacentElement("beforebegin",button);
body.removeChild(button);
p.remove();