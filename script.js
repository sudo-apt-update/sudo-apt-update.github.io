var t = "AM";
var d = new Date();
var date = d.toDateString();

function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function amPM(j) {
	if (j > 12) {
		j -= 12;
		t = "PM";
	}
	return j;
}

var h = addZero(amPM(d.getHours()));
var time = " " + h + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());

window.onload = function() {
	setFooter();
}

function setFooter() {
	document.getElementById("footer").innerHTML = "Page loaded  " + date + " " + time + " " + t + "; Site updated Mon Aug 31 2020";
}

var hidden = true;
function toggle(id) {
	var element = document.getElementById(id);
	if (hidden) {
		element.style.display = "block";
		hidden = !hidden;
	} else {
		element.style.display = "none";
		hidden = !hidden;
	}
}
