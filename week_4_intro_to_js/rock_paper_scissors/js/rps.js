var userChoice;
var computerChoice;
var choices = ['rock', 'paper', 'scissors'];


function runGame(event){
	var result = 'You chose: ';
	
	userChoice = event.target.id//target is whatever dom element you click o

	computerChoice = generateComputerChoice()

	result = 'You chose: ' + userChice + ' I chose: ' + comuterChoice + '. ';

	if(userChoice === computerChoice){
		result += 'We tied!';
	} else {
		if(userChoice === computerChoice){
			if(computerChoice === 'paper'){
				result += 'I win sucka!'
			} else {
				result += 'You win';
			}
		}
	}

	displayResult(result);
}


function generateComputerChoice(){
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function displayResult(result){
	document.getElementByID('result').innerHTML = result;
}


document.getElementByID('rock').onclick = runGame;
document.getElementByID('paper').onclick = runGame;
document.getElementByID('scissors').onclick = runGame;