let totalChances = 3;
let currentCount = 0;
let computerCount = 0;
let playerCount = 0;

window.onload = function(){
        
    document.getElementById("Rock").onclick = player;
    document.getElementById("Paper").onclick = player;
    document.getElementById("Scissors").onclick = player;

    document.getElementById("div-result").innerHTML = `TOTAL CHANCES : ${totalChances}`;
    document.getElementById("refresh-btn").hidden = true;
}


function player() {

    let clist = document.getElementById("computer");
    let plist = document.getElementById("player");

    let cli = document.createElement("li");
    let pli = document.createElement("li"); 
    let result = '';

    document.getElementById("div-result").innerHTML = '';

    if(currentCount < totalChances){

        currentCount++;
        let playerSelection = this.id;
        let computerSelection = computerPlay(); 

        result = playGround(playerSelection,computerSelection);  
        
       // console.log("You : "+playerChoice);
       // console.log("Computer : "+computerChoice);
       // console.log(result);
        
        switch(result){
            case 0: break;
            case 1: ++playerCount;
                    break;
            
            case 2: ++computerCount;
                    break;
        }

        cli.appendChild(document.createTextNode(computerSelection));
        clist.appendChild(cli);

        pli.appendChild(document.createTextNode(playerSelection));
        plist.appendChild(pli);   
       
    }
    
    if(currentCount === totalChances)
    {
        document.getElementById("refresh-btn").hidden = false;
        getResult(computerCount,playerCount);
    }
        
}

function getResult(computerCount,playerCount){

    if(computerCount > playerCount){
        document.getElementById("div-result").innerHTML = `Computer Wins... [ Computer Score : ${computerCount} AND Your Score : ${playerCount} ]`;
    }
    else if(computerCount < playerCount){
        document.getElementById("div-result").innerHTML = `You Win... [ Computer Score : ${computerCount} AND Your Score : ${playerCount} ]`;
    }
    else
        document.getElementById("div-result").innerHTML = `Match Draw... [ Computer Score : ${computerCount} AND Your Score : ${playerCount} ]`;
}

function playGround(playerSelection,computerSelection){
    //    console.log(playerSelection);
    //    console.log(computerSelection);

    if(playerSelection === "Rock"){
        if(computerSelection === "Scissors"){
            return 1;
        }
        else
            return 2;
    }
    else if(playerSelection === "Paper"){
        if(computerSelection === "Rock")
            return 1;
        else
            return 2;
    }          
    else if(playerSelection === "Scissors"){
        if(computerSelection === "Rock")
            return 2;
        else
            return 1;
    }
    else
        return 0;
    
}

function computerPlay(){
    let gameOptions = ['Rock',"Paper","Scissors"];
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
   
    
}

function refreshPage() {
    location.reload();
}


