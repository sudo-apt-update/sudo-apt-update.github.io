window.onload = function() {
	document.getElementById("footer").innerHTML = "Page loaded  " + Date() + "; Site edited Sat Aug 29 2020";
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
