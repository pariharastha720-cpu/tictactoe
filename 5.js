// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h2");
// console.dir(heading);
// heading.innerText = heading.innerText + "java script ";// let idx = 0 ;
// for(div of divs){
//     div.innerText = `the new unique value ${idx}`;
//     idx++;
// }

let newbt = document.createElement("button");
newbt.innerText="click me";
console.log(newbt);
let div = document.querySelector("div");
div.append(newbt);
console.log("div");
let newh = document.createElement("h2");
newh.innerHTML="<i>hii this is new </i>";
document.querySelector("body").prepend(newh);
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";
// div.innerText = "hello";

// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);
// let para= document.querySelector("p");
// console.log("para.getAttribute("class"));