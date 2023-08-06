// Toggle if element is display
function toggleDisplay(divID){
	var element = document.getElementById(divID);
	if(element.style.display == 'block' || element.style.display == ''){
		element.style.display = 'none';
	} else {
		element.style.display = 'block';
	}
}