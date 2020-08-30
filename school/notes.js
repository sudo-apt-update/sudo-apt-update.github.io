window.onload = function() {
	setHeadText();
	setFooter();
}

function setHeadText() {
	document.getElementById("headtext").innerHTML = "<p>Takes a little bit to load...servers are finicky, so refresh if it takes longer than 5s. Implemented with <a href=https://sheetsu.com>sheetsu</a>!</p><hr>"
}

function successFunc(data) {
	// clear
	document.getElementById("notes").innerHTML = ""
	// add each note
	data.forEach(function(note, i) {
	document.getElementById("notes").innerHTML += "<p>" + note.date + " " + note.notes + "</p>";
	});
}
function errorFunc(e) {
  console.log(e);
}
