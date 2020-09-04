window.onload = function() {
	setHeadText();
	setFooter();
}

function setHeadText() {
	document.getElementById("headtext").innerHTML = "<p>Takes a little bit to load...servers are finicky, so refresh if it takes longer than 5s. Implemented with <a href=https://sheetsu.com>sheetsu</a>!</p><hr>"
}

function successFunc(data) {
	document.getElementById("learned").innerHTML = "";
	// add each note
	data.forEach(function(thing, i) {
	document.getElementById("learned").innerHTML += "<p> On " + thing.Date + ", " + thing.Learned + " " + thing.Thing + "</p>";
	});
}

function succeedingPage(data) {
	// add each note
	data.forEach(function(thing, i) {
	document.getElementById("learned").innerHTML += "<p> On " + thing.Date + ", " + thing.Learned + " " + thing.Thing + "</p>";
	});
}

function errorFunc(e) {
  console.log(e);
}
