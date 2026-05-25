// console.log("minigame");
// let gamenum = 58;
// usernum= prompt("guess the number");
// while(usernum != gamenum){
//     usernum= prompt("try again");
// }
// console.log("congratulations you guessed it ");
let box = document.querySelector("#box");
box.onmouseover =()=>{
    console.log("you are inside the box");
};
let bt1 = document.querySelector("#bt1");
bt1.onclick = (e)=>{
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};
bt1.addEventListener("click",()=>{
    console.log("button was clicked");
});