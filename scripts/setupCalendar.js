var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var curWeekDay = new Date().getDay();

// Change curWeekDay to week start on Monday
curWeekDay = curWeekDay == 0
	? 6
	: (curWeekDay - 1);

var curDay = new Date().getDate(); 
var curMonth = new Date().getMonth();  
var curYear = new Date().getFullYear(); 

// If current year is a leap year, add 1 to days[1] (makes february day count 29)
if (curYear % 4 == 0 && curYear % 100 != 0 || curYear % 400 == 0){
	days[1] = days[1] + 1;
}

document.getElementById("prevMonth").addEventListener("click", prevMonth);
document.getElementById("nextMonth").addEventListener("click", nextMonth);
document.getElementById("calendarView").addEventListener("click", calendarView);
document.getElementById("listView").addEventListener("click", listView);

updateMonth();
drawCalendar();

// Update displayed month
function updateMonth(){
	document.getElementById("calendarMonth").innerHTML = "<h3>" + months[curMonth] + "</h3>"; 
}

function prevMonth(){
	if (curMonth > 0){
		curMonth = curMonth -1;
		updateMonth();
		drawCalendar();
	}
}

function nextMonth(){
	if (curMonth < 11){
		curMonth = curMonth +1;
		updateMonth();
		drawCalendar();
	}
}

// User has selected "Calendar View" - display events in calendar format
function calendarView(){
	document.getElementById("calendarControls").style.display = 'block';
	document.getElementById("calendarView").className = "calendarCurTab";
	document.getElementById("listView").className = "";
	drawCalendar();
}

// User has selected "Event List" - display events in list format
function listView(){
	document.getElementById("calendarControls").style.display = 'none';
	document.getElementById("listView").className = "calendarCurTab";
	document.getElementById("calendarView").className = "";
	drawEventList();
}

// Draw the events in a calendar format
function drawCalendar(){
	var dayCounter = 0;
	var calendarHeader = '<ul><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li></ul>';
	
	// Add list start for dates
	var calendarData = '<ul>';
	var monthStart = new Date(curYear, curMonth, 1).getDay();
	var emptyDays = monthStart == 0
		?  6
		: (monthStart - 1);
	
	// Create empty days before start of month
	for (var i = 0; i < emptyDays; i++){
		dayCounter ++;
		calendarData += '<li>-</li>';
	}
	
	// Loop through all days in selected month
	for (var i = 1; i < days[curMonth] + 1; i++){
		dayCounter ++;
		// Set dateToAdd to not be an event
		var dateToAdd = '<li>' + i + '</li>';
		// Loop through events list
		// If event matches day (i) & curMonth, set li to have calEvent class
		for (var j = 0; j < eventList.length; j++){
			if (eventList[j].eventYear == curYear && eventList[j].eventMonth == curMonth + 1 && eventList[j].eventDay == i){
				if (dayCounter % 7 == 1){
					dateToAdd = '<li class="calEvent"><span class="eventInfoBox infoBox1">' + eventList[j].eventTitle + '</br>' + eventList[j].eventTime + '</span>' + i + '</li>';
				} else if (dayCounter % 7 == 0){
					dateToAdd = '<li class="calEvent"><span class="eventInfoBox infoBox2">' + eventList[j].eventTitle + '</span>' + i + '</li>';
				} else {
					dateToAdd = '<li class="calEvent"><span class="eventInfoBox">' + eventList[j].eventTitle + '</span>' + i + '</li>';
				}
				
			}
		}
		// Add dateToAdd to the calendarData list
		calendarData += dateToAdd;
	}
	
	// Create empty days after end of month
	emptyDays = 7 - (dayCounter % 7);
	if (emptyDays < 7){
		for (var i = 0; i < emptyDays; i++){
			calendarData += '<li>-</li>';
		}
	}
	
	// Add list end for dates
	calendarData += '</ul>';	
	document.getElementById("calendarInfo").className = 'calendarInfo';	
	document.getElementById("calendarInfo").innerHTML = calendarHeader;
	document.getElementById("calendarInfo").innerHTML += calendarData;
}

// Draw the events in a list format
function drawEventList(){
	var thisMonth = new Date().getMonth();
	var thisYear = new Date().getFullYear();
	var calendarData = '<table><tr><th>Date</th><th>Event</th><th>Time</th></tr>';
	for (var i = 0; i < eventList.length; i++){
		// Default value if event has no time set
		var timeInfo = "-";
		// Only allow events for the current year
		if (eventList[i].eventMonth >= thisMonth + 1 && eventList[i].eventYear >= thisYear){
			// Check if event has a time
			if (eventList[i].eventTime !== undefined){
				timeInfo = eventList[i].eventTime;
			}
			// Create 3 letter abbreviation of month
			var monthShort = months[eventList[i].eventMonth -1].substring(0, 3);
			// Add event info to the calendarData list
			calendarData += '<tr><th>' + eventList[i].eventDay + " " + monthShort + '</th><td>' + eventList[i].eventTitle + '</td><td>' + timeInfo + '</td></tr>';
		}
	}
	calendarData += '</table>';
	document.getElementById("calendarInfo").className += ' calList';
	document.getElementById("calendarInfo").innerHTML = calendarData;
}