/*
	question 1
*/
const q1Btn = document.getElementById('qOneBtn');
console.log(q1Btn);
q1Btn.onclick = function() {
	const answer = document.getElementById('Name').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('qTwo').style.display = "block";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
	document.getElementById('qOne').style.display = "none";

};


/*
	question 2
*/
const q2Btn = document.getElementById('qTwoBtn');
console.log(q2Btn);
q2Btn.onclick = function() {
	const answer = document.getElementById('Place').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('qThree').style.display = "block";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
	document.getElementById('qTwo').style.display = "none";

};

/*
	question 3
*/
const q3Btn = document.getElementById('qThreeBtn');
console.log(q3Btn);
q3Btn.onclick = function() {
	const answer = document.getElementById('Hobby').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('qFour').style.display = "block";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
	document.getElementById('qThree').style.display = "none";

};

/*
	question 4
*/

const q4Btn = document.getElementById('qFourBtn');
q4Btn.onclick = function() {
	const answer = document.getElementById('Food').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('qFive').style.display = "block";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
	document.getElementById('qFour').style.display = "none";
};

/*
	question 5
*/

const q5Btn = document.getElementById('qFiveBtn');
q5Btn.onclick = function() {
	const message = document.createElement('p');
		message.textContent ("Once upon a time, " + Name.value
 							+ ", travelled to " 
 							+ Place.value + " and was eating " 
 							+ Food.value + " while was " 
 							+ Hobby.value 
 							+ " and found an odd looking " 
 							+ Object.value);
	document.body.appendChild(message);
	


};



