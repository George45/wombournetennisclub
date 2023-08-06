// Set globals
var sponsorSlideIndex = 0;
var sponsorSlides = document.getElementsByClassName("sponImg");
var dots = document.getElementsByClassName("dot");

// Start auto image change
showSponsorSlides();

// Select image to display (Clickable dots)
function currentSlide(n) {
	resetSponsorElements();
	sponsorSlideIndex = n + 1;
	updateSponsorElements();
}

// Auto cycle through images	
function showSponsorSlides() {
	var s;
	resetSponsorElements();
	sponsorSlideIndex++;
	checkSponsorImgLimit();
	updateSponsorElements();
	setTimeout(showSponsorSlides, 5000); // Change image every 2 seconds
}

// Set all images to not display & dots to not active
function resetSponsorElements(){
	for (s = 0; s < sponsorSlides.length; s++) {
		sponsorSlides[s].style.display = "none";
	}
	for (s = 0; s < dots.length; s++) {
		dots[s].className = dots[s].className.replace(" dotActive", "");
	}
}

// Ensures invalid slide index cannot be achieved
function checkSponsorImgLimit(){
	if (sponsorSlideIndex > sponsorSlides.length) {
		sponsorSlideIndex = 1;
	}
	if (sponsorSlideIndex < 1) {
		sponsorSlideIndex = sponsorSlides.length;
	}
}

// Sets visible image & active dot
function updateSponsorElements(){
	sponsorSlides[sponsorSlideIndex-1].style.display = "block";
	dots[sponsorSlideIndex-1].className += " dotActive";
}