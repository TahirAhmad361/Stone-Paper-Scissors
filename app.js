let myScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg"); 

let userScore = document.querySelector("#my_score");

let comptScore = document.querySelector("#comp_score"); 

const genNum = () => {
 let compNum = Math.floor(Math.random()*3);
 const option = ["rock","paper","scissors"];
 return option[compNum];
} 

let choices = document.querySelectorAll(".box");

 choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const draw = (userChoice,compChoice) =>{
    msg.innerText = `Draw! ${userChoice} is same as ${compChoice}`;
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice)=>{
    const compChoice = genNum();
    console.log("your choice =",userChoice);
    console.log("computer choice =",compChoice);
    if(userChoice === compChoice){
        draw(userChoice,compChoice);
    }else{
        let userWin = true;
        if(userChoice == "rock" ){
            userWin = (compChoice == "paper")? false : true; 
            console.log(userWin);
        }
        else if(userChoice == "paper"){
            userWin = (compChoice == "rock")? true : false;
            console.log(userWin);
        }
        else{
            userWin = (compChoice == "rock")? false : true;
            console.log(userWin);
        }
    whoWin(userWin,userChoice,compChoice);
    }
   
}
const whoWin = (userWin,userChoice,compChoice) => {
        if(userWin == true){
            myScore++;
            userScore.innerText = myScore;
            msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            compScore++;
            comptScore.innerText = compScore;
            msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }

