var ireneMoods = {
	"TiredMood": ["Irene is tired :(", "img/TiredMood.png"],
	"VeryTiredMood": ["Irene is VERY tired :(", "img/TiredMood.png"],
	"PartyMood": ["Party, party, patry!", "img/PartyMood.png"],
	"HungryMood": ["Very hungry!", "img/HungryMood.png"]
}

function setMood(mood) {
	var image = document.getElementById('IDMoodPicture');
	var text = document.getElementById('IDMoodText');

	text.innerHTML = ireneMoods[mood][0];
	image.src = ireneMoods[mood][1];
}

function isHungryMood(date) {
	var day = date.getDay();
	// Food mood due to some reasons is not working on weekends
	if (day == 0 || day == 6) {
		return false;
	}

	var hours = date.getHours();
	var minutes = date.getMinutes();
	//Check for lunch
	if (hours >= 11 && hours < 12 && minutes >= 30) {
		return true;
	}
	//Check for diner
	if (hours >= 19 && hours <= 21) {
		return true;
	}
	return false;
}

function isVeryTiredMood(date) {
	if (date.getDay() == 5 && date.getHours() <= 15) {
		return true;
	}
	return false;
}

function isPartyMood(date) {
	if (date.getDay() >= 5 && date.getHours() > 18) {
		return true;
	}
	return false;
}

function updateMood() {
	var mood = "TiredMood";
	var date = new Date();

	if (isHungryMood(date)) {
		mood = "HungryMood";
	}
	else if (isVeryTiredMood(date)) {
		mood = "VeryTiredMood";
	}
	else if (isPartyMood(date)) {
		mood = "PartyMood";
	}
	// No special mood, leave the default
	else {
		return;
	}
	setMood(mood);
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
	updateMood();
});