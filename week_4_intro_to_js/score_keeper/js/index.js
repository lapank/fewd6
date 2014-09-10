var score = 0; //initial score


function reset() {  //curly braces mean "here is a paragraph"
	//reset score to zero
	score = 0
	document.getElementById('result').innerHTML = score;
}

function addFive() {
	score += 5; // score = score + 5;
	document.getElementById('result').innerHTML = score;
}

function addTen() {
	score += 10;
	document.getElementById('result').innerHTML = score;
}

function minusOne() {
	score --; //or score = -1;   or score--; called a D incriment
	document.getElementById('result').innerHTML = score;
}


document.getElementById('zero').onclick = reset; //object.method.method.value
document.getElementById('add5').onclick = addFive;  //these are our "click handelers"
document.getElementById('add10').onclick = addTen;
document.getElementById('sub1').onclick = minusOne;



