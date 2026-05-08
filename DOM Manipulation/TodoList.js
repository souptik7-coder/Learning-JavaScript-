let button=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
button.addEventListener("click",function(){
    let items=document.createElement("li");
    items.innerText=input.value;
    let deletebutton=document.createElement("button");
    deletebutton.innerText="Delete";
    deletebutton.classList.add("delete");
    ul.appendChild(items);
    items.appendChild(deletebutton);
    console.log(input.value);
    input.value="";
})
// let buttons=document.querySelectorAll(".delete");
// for(deletebutton of buttons){
//     deletebutton.addEventListener("click",function(){
//         console.log("delete");
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
ul.addEventListener("click",function(){
    console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        console.log("deleted");
        let listitems=event.target.parentElement;
        console.log(listitems);
        listitems.remove();
    }
})