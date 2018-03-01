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
		document.getElementById('qSix').style.display = "block";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
	document.getElementById('qFour').style.display = "none";
};

/*
	question 6
*/

const q6Btn = document.getElementById('qSixBtn');
q6Btn.onclick = function() {
	const answer = document.getElementById('Animal').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('qFive').style.display = "block";
	} else {
		message.textContent = "Why didn't you write anything?";	
	}
	document.getElementById('qSix').style.display = "none";
};

/*
	question 5
*/

const q5Btn = document.getElementById('qFiveBtn');
q5Btn.onclick = function() {
    const answer = document.getElementById('Item').value;
    const message = document.createElement('p');
        message.innerHTML = "Once upon a time, in The Land of Oz, <br> " 
                            + Name.value + ", travelled to " 
                            + Place.value +  " because the heart wants what it wants and <br> " 
                            + Name.value + " was eating leftover of "
                            + Food.value + " to celebrate the Tooth Fairy's birthday. <br> Later, " 
                            + Name.value + " was "
                            + Hobby.value + " <br> but suddently started to hallucinate <br> and saw a group of "
                            + Animal.value + " run towards the bar <br> On the way, while chasing after the " 
                            + Animal.value + "<br>"
                            + Name.value + " found a strange looking " 
                            + Item.value + " <br> but then "
                            + Name.value + " shrugged and moved along with the day. ";
    document.body.appendChild(message);


};



