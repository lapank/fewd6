var status = 'on';

function lightSwitch() {
	if (status === 'on') { //if condition equals this then the condition will be changed to what is inside the curly braces.
		document.body.className = 'dark';
		status = 'off'; //because then you are turning the light off
	} else {
		document.body.className = '';//empty string is the equivilant to saying there is nothing in the css
		status = 'on';

	}
}

document.getElementById('light_switch').onclick = lightSwitch;