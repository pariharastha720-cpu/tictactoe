// let marks =[34,52,65,45,64];
// console.log(marks);
// marks[2]=66;
// console.log(marks);
// sum = 0;
// for (let val of marks){
//     sum+=val;
// }
// marks.splice(4,2,65);
// console.log(marks);
// let avg= sum/marks.length;
// console.log(avg);


// light and dark 
let mode = document.querySelector("#mode");
let curmode =  "light";
let body = document.querySelector("body");
mode.addEventListener("click",()=>{
    if (curmode === "light") {
        curmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } 
    else{
      curmode = "light";
      body.classList.add("light");
      body.classList.remove("dark");
    }
    console.log(curmode);
});