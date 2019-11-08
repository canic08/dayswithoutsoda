// set count (database)
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", "0");
}

// update count (html)
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

// this is now calling the update function to update the number on the webpage
update();


// add one to count (first button)
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

// reset count (second button)
function reset() {
	if (confirm("Are you sure you want to reset?")) {
    	localStorage.setItem("count",0);
		update();
	}
}


