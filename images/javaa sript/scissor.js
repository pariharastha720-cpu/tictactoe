let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const userscorepara = document.querySelector("#user-s"); 
const compscorepara = document.querySelector("#comp-s"); 
const msg = document.querySelector("#msg");

const compchoice=()=>{
    const options = ["rock","paper","scissor"];
    const compgame = Math.floor(Math.random()*3);
    return options[compgame];
};

const Tie =()=>{
    console.log("same choices");
};

const showwinner=(userwin,userchoice,compchoicef)=>{
     if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! ${userchoice} beats ${compchoicef}`;
        msg.style.color = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose! ${compchoicef} beats ${userchoice}`;
        msg.style.color = "red";
    }
};

const game =(userchoice) =>{
    console.log("user choice is ",userchoice);
    const compchoicef  = compchoice();
    console.log("computer choice is ",compchoicef);
    if (userchoice==compchoicef)
    {
        console.log ("tie",Tie());
    }
    else {
        let userwin = true ;
        if(userchoice=="rock"){
            userwin =compchoice=='paper'? false : true ;
        }
        else if (userchoice=="paper"){
            userwin=compchoice=="scissor"? false:true;
        }
        else if(userchoice=="scissor"){
            userwin=compchoice=="rock" ?false :true;
        }
        showwinner(userwin,userchoice,compchoicef);
    }   
};

choices.forEach((choice)  =>{
    choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    game(userchoice);
    })
});