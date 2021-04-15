var computerCount = 0;
var playerCount = 0;
var totalChances = 3;
var currentCount = 0;

window.onload = function(){
    
    document.getElementById("rock").onclick = player;
    document.getElementById("paper").onclick = player;
    document.getElementById("scissors").onclick = player;

    document.getElementById("div-result").innerHTML = `TOTAL CHANCES : ${totalChances}`;
    document.getElementById("refresh-btn").hidden = true;
    
}

function player() {

    let compChoice;
    let playChoice;
    
    let clist = document.getElementById("computer");
    let plist = document.getElementById("player");

    let cli = document.createElement("li");
    let pli = document.createElement("li"); 
    let result = '';

    document.getElementById("div-result").innerHTML = '';

    if(currentCount < totalChances){

        currentCount++;
        let playerChoice = this.id;
        let computerChoice = computerPlay(); 
        playGround(playerChoice,computerChoice);  
        console.log("You : "+playerChoice);
        console.log("Computer : "+computerChoice);
      
    
        compChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        playChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    
        cli.appendChild(document.createTextNode(compChoice));
        clist.appendChild(cli);

        pli.appendChild(document.createTextNode(playChoice));
        plist.appendChild(pli);
    }
    if(currentCount === totalChances){
        document.getElementById("refresh-btn").hidden = false;
        if(computerCount > playerCount){
            document.getElementById("div-result").innerHTML = `Computer Wins... [ Computer Score : ${computerCount} AND Your Score : ${playerCount} ]`;
        }
        else if(computerCount < playerCount){
            document.getElementById("div-result").innerHTML = `You Win... [ Computer Score : ${computerCount} AND Your Score : ${playerCount} ]`;
        }
        else
            document.getElementById("div-result").innerHTML = `Match Draw... [ Computer Score : ${computerCount} AND Your Score : ${playerCount} ]`;
    }
}

function playGround(playerSelection,computerSelection){
    
        if(playerSelection === computerSelection){
            console.log("Tie...");
            return 0;
        }
        if(playerSelection === "rock"){
            if(computerSelection === "scissors"){
                playerCount++;
            }
            else{
               computerCount++;
            }
        }
        if(playerSelection === "paper"){
            if(computerSelection === "rock"){
               playerCount++;
            }
            else{
                computerCount++;
            }          
        }
        if(playerSelection === "scissors"){
            if(computerSelection === "rock"){
                computerCount++;
            }
            else{
                playerCount++;
            }
        }
    
}

function computerPlay(){
    let gameOptions = ['rock',"paper","scissors"];
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
   
    
}

function refreshPage() {
    location.reload();
}


