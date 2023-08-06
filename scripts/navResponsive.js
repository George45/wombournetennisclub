// Displays button to extend nav bar when screen size is small enough
function navResponsive() {
	var mainNav = document.getElementById("mainNavBar");
	if (mainNav.className === "mainNavBar") {
		mainNav.className += " responsive";
		resetNavDrop();
	} else {
		mainNav.className = "mainNavBar";
	}
}

// Reset all nav links & 2nd teir nav links to not display
// NEED TO UPDATE: 
// CURRENTLY - MANUALLY TYPE IN EVERY NAV li THAT HAS A DROP DOWN
// CHANGE TO - FIND ALL THAT HAVE A SPECIFIC TAG / CLASS e.t.c.
function resetNavDrop(){
	document.getElementById("team").className = "mainNavDropUp";
	document.getElementById("tournament").className = "mainNavDropUp";
	document.getElementById("social").className = "mainNavDropUp";
	resetSubNavDrop();
}

// Reset 2nd tier of nav links
function resetSubNavDrop(){
	document.getElementById("teamStaffs").className = "mainNavDropUp";
	document.getElementById("teamHereWor").className = "mainNavDropUp";
	document.getElementById("clubchamps").className = "mainNavDropUp";
}

// Toggle display of clicked on nav link
function toggleNavDrop(divID) {
	var mainNav = document.getElementById("mainNavBar");
	var divToToggle = document.getElementById(divID);
	if (mainNav.className === "mainNavBar responsive"){
		if (divToToggle.className === "mainNavDropUp") {
			resetNavDrop();
			divToToggle.className = "mainNavDropDown";
		} else {
			resetNavDrop();
		}
	}
}

// Toggle display of clicked on 2nd tier nav link
function toggleSubNavDrop(divID) {
	var mainNav = document.getElementById("mainNavBar");
	var divToToggle = document.getElementById(divID);
	if (mainNav.className === "mainNavBar responsive"){
		if (divToToggle.className === "mainNavDropUp") {
			resetSubNavDrop();
			divToToggle.className = "mainNavDropDown";
		} else {
			resetSubNavDrop();
		}
	}
}