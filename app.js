var userScore = 0;
const smallUser = "(player)".fontsize(2).sup();
var compScore = 0;
const smallComp = "(comp)".fontsize(2).sup();
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function win(userChoice, compChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML =  `${userChoice + smallUser} beats ${compChoice + smallComp}, player wins!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
	
}

function lose(userChoice, compChoice){
	compScore++;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML =  `${userChoice + smallUser} loses to ${compChoice + smallComp}, player loses...`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(() =>  document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function tie(userChoice, compChoice){
	result_div.innerHTML =  `${userChoice + smallUser} and ${compChoice + smallComp} are friends, it's a draw`;
	document.getElementById(userChoice).classList.add('grey-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 300);
}


function generate_comp_choice(){
	const choices = ["Rock", "Paper", "Scissors"];
	const randomNum = Math.floor(Math.random()*3)
	return choices[randomNum]
}

function make_move(userChoice){
	const compChoice = generate_comp_choice()
	switch(userChoice +" "+ compChoice){
		case "Paper Paper":
		case "Rock Rock":
		case "Scissors Scissors":
			tie(userChoice,compChoice);
			break;
		case "Paper Rock":
		case "Rock Scissors":
		case "Scissors Paper":
			win(userChoice,compChoice);
			break;
		case "Rock Paper":
		case "Scissors Rock":
		case "Paper Scissors":
			lose(userChoice,compChoice);
			break;
		
	}
}

function main(){
	rock_div.addEventListener('click',() => make_move("Rock"));

	paper_div.addEventListener('click',() => make_move("Paper"));

	scissors_div.addEventListener('click',() => make_move("Scissors"));
}


main();
